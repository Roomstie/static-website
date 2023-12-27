const colors = require("tailwindcss/colors");
const defaultConfig = require("tailwindcss/defaultConfig");
const defaultTheme = require("tailwindcss/defaultTheme");

const roomstieBlue = {
  100: "#bdb8cb",
  300: "#7f7698",
  500: "#433a68",
  700: "#04003b",
};

const roomstiePurple = {
  100: "#e0c4e5",
  300: "#bf8bcb",
  500: "#9d52b0",
  700: "#780096",
};

const roomstiePink = {
  100: "#fecdd7",
  300: "#f79ab1",
  500: "#eb638c",
  700: "#db0069",
};

const roomstieYellow = {
  100: "#ffe4c8",
  300: "#ffc993",
  500: "#ffae5d",
  700: "#f7941d",
  900: "#B86C00",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Eudoxus Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      red: colors.red,
      slate: colors.slate,
      gray: {
        100: "#F2F7F2",
        200: "#EFEFEF",
      },

      blue: roomstieBlue,
      purple: roomstiePurple,
      pink: roomstiePink,
      yellow: roomstieYellow,

      primary: roomstiePurple[700],
      secondary: roomstieBlue[700],
      accent: roomstieYellow[700],
    },
  },
  plugins: [],
};
