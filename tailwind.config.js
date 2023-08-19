/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_layouts/**/*.{html,js}", "./_includes/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}




// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }