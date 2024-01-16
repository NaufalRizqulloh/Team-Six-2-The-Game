/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            montserrat: ["Montserrat", "sans-serif"],
            saira: ['Saira Condensed', "sans-serif"],
            ibm: ['IBM Plex Sans Condensed', 'sans-serif'],
            sSegment: ['Seven Segment', 'sans-serif'],
            anon: ['Anonymous Pro', 'sans-serif']
        },
        colors: {
            primary: '#FF914D',
            secondary: '#ED3237',
            gray: '#545454',
            gold: '#FFFF00',
        }
    },
},
  plugins: [],
}

