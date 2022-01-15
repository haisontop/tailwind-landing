module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
      colors: {
        primary: "#F5632E",
        malbec: "#3D1A24",
        tangerine: "#F5632E",
        aqua: "#9EE0D6",
        teal: "#1C3D40",
      },
      zIndex: {
        1001: 1001,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
