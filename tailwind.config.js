export default {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blueBrand: "rgb(var(--blue-color) / <alpha-value>)",
                purpleBrand: "rgb(var(--purple-color) / <alpha-value>)",
            },
        },
    },
};
