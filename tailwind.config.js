/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include all paths where TailwindCSS will be used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
