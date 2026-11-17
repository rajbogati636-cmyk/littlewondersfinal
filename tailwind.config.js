/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {50:'#fffdfb',100:'#f0f7fd',200:'#e8f2fa'},
        sky: {50:'#f0f7fd',100:'#C8DEF3',300:'#779FC4',500:'#6A869F'},
        blue: {50:'#f0f7fd',100:'#e8f2fa',200:'#C8DEF3',300:'#779FC4',400:'#6A869F'},
        sage: {50:'#F1F3E9',100:'#E9EDDF',300:'#98A487',500:'#96A86B'},
        tan: {100:'#F2E8DE',300:'#C8A486'},
        
        
        ink: {500:'#526575',700:'#43515a'},
      },
      fontFamily: {
        serif: ['"Dancing Script"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Questrial"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #fffdfb 0%, #C8DEF3 100%)',
        'gradient-sage': 'linear-gradient(135deg, #F1F3E9 0%, #98A487 100%)',
      },
    },
  },
  plugins: [],
};
