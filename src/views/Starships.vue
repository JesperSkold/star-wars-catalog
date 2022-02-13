<template>
	<div v-if="starships.length">
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
		<button @click="prevPage" :class="{'hide-btn': page === 0}">&#9665;</button>
		<button @click="nextPage" :class="{'hide-btn': page === starships.length - 1}">&#9655;</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		nextPage() {
			this.$store.dispatch("nextPageDispatch");
		},
		prevPage() {
			this.$store.dispatch("prevPageDispatch");
		},
	},
	computed: {
		starships() {
			return this.$store.state.currStarships;
		},
		page() {
			return this.$store.state.infoTabPage;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_info-tabs.scss";
</style>
