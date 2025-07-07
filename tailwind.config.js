import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["'Noto Sans JP'", "sans-serif"],
    },
  },
  plugins: [flowbite],
};
