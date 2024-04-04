import type { TemplateConfig } from '../helper';
import type { ContentPageData } from './content-page.query';

import { contentPageDataLoader } from './content-page.query';
import { ContentPageTemplate } from './content-page.template';

export const contentPageConfig: TemplateConfig<'contentPage', ContentPageData> = {
	name: 'contentPage',
	dataLoader: contentPageDataLoader,
	Component: ContentPageTemplate,
};
