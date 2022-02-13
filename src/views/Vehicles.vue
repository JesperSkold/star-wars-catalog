<template>
	<div class="container" v-if="vehicles.length">
		<ul>
			<h3>Name: {{vehicles[page].name}}</h3>
			<li>Model: {{ vehicles[page].model }}</li>
			<li>Manufacturer: {{ vehicles[page].manufacturer }}</li>
			<li>Cost in credits: {{ vehicles[page].cost_in_credits }}</li>
			<li>Length: {{ vehicles[page].length }}</li>
			<li>Max atmosphering speed: {{ vehicles[page].max_atmosphering_speed }}</li>
			<li>Crew: {{ vehicles[page].crew }}</li>
			<li>Passengers: {{ vehicles[page].passengers }}</li>
			<li>Cargo capacity: {{ vehicles[page].cargo_capacity }}</li>
			<li>Consumables: {{ vehicles[page].consumables }}</li>
		</ul>
				<div class="button-container">
		<button @click="prevPage" :class="{'hide-btn': page === 0}">&#9665;</button>
		<button @click="nextPage" :class="{'hide-btn': page === vehicles.length - 1}">&#9655;</button>
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
		vehicles() {
			return this.$store.state.currVehicles;
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
