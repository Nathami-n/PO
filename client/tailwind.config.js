/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#6f6c90",
        customBlue: "#4a3aff",
        darkBlue: "#170f49",
        side: "#121221",
        sidet:"#bcbcc0",
        bg:"#f2f2f8"
      },
      backgroundImage: {
        "user": "url(/email.svg)",
        "pass": "url(/lock.svg)",
        "mail": "url(/mail.svg)"
      }
    },
  },
  plugins: [],
});
