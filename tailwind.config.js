module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  plugins: [],
};
