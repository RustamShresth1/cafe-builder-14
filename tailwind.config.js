export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          700: "#3d2b1f",
          800: "#2c1810",
          900: "#1a0f0a",
        },
        coffee: {
          300: "#d4a574",
          400: "#c19a6b",
          500: "#a0522d",
          600: "#8b4513",
          800: "#5c3317",
          900: "#3d2317",
        },
        steam: {
          100: "#f5f5dc",
          200: "#e6ddd4",
          300: "#d3c7b8",
          400: "#a69b8e",
          500: "#7a7065",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
