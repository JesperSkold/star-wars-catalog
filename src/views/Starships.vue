<template>
	<div v-if="starships.length">
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
.charInfo,
ul h3,
ul {
	display: flex;
	flex-direction: column;
	background-color: grey;
	// flex: 1;
	color: rgba(255, 255, 255, 0.849);
}

div {
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
