/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            width: {
                100: '100px',
                10: '10px',
                20: '20px',
            },
            height: {
                5: '5px',
                50: '50px',
                100: '100px',
                200: '200px',
                300: '300px',
            },
            backgroundColor: {
                primary: '#2A2A8F',
            },
            fontSize: {
                16: ['16px', '16px'],
                18: ['18px', '18px'],
                20: ['20px', '20px'],
                24: ['24px', '24px'],
            },
            colors: {
                primary: '#2A2A8F',
            },
        },
    },
    plugins: [],
}
