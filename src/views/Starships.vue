<template>
	<div v-if="starships.length">
		<!-- <ul v-for="starship of starships" :key="starship.name"> -->
		<ul>
			<h3>Name: {{ starships[page].name }}</h3>
			<li>Model: {{ starships[page].model }}</li>
			<li>Manufacturer: {{ starships[page].manufacturer }}</li>
			<li>Cost in credits: {{ starships[page].cost_in_credits }}</li>
			<li>Length: {{ starships[page].length }}</li>
			<li>Max atmosphering speed: {{ starships[page].max_atmosphering_speed }}</li>
			<li>Crew: {{ starships[page].crew }}</li>
			<li>Passengers: {{ starships[page].passengers }}</li>
			<li>Cargo capacity: {{ starships[page].cargo_capacity }}</li>
			<li>Consumables: {{ starships[page].consumables }}</li>
			<li>Hyperdrive rating: {{ starships[page].hyperdrive_rating }}</li>
			<li>MGLT: {{ starships[page].MGLT }}</li>
			<li>Starship Class: {{ starships[page].starship_class }}</li>
		</ul>
		<div class="button-container">
		<button @click="prevPage" :disabled="page === 0">&#9665;</button>
		<button @click="nextPage" :disabled="page === starships.length - 1">&#9655;</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// pageCounter: 0,
		};
	},
	methods: {
		nextPage() {
			this.$store.dispatch("nextPageDispatch");
			console.log(this.page);
			// this.pageCounter++;
			// console.log(this.pageCounter);
			// console.log(this.starships[this.pageCounter].name);
		},
		prevPage() {
			this.$store.dispatch("prevPageDispatch");
			console.log(this.page);
			// console.log(this.starships[this.pageCounter].name);
			// console.log(this.pageCounter);
			// this.pageCounter--;
		},
	},
	computed: {
		starships() {
			return this.$store.state.currStarships;
		},
		page() {
			return this.$store.state.starshipPage;
		},
		// if (this.starships[this.pageCounter] === undefined) {
		// 	this.pageCounter = 0
	},
	mounted() {
		// console.log(this.pageCounter, "lol");
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_info-tabs.scss";
</style>
