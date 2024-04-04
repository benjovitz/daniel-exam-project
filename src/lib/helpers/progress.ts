import NProgress from 'nprogress';

const progress = {
	count: 0,
	start() {
		this.count += 1;

		if (this.count === 1) {
			NProgress.start();
		}
	},
	done() {
		this.count = Math.max(this.count - 1, 0);

		if (this.count === 0) {
			NProgress.done();
		}
	},
};

export default progress;
