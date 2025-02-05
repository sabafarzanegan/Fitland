import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0",
          sm: "0px 0.5rem",
          md: "0px 1.5rem",
          lg: "0px 4rem",
          "2xl": "0px 4rem",
          "3xl": "0px 4rem",
          "4xl": "0px 4rem",
        },
      },
      colors: {
        primary: {
          "50": "#FEEEE8",
          "150": "#FDCCBB",
          "300": "#FC9877",
          "400": "#FB7649",
          "600": "#E14C19",
          "700": "#963211",
          "850": "#4B1908",
          "900": "#190803",
          main: "#FA541C",
        },
        secondary: {
          "0": "#EBF5FF",
          "50": "#CFE8FF",
          "100": "#67AAE6",
          "150": "#518CC1",
          "300": "#2F5F8A",
          "400": "#194165",
          "700": "#021526",
          "850": "#010A13",
          "900": "#01070D",
          main: "#032340",
        },
        neutral: {
          "50": "#FFFFFF",
          "100": "#F9F9F9",
          "150": "#EDEDED",
          "200": "#D9D9D9",
          "300": "#CBCBCB",
          "400": "#ADADAD",
          "500": "#868686",
          "600": "#606060",
          "700": "#404040",
          "800": "#000306",
        },
        cinnabar: {
          "200": "#FADDCA",
          "500": "#E53935",
          "800": "#8A1513",
        },
        selective_yellow: {
          "200": "#FFF3BF",
          "500": "#FFB300",
          "800": "#995700",
        },
        fern: {
          "200": "#D3EDDD",
          "500": "#66BB6A",
          "800": "#257028",
        },
        picton_blue: {
          "200": "#C7F2FC",
          "500": "#29B6F6",
          "800": "#0F5894",
        },
        background: "#FFFFFF",
      },

      screens: {
        xs: "320px",
        sm: "481px",
        md: "601px",
        lg: "769px",
        xl: "1025px",
        "2xl": "1281px",
        "3xl": "1441px",
      },
    },
  },
  plugins: [],
} satisfies Config;
