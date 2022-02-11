<template>
	<div class="wrapper">
		<header>
			<h1>Star Wars Catalog</h1>
			<p class="starwarsQuote"></p>
		</header>
		<main>
			<section>
				<h2 class="characterBackground">Characters</h2>
				<ul class="characters">
					<li v-for="char of chars" :key="char.name">{{ char.name }}</li>
				</ul>
				<div class="paginator">
					<span class="prevBtn" @click="prevPage">&#9665;</span>
					<span class="numberList">{{ currPage }} / {{ maxPage }}</span>
					<span class="nextBtn" @click="nextPage">&#9655;</span>
				</div>
			</section>
			<section>
				<h2 class="detailsBackground">Details</h2>
				<ul class="charDetails"></ul>
				<div class="infoTabs"></div>
				<ul class="charInfo"></ul>
			</section>
		</main>
	</div>
</template>

<script>
// import Spinner from "../components/Spinner.vue";
export default {
	components: {
		// Spinner
	},
	data() {
		return {
			loading: true,
			planetLoading: true,
			currChar: null,
		};
	},
	computed: {
		chars() {
			return this.$store.state.characters;
		},
		currPage() {
			return this.$store.state.currPage;
		},
		maxPage() {
			return this.$store.state.maxPage;
		},
	},
	methods: {
		async prevPage() {
			await this.$store.dispatch("fetchPrevPage");
		},
		async nextPage() {
			await this.$store.dispatch("fetchNextPage");
		},
	},
	async mounted() {
		await this.$store.dispatch("fetchChars");
	},
};
</script>

<style></style>
