import { draftMode } from 'next/headers';

import AppWrapper from '@components/app-wrapper/app-wrapper';
import ExitPreviewButton from '@components/exit-preview-button/exit-preview-button';
import Only from '@components/only/only';

import '../../../assets/style/app.scss';

export default async function WebRootLayout({ children }: { children: React.ReactNode }) {
	const preview = draftMode().isEnabled;

	return (
		<html lang="en">
			<body>
				<AppWrapper>
					<main>
						{children}
					</main>

					<Only if={preview}>
						<ExitPreviewButton />
					</Only>
				</AppWrapper>
			</body>
		</html>
	);
}
