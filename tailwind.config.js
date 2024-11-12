/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-custom": "ping-custom 1.5s linear reverse", // Custom timing
      },
      keyframes: {
        "ping-custom": {
          "0%": { transform: "scale(1.2)" },
          "75%": { transform: "scale(1.4)" }, // Custom scale and fade
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
