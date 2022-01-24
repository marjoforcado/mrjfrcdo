module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
