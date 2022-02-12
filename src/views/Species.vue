<template>
	<div>
		<ul v-if="species === 'unknown'">
			<h3>Name: Human</h3>
			<li>Classification: mammal</li>
			<li>Designation: sentient</li>
		</ul>
		<ul class="charInfo" v-else-if="species">
			<h3>Name: {{ species.name }}</h3>
			<li>Classification: {{ species.classification }}</li>
			<li>Designation: {{ species.designation }}</li>
			<li>Average height: {{ species.average_height }}</li>
			<li>Skin colors: {{ species.skin_colors }}</li>
			<li>Hair colors: {{ species.hair_colors }}</li>
			<li>Eye color: {{ species.eye_colors }}</li>
			<li>Average lifespan: {{ species.average_lifespan }}</li>
			<li>Language: {{ species.language }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		species() {
			return this.$store.state.currSpecies;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_info-tabs.scss";
</style>
