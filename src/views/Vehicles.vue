<template>
	<div v-if="vehicles.length">
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
div {
	padding: 0.8rem;
}

h3 {
	letter-spacing: 0.3rem;
	font-size: 1.5rem;
	color: rgba(0, 0, 0, 0.603);
}
li {
	list-style: none;
	padding: 0.2rem;
	letter-spacing: 0.1rem;
}
.charInfo, ul h3, ul {
	display: flex;
	flex-direction: column;
	background-color: grey;
	// flex: 1;
	color: rgba(255, 255, 255, 0.849);
}

div{
	overflow-y: scroll;
}

.charInfo::-webkit-scrollbar-thumb {
	background-color: darkgrey;
	border-radius: 1rem;
}
.charInfo::-webkit-scrollbar-track {
	border-radius: 1rem;
	box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	margin-top: 0.1rem;
}

.charInfo::-webkit-scrollbar {
	width: 1em;
}

.charDetails {
	background-color: #a5a5a5;
	// flex: 1;
}

.charInfo h3 {
	color: rgba(255, 255, 255, 0.849);
}

.charInfo h3:not(:first-child) {
	margin: 1rem 0 0.2rem 0;
}
</style>
