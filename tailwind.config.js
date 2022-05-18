module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/5": "calc(100vh / 5)",
      }),
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Quattrocento: ["Quattrocento", "serif"],
      },
    },
  },
  plugins: [],
};
