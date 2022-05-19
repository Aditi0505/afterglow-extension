module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: () => ({
        "screen/5": "calc(100vh / 5)",
        "height-10": "10%",
        "height-85": "85%",
        "height-90": "90%",
        "height-40": "40rem",
        "height-20": "20rem",
        "height-30": "30rem",
      }),
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Quattrocento: ["Quattrocento", "serif"],
      },
      borderRadius: {
        "b-30": "30rem",
        "b-3": "3rem",
      },
      width: () => ({
        "width-20": "20rem",
        "width-25": "25rem",
        "width-35": "35rem",
        "width-40": "40rem",
        "width-90": "90%",
        "width-30": "30rem",
      }),
    },
  },
  plugins: [],
};
