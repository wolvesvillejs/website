import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'collection',
	name: 'Collection',
	global: 'Collection',
	docsRepo: 'discordjs/docs',
	repo: 'discordjs/discord.js',
	defaultTag: 'stable',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/(^@\w+\/\w+@v?)?(?<semver>\d+.\d+.\d+)-?.*/, ''), '0.3.1'),
});
