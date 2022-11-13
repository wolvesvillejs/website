import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set();
export default new DocsSource({
	id: 'wolvesville.js',
	name: 'Wolvesville',
	global: 'Wolvesville',
	docsRepo: 'wolvesvillejs/docs',
	repo: 'wolvesvillejs/wolvesville.js',
	defaultTag: 'main',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '9.0.0'),
});
