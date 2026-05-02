/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory:      "#F8F4EF",
        "warm-white": "#FDFAF6",
        sage:       "#8A9E7F",
        "sage-dark":"#5C7A50",
        earth:      "#C4916A",
        bark:       "#4A3728",
        gold:       "#C9A96E",
        mist:       "#E8E0D5",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body:    ["Jost", "sans-serif"],
        script:  ["Great Vibes", "cursive"],
      },
      boxShadow: {
        warm:    "0 8px 40px rgba(74,55,40,0.10)",
        "warm-lg":"0 20px 60px rgba(74,55,40,0.18)",
      },
      keyframes: {
        "float-bounce": {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-bounce": "float-bounce 2s ease-in-out infinite",
        "fade-up":      "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
