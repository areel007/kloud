/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            width: {
                28: '28px',
                30: '30px',
                100: '100px',
                150: '150px',
                10: '10px',
                20: '20px',
                244: '244px',
                300: '300px',
                350: '350px',
                400: '400px',
            },
            height: {
                5: '5px',
                28: '28px',
                30: '30px',
                50: '50px',
                100: '100px',
                150: '150px',
                200: '200px',
                250: '250px',
                300: '300px',
            },
            backgroundColor: {
                primary: '#2A2A8F',
                'gray-1': '#F1F2F5',
                'avatar-blue': '#4780F8',
            },
            fontSize: {
                12: ['12px', '12px'],
                14: ['14px', '14px'],
                16: ['16px', '16px'],
                18: ['18px', '18px'],
                20: ['20px', '20px'],
                24: ['24px', '24px'],
                25: ['25px', '25px'],
                48: ['48px', '48px'],
            },
            colors: {
                primary: '#2A2A8F',
                'border-color': '#E1E5EE',
                'avatar-blue': '#4780F8',
                heading: '#515B74',
                'body-text': '#8891A5',
                'input-text': '#061A48',
                'success-btn': '#F5FAFF',
            },
            gridTemplateColumns: {
                5: '100px repeat(3, 1fr) 100px',
            },
            inset: {
                '50%': '50%',
            },
            padding: {
                '8px': '8px',
                '12px': '12px',
                '16px': '16px',
                '18px': '18px',
                '20px': '20px',
                '27px': '27px',
                '40px': '40px',
            },
        },
    },
    plugins: [],
}
