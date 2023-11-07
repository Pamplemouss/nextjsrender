# Technical Test - NextJS repository
This is the second section of a technical test in 3 parts.
The aim of this section is to:
- render the result of the API endpoint (first section)
- add a button that renders a new fact when clicked
- make the styling as nice as possible

What I used: `tailwindcss`, `font-awesome` and `framer-motion`.

## Run the app
#### Setup
To run it locally: Download the project, and `npm install` at the root.
#### Configure
Add `NEXT_PUBLIC_FACT_API_URL=<YOUR API ENDPOINT URL>` to `.env.local`
#### Run
`npm run dev` will open the server on port `3000` on development mode.
#### Access
You can access the render here: `localhost:3000/demo-render-content`

## Repository structure
The main files are:
- `src/app/demo-render-content/page.js` that renders the API content
- `src/components/LoadingButton.js` that is the button component