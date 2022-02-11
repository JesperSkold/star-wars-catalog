<template>
	<ul class="charInfo" v-if="planet">
		<h3>{{ planet.name }}</h3>
		<li>Rotation period: {{ planet.rotation_period }}</li>
		<li>Orbital period: {{ planet.orbital_period }}</li>
		<li>Diameter: {{ planet.diameter }}</li>
		<li>Climate: {{ planet.climate }}</li>
		<li>Gravity: {{ planet.gravity }}</li>
		<li>Terrain: {{ planet.terrain }}</li>
	</ul>
</template>

<script>
export default {
	computed: {
		planet() {
			return this.$store.state.currPlanet;
		},
	},
};
</script>

<style lang="scss" scoped>
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
.charInfo {
	display: flex;
	flex-direction: column;
	background-color: grey;
	// flex: 1;
	color: rgba(255, 255, 255, 0.849);
}

.infoScroll {
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
