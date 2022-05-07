<template>
	<div class="bg-discord-blurple-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<InstallButton />
		</div>
	</div>

	<div
		class="prose prose-discord dark:prose-light lg:prose-lg px-6 mx-auto pb-8 w-full xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-prose"
	>
		<div class="col-span-full">
			<h2>About</h2>
			<p>
				wolvesville.js is the
				<a href="https://nodejs.org" target="_blank" rel="noopener"
					>Node.js <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				module that allows you to interact with the
				<a href="https://app.wolvesville.com" target="_blank" rel="noopener"
					>Wolvesville API <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true"
				/></a>
				very easily.
			</p>
			<p>
				Usability, consistency, and performance are key focuses of wolvesville.js, and it also has nearly 90% coverage of
				the Wolvesville API.
			</p>
		</div>
		<div>
			<h2>Why?</h2>
			<ul>
				<li>Object-oriented</li>
				<li>Speedy and efficient</li>
				<li>Feature-rich</li>
				<li>Flexible</li>
				<li>100% Promise-based</li>
			</ul>
		</div>
		<div>
			<h2>Statistics</h2>
			<Stats />
			<p class="text-center">... and growing!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import InstallButton from '~/components/InstallButton.vue';
import Stats from '~/components/Stats.vue';
import MainSource from '~/data/MainSource';
import { useStore } from '~/store';

const store = useStore();

const docs = computed(() => store.state.docs);

if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: MainSource });
	void store.dispatch('fetchTags', { currentSource: MainSource });
}
</script>
