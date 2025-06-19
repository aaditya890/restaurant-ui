module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      animation: {
        'food-enter': 'food-enter-from-right 0.8s ease-out forwards',
        'food-exit': 'food-exit-to-left 0.6s ease-in forwards',
        'food-center': 'food-center-float 4s ease-in-out infinite',
      },
      keyframes: {
        'food-enter-from-right': {
          '0%': { transform: 'translateX(120px) scale(0.7) rotate(10deg)', opacity: '0', filter: 'blur(8px)' },
          '50%': { transform: 'translateX(20px) scale(0.9) rotate(2deg)', opacity: '0.7', filter: 'blur(2px)' },
          '100%': { transform: 'translateX(0) scale(1) rotate(0deg)', opacity: '1', filter: 'blur(0)' },
        },
        'food-exit-to-left': {
          '0%': { transform: 'translateX(0) scale(1) rotate(0deg)', opacity: '1', filter: 'blur(0)' },
          '50%': { transform: 'translateX(-20px) scale(0.9) rotate(-2deg)', opacity: '0.7', filter: 'blur(2px)' },
          '100%': { transform: 'translateX(-120px) scale(0.7) rotate(-10deg)', opacity: '0', filter: 'blur(8px)' },
        },
        'food-center-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(1deg)' },
          '50%': { transform: 'translateY(-15px) rotate(0deg)' },
          '75%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
