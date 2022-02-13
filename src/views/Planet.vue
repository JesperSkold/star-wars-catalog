<template>
	<div>
		<ul v-if="planet">
			<h3>{{ planet.name }}</h3>
			<li>Rotation period: {{ planet.rotation_period }}</li>
			<li>Orbital period: {{ planet.orbital_period }}</li>
			<li>Diameter: {{ planet.diameter }}</li>
			<li>Climate: {{ planet.climate }}</li>
			<li>Gravity: {{ planet.gravity }}</li>
			<li>Terrain: {{ planet.terrain }}</li>
		</ul>
	</div>
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
@import "../assets/styles/_info-tabs.scss";
</style>
