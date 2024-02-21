/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "767px" },
        md: "960px",
        lg: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2.5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        // primary
        bright_red: "hsl(var(--bright-red))",
        dark_blue: "hsl(var(--dark-blue))",
        // neutral
        dark_grayish_blue: "hsl(var(--dark-grayish-blue))",
        very_dark_blue: "hsl(var(--very-dark-blue))",
        very_pale_red: "hsl(var(--very-pale-red))",
        very_light_gray: "hsl(var(--very-light-gray))",
        neutral: "hsl(var(--neutral))",
      },
      fontFamily: {
        be_vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
