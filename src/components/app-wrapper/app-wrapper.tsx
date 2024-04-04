'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import progress from '@lib/helpers/progress';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	useEffect(() => {
		// this is very stupid
		// untill the new app router has navigation events (or native event have better support)
		// do this instead to trigger loading spinner
		const click = (e: Event) => {
			let parent: HTMLElement | null = e.target as HTMLElement;

			while (parent) {
				if (parent instanceof HTMLAnchorElement && parent.href !== window.location.href) {
					progress.count = 0;
					progress.start();
					e.stopPropagation();
					e.stopImmediatePropagation();
					break;
				}

				parent = parent.parentNode as HTMLElement;
			}
		};

		const keydown = (e: KeyboardEvent) => {
			if (['Enter'].includes(e.code)) {
				click(e);
			}
		};

		window.addEventListener('click', click);
		window.addEventListener('keydown', keydown);

		return () => {
			window.removeEventListener('click', click);
			window.removeEventListener('keydown', keydown);
		};
	}, []);

	useEffect(() => {
		progress.count = 0;
		progress.done();
	}, [pathname]);

	useEffect(() => {
		// https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
		const onKeyDown = ({ keyCode }: KeyboardEvent) => {
			if (keyCode === 9) {
				document.body.classList.add('user-is-tabbing');
				window.removeEventListener('keydown', onKeyDown);
				window.addEventListener('mousedown', onMouseDown);
			}
		};

		function onMouseDown() {
			document.body.classList.remove('user-is-tabbing');
			window.removeEventListener('mousedown', onMouseDown);
			window.addEventListener('keydown', onKeyDown);
		}

		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('mousedown', onMouseDown);
		};
	}, []);

	return <>{children}</>;
}
