import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Fahkwang:['Fahkwang','sans-serif'],
      },
      backgroundImage: {
        //  'login-bg': "url('./src/images/login-bg.webp')"
         
        },
      },
    },
  }
  

export default config;
