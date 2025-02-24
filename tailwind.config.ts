import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#043b6b", // Deep Blue
          secondary: "#62b7fb", // Light Blue
          accent: "#397db3", // Medium Blue
          dark: "#000000", // Black
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(45deg, #043b6b, #62b7fb)",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay-1": "float 6s ease-in-out 1s infinite",
        "float-delay-2": "float 6s ease-in-out 2s infinite",
        "float-delay-3": "float 6s ease-in-out 3s infinite",
        "float-delay-4": "float 6s ease-in-out 4s infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
