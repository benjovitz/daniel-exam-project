import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { AssembleContext } from '@jdpnielsen/assemble';

import { assembleTemplate, changeCase, patchTsFile, prompt, runner } from '@jdpnielsen/assemble';
import ts from 'typescript';

const { SyntaxKind } = ts;

await runner(async (context: AssembleContext) => {
	const currentDir = dirname(fileURLToPath(import.meta.url));

	const answers = await prompt<{ name: string }>([
		{
			type: 'text',
			name: 'name',
			message: 'What is the name of the component?',
			required: true,
		},
	]);

	const name = changeCase(answers.name);

	const vars = {
		name: name.kebabCase,
		type: name.camelCase,
		componentName: name.pascalCase,
		componentClass: name.camelCase,
	};

	await assembleTemplate({
		input: path.join(currentDir, './blueprint.template.tsx.eta'),
		output: path.join(context.cwd, `./src/templates/${vars.name}/${vars.name}.template.tsx`),
		templateVariables: vars,
		context,
	});

	await assembleTemplate({
		input: path.join(currentDir, './blueprint.stories.tsx.eta'),
		output: path.join(context.cwd, `./src/templates/${vars.name}/${vars.name}.stories.tsx`),
		templateVariables: vars,
		context,
	});

	await assembleTemplate({
		input: path.join(currentDir, './blueprint.query.ts.eta'),
		output: path.join(context.cwd, `./src/templates/${vars.name}/${vars.name}.query.ts`),
		templateVariables: vars,
		context,
	});

	await assembleTemplate({
		input: path.join(currentDir, './blueprint.schema.ts.eta'),
		output: path.join(context.cwd, `./src/templates/${vars.name}/${vars.name}.schema.ts`),
		templateVariables: vars,
		context,
	});

	await assembleTemplate({
		input: path.join(currentDir, './index.ts.eta'),
		output: path.join(context.cwd, `./src/templates/${vars.name}/index.ts`),
		templateVariables: vars,
		context,
	});

	await patchTsFile({
		context,
		input: `${context.cwd}/src/templates/index.ts`,
		patcher(file) {
			file.addImportDeclaration({
				namedImports: [`${vars.type}Config`],
				moduleSpecifier: `./${vars.name}`,
			});

			const blockVariable = file.getVariableDeclarationOrThrow('templates');
			const objectLiteral = blockVariable.getFirstDescendantByKindOrThrow(SyntaxKind.ObjectLiteralExpression);
			const props = objectLiteral.getProperties();
			const newElementName = `[${vars.type}Config.name]`;
			const index = props.findIndex((element) => element.getText() > newElementName);

			if (index === -1) {
				objectLiteral.addPropertyAssignment({
					name: newElementName,
					initializer: `${vars.type}Config`,
				});
			} else {
				objectLiteral.insertPropertyAssignment(index, {
					name: newElementName,
					initializer: `${vars.type}Config`,
				});
			}
		},
	});

	await patchTsFile({
		context,
		input: `${context.cwd}/src/templates/schemas.ts`,
		patcher(file) {
			file.addImportDeclaration({
				defaultImport: `${vars.type}Schema`,
				moduleSpecifier: `./${vars.name}/${vars.name}.schema`,
			});

			const blockVariable = file.getVariableDeclarationOrThrow('templateSchemas');
			const array = blockVariable.getFirstDescendantByKindOrThrow(SyntaxKind.ArrayLiteralExpression);
			const elements = array.getElements();
			const newElement = `${vars.type}Schema`;
			const index = elements.findIndex((element) => element.getText() > newElement);

			if (index === -1) {
				array.addElement(newElement);
			} else {
				array.insertElements(index, [newElement]);
			}
		},
	});
});
