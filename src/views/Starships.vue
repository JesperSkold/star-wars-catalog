<template>
	<div class="container" v-if="starships.length">
		<ul v-for="starship of starships" :key="starship.name">
			<h3>Name: {{ starship.name }}</h3>
			<li>Model: {{ starship.model }}</li>
			<li>Manufacturer: {{ starship.manufacturer }}</li>
			<li>Cost in credits: {{ starship.cost_in_credits }}</li>
			<li>Length: {{ starship.length }}</li>
			<li>Max atmosphering speed: {{ starship.max_atmosphering_speed }}</li>
			<li>Crew: {{ starship.crew }}</li>
			<li>Passengers: {{ starship.passengers }}</li>
			<li>Cargo capacity: {{ starship.cargo_capacity }}</li>
			<li>Consumables: {{ starship.consumables }}</li>
			<li>Hyperdrive rating: {{ starship.hyperdrive_rating }}</li>
			<li>MGLT: {{ starship.MGLT }}</li>
			<li>Starship Class: {{ starship.starship_class }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		starships() {
			return this.$store.state.currStarships;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_info-tabs.scss";
</style>
