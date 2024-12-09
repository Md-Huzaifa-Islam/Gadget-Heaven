/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#9538E2"],
        background: ["#F6F6F6"],
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [daisyui],
};
