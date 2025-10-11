/** @type {import(import('tailwindcss').config)} */

module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {},
    },
    plugins: [
        import('@tailwindcss/typography'),
        import('@tailwindcss/aspect-ratio'),
    ],
};