module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.+(js|jsx)", "./pages/**/*.+(js|jsx)"],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
};
