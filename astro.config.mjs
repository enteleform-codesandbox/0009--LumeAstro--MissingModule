// @ts-check

export default /** @type {import("astro").AstroUserConfig} */ ({

	projectRoot: "./",
	public:      "./public",
	dist:        "./dist",
	src:         "./src/",
	pages:       "./src/Pages/",

	renderers: [
		"@astrojs/renderer-solid",
	],

})
