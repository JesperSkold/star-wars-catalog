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
