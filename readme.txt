
Build project from https://www.youtube.com/watch?v=RDV3Z1KCBvo&ab_channel=CleverProgrammer
Demo app available at https://frugalhermit-d2b74.web.app/
Project uses 
    Google Cloud for hosting  authentication (firebase) storage (firestore), 
    and MERN stack for local development (MongoDB ExpressJS ReactJS and NodeJS)
    Used VS Code for IDE and Chrome tools for debugging

To build this project, you can add required keys and then build locally and then deploy
Just included the src folder and copy of function-index.js for brevity. You can get rest of the packages from npm.

Required keys:
--------------
You will need to create accounts on Firebase and Stripe.
1\ app.js => add stripe promise (frontend)
2\ axios.js => add baseurl of the project from Firebase function (frontend)
3\ Firebaselocal.js => add firebase key (frontend)
4\ functions/index.js => add stripesecret again (backend) (renamed as functions-index.js, move this to functions folder after installing firebase-tools)

How to build and deploy:
------------------------
npm create-react-app
npm start #to test node locally
npm install react-router-dom #install all required dependencies like so
npm run build
firebase emulators: start #to test express auth locally
firebase init
firebase deploy --only functions # run from functions folder
firebase deploy --only hosting #run from top folder

Components setup of React
--------------------------
index
app
    header
        img logo
        div search
            nav
                option
                    line1,2
                option
                    line1,2
                option
                    line1,2
                optionoptionBasket
                    line2
    home
        div container
                image
            row
                Product container 
                    div info
                        price
                            rating
                    buy

            row
            row

npm version
-----------
$npm version
{
  'amazon-clone': '0.1.0',
  npm: '8.19.3',
  node: '16.19.1',
  v8: '9.4.146.26-node.24',
  uv: '1.43.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '93',
  nghttp2: '1.47.0',
  napi: '8',
  llhttp: '6.0.10',
  openssl: '1.1.1t+quic',
  cldr: '41.0',
  icu: '71.1',
  tz: '2022f',
  unicode: '14.0',
  ngtcp2: '0.8.1',
  nghttp3: '0.7.0'
}
$

list of dependencies from package.json (full dependencies in package-lock.json)
------------------------------------------------------------------------------------------------------------------
{
  "name": "amazon-clone",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/icons-material": "^5.11.11",
    "@mui/material": "^5.11.12",
    "@stripe/react-stripe-js": "^2.1.0",
    "@stripe/stripe-js": "^1.52.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.3.4",
    "firebase": "^9.18.0",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-currency-format": "^1.1.0",
    "react-dom": "^18.2.0",
    "react-dropdown": "^1.11.0",
    "react-flip-move": "^3.0.5",
    "react-router-dom": "^6.9.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
