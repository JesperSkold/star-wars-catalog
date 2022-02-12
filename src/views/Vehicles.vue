<template>
	<div class="container" v-if="vehicles.length">
		<ul v-for="vehicle of vehicles" :key="vehicle.name">
			<h3>Name: {{vehicle.name}}</h3>
			<li>Model: {{ vehicle.model }}</li>
			<li>Manufacturer: {{ vehicle.manufacturer }}</li>
			<li>Cost in credits: {{ vehicle.cost_in_credits }}</li>
			<li>Length: {{ vehicle.length }}</li>
			<li>Max atmosphering speed: {{ vehicle.max_atmosphering_speed }}</li>
			<li>Crew: {{ vehicle.crew }}</li>
			<li>Passengers: {{ vehicle.passengers }}</li>
			<li>Cargo capacity: {{ vehicle.cargo_capacity }}</li>
			<li>Consumables: {{ vehicle.consumables }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		vehicles() {
			return this.$store.state.currVehicles;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_info-tabs.scss";
</style>
