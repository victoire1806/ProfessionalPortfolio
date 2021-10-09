module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: (theme) => ({
          landing: 'url(https://i.postimg.cc/zGRxBfBc/deskPad.jpg)',
        }),
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };