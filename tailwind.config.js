const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose["800"],
        secondary: colors.neutral["900"],
        loud: colors.stone["300"],
        quiet: colors.stone["400"],
        link: colors.sky["500"],
      },
      fontFamily: {
        "roboto-slab": "'Roboto Slab', serif",
        "courier-prime": "'Courier Prime', monospace",
        "bebas-neue": "'Bebas Neue', cursive",
      },
      keyframes: ({ theme }) => ({
        blink: {
          "from, to": {
            color: "transparent",
          },
          "50%": {
            color: theme("colors.stone.300"),
          },
        },
      }),
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
