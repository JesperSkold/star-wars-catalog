<template>
	<div class="wrapper">
		<header>
			<h1>Star Wars Catalog</h1>
			<p class="starwarsQuote">"{{swQuote}}"</p>
		</header>
		<main>
			<section>
				<h2 class="characterBackground">Characters</h2>
				<Spinner v-if="loading" />
				<ul class="characters">
					<li
						v-for="char of chars"
						:key="char.name"
						@click="
							setClickedChar(char);
							setActive(char.name);
						"
						:class="{ activeLi: activeName === char.name }"
					>
						{{ char.name }}
					</li>
				</ul>
				<div class="paginator">
					<button class="prevBtn" :class="{ hideBtn: currPage === 1 }" :disabled="loading" @click="prevPage">&#9665;</button>
					<span class="numberList">{{ currPage }} / {{ maxPages }}</span>
					<button class="nextBtn" :class="{ hideBtn: currPage === maxPages }" :disabled="loading" @click="nextPage">&#9655;</button>
				</div>
			</section>
			<section>
				<h2 class="detailsBackground">Details</h2>
				<ul class="charDetails" v-if="currChar">
					<h3>{{ currChar.name }}</h3>
					<li>Height: {{ currChar.height }} cm</li>
					<li>Mass: {{ currChar.mass }} kg</li>
					<li>Hair color: {{ currChar.hair_color }}</li>
					<li>Skin color: {{ currChar.skin_color }}</li>
					<li>Eye color: {{ currChar.eye_color }}</li>
					<li>Birth Year: {{ currChar.birth_year }}</li>
					<li>Gender: {{ currChar.gender }}</li>
				</ul>
				<div class="infoTabs" v-if="currChar">
					<router-link :to="{ name: 'PlanetView' }"><button>Planet</button></router-link>
					<router-link :to="{ name: 'SpeciesView' }"><button>Species</button></router-link>
					<router-link :to="{ name: 'VehiclesView' }"><button :class="{ inactiveTab: !vehicles.length }">Vehicles</button></router-link>
					<router-link :to="{ name: 'StarshipsView' }"><button :class="{ inactiveTab: !starships.length }">Starships</button></router-link>
				</div>
				<router-view></router-view>
			</section>
		</main>
	</div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
const starwars = require('starwars');
export default {
	components: {
		Spinner,
	},
	data() {
		return {
			loading: true,
			currChar: null,
			activeName: null,
			swQuote: null,
		};
	},
	computed: {
		chars() {
			return this.$store.state.characters;
		},
		vehicles() {
			return this.$store.state.currVehicles;
		},
		starships() {
			return this.$store.state.currStarships;
		},
		currPage() {
			return this.$store.state.currPage;
		},
		maxPages() {
			return this.$store.state.maxPages;
		},
	},
	methods: {
		setActive(charName) {
			this.activeName = charName
		},
		async prevPage() {
			this.loading = true;
			await this.$store.dispatch("fetchPrevPage");
			this.loading = false;
		},
		async nextPage() {
			this.loading = true;
			await this.$store.dispatch("fetchNextPage");
			this.loading = false;
		},
		async setClickedChar(char) {
			this.currChar = char;
			this.loading = true;
			await this.$store.dispatch("fetchPlanet", char);
			await this.$store.dispatch("fetchSpecies", char);
			await this.$store.dispatch("fetchVehicles", char);
			await this.$store.dispatch("fetchStarships", char);
			this.loading = false;
		},
	},
	async mounted() {
		this.swQuote = starwars()
		await this.$store.dispatch("fetchChars");
		this.loading = false;
	},
};
</script>

<style lang="scss" scoped>
.infoTabs a.router-link-active {
	-webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, 5px 5px 15px 5px rgba(0, 0, 0, 0);
	box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 5px, #f1cca7 0 -10px 20px, 5px 5px 15px 5px rgba(0, 0, 0, 0);
}

.inactiveTab {
	opacity: 0.4 !important;
}

.hideBtn {
	visibility: hidden;
}

.wrapper {
	height: 100vh;
	background-color: rgba(8, 8, 8, 0.774);
}

header {
	background-image: url("../assets/header-background.png");
	background-repeat: no-repeat;
	background-size: auto 100vw;
	background-size: cover;
	display: flex;
	padding: 4.4rem;
	background-position: bottom right;
	flex-direction: column;
}

header h1 {
	letter-spacing: 0.5rem;
	width: 40rem;
	text-transform: uppercase;
	color: rgb(240, 217, 9);
	font-size: 4rem;
	font-weight: 300;
	margin-bottom: 1rem;
}

h2 {
	color: rgb(240, 217, 9);
}

h3 {
	letter-spacing: 0.3rem;
	font-size: 1.5rem;
	color: rgba(0, 0, 0, 0.603);
}

.charDetails,
.charInfo {
	padding: 0.8rem;
}

li {
	list-style: none;
	padding: 0.2rem;
	letter-spacing: 0.1rem;
}

main {
	display: flex;
	justify-content: center;
}

section {
	height: 65vh;
	margin: -3rem 2rem 4rem 2rem;
	width: 48vh;
	background-color: rgb(165, 165, 165);
	border-radius: 0.8rem 0.8rem 0 0;
}

section:first-child {
	display: flex;
	flex-direction: column;
}

.characterBackground {
	background-color: rgb(87, 86, 86);
	box-shadow: 0px 5px 1px 0px rgba(0, 0, 0, 0.55);
	margin-bottom: 0.2rem;
}

.detailsBackground {
	background-color: rgb(78, 116, 119);
}

.characterBackground,
.detailsBackground {
	padding: 1rem;
	display: flex;
	justify-content: center;
	letter-spacing: 0.4rem;
	border-radius: 0.8rem 0.8rem 0 0;
}

.charDetails {
	background-color: #a5a5a5;
}

section:nth-of-type(2) {
	background-color: grey;
	display: flex;
	flex-direction: column;
}

.paginator {
	user-select: none;
	margin: auto auto 0.2rem auto;
}

.paginator span {
	font-size: 2rem;
	margin: 0 1rem 0 1rem;
}

.nextBtn {
	cursor: pointer;
	font-size: 2rem;
	border: none;
	background: none;
}

.prevBtn {
	cursor: pointer;
	font-size: 2rem;
	border: none;
	background: none;
}

button[disabled="disabled"] {
	color: black;
}

.infoTabs {
	background: #a5a5a5;
	display: flex;
	justify-content: space-evenly;
}

.infoTabs button {
	padding: 0.8rem 0.5rem;
	width: 4.5rem;
	color: goldenrod;
	background-color: rgba(245, 245, 245, 0.75);
	border: none;
	border-radius: 0.2rem 0.2rem 0 0;
	cursor: pointer;
}

.starwarsQuote {
	color: rgb(240, 217, 9);
	font-style: italic;
}

.characters li {
	cursor: pointer;
	font-size: 1.2rem;
	padding: 0.5rem;
	transition: zoom 1s;
	transition: background-color 0.5s;
	&:hover {
		zoom: 110%;
		color: white;
		background-color: rgba(0, 0, 0, 0.801) !important;
	}
	&:hover::after {
		content: "▸";
	}
}

.activeLi {
	font-size: 1.2rem;
	padding: 0.5rem;
		zoom: 110%;
		color: white;
		background-color: rgba(0, 0, 0, 0.801) !important;
	&::after {
		content: "▸";
	}
}

.characters li:nth-child(2n + 1) {
	background-color: grey;
	color: rgba(245, 245, 245, 0.75);
}

.characters li:nth-child(2n) {
	background-color: rgba(245, 245, 245, 0.75);
}
</style>
