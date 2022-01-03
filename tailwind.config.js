const plugin = require("tailwindcss/plugin")
const _ = require("lodash")

/*
   Responsive Design Breakpoint Guid
   ==================================

   prefix min width screen size
   ------ --------- -----------
   sm      640px    small
   md      768px    medium
   lg     1024px    large
   xl     1280px    extra large
   2xl    1536px    2x extra large

   className="w-{default} md:w-{for medium} lg:w-{for large}
 */

const gradient = plugin(function ({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})

module.exports = {
    important: true,
    purge: [
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./src/**/*.ts",
        "./src/**/*.tsx",
        "./public/**/*.html",
    ],
    theme: {
        gradients: (theme) => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#111",
                bgalt: "#000",
                "color-default": "#eee",
                "color-1": "#6699cc",
                "color-2": "#ffcc99",
                border: "#718096",
                primary: "#f55555",
                medium: "#222",
            },
        },
        colors: {
            bg: "#fff",
            bgalt: "#f5f5f5",
            "color-default": "#333",
            "color-1": "#0066ff",
            "color-2": "#003399",
            "color-3": "#aeb4c5",
            note: "#ffa",
            primary: "#f55555",
            secondary: "#6888df",
            link: "#0a71c5",
            medium: "#cfd8dc",
            white: "#fff",
            black: "#000",
            transparent: "rgba(0,0,0,0)",
            error: "#ef5350",
            red: "#c53030",
            darkblue: "darkblue",
            lightblue: "lightblue",
            success: "#8bc34a",
        },
        extend: {
            fontSize: {
                "7xl": "5rem",
            },
            spacing: {
                "1px": "1px",
                "2px": "2px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require(`tailwind-theme-switcher`), gradient],
}
