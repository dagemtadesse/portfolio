/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.tsx",
    "./sections/**/*.tsx",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#212529",
        green: "rgba(106, 153,78,.6)",
        ligthestGrey: "#f5f5f5",
        lighterGrey: "#eee",
        lightGrey: "#BDBDBD",
        darkerGrey: "#616161",
        customBlack: "#383838",
        //
        divider: 'rgba(255, 255, 255, 0.1)',
        primary: '#7161ef',
        background: '#121212'
      },
      fontFamily: {
        Montserrat: "Montserrat", // not needed
        OpenSans: "'Open Sans', sans-serif", // not needed
        ibmplex: "'IBM Plex Sans', sans-serif",
      },
      backgroundImage: {
        blur: "url(/background.svg)",
        gradient:
          "linear-gradient(-225deg, #5D9FFF 0%, #fff 50%, #6BBBFF 100%)",
        blob: "url(/blob.svg)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "pulse-animation": {
          "0%": { "box-shadow": "0 0 0 0px rgba(0, 0, 0, 0.2)" },
          "100%": { "box-shadow": "0 0 0 16px rgba(0, 0, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "pulse-animation": "pulse-animation 1s"
      },
    },
  },
  plugins: [],
};
