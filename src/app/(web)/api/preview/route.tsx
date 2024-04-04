import type { NextRequest } from 'next/server';

import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import config from '@config';

export function GET(req: NextRequest) {
	draftMode().enable();

	return redirect(`${config.appUrl}/${req.nextUrl.searchParams.get('redirect')}`);
}
