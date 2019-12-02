#Viseo project.

Web responsive with Criptocurrencies prices.

## Requirements ⚙️

The following dependencies are needed to deploy:

- Node + npm/yarn
- React
- node-sass
- react-router-dom
- Ant Design
- cryptocurrency-icons
- react-palette
- react-intersection-observer
- typescript-eslint
- eslint-plugin-react-hooks

## How to try this project? 🚀

1. Install all dependencies with this command:

### ```npm install```

or

### `yarn install`

2. Start the development server:

### `npm start`
or 
### `yarn run start`

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## How to publish ✌🏼

### `yarn build`
or
### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Improvements

In order to ensure the quality of the code, eslint has been used to check the styles. To perform the validation, you must execute:

### `npm run lint`

During development, in case of finding formatting errors, we can try to fix them simply by running:

### `npm run fixLint`

In addition, the project uses Travis as a continuous integration server so that we ensure that the code meets the quality standards after each change in an impartial computer.

To execute the tasks, let's just run:

### `npm run ci`