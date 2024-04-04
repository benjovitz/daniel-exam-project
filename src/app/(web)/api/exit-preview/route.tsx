import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import config from '@config';

export function GET() {
	draftMode().disable();

	return redirect(`${config.appUrl}/`);
}
