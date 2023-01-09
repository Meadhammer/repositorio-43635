# Proyecto Final Comision 43635

Este proyecto fue creado por: [Julio Federico Tripel](https://github.com/Meadhammer).
***
Curso Coderhouse, ReactJs.
Comisión: 43635
***

## Acerca del Proyecto

Este es un carrito de compras para el sitio de Tripel Pipes, pipas artesanales hechas en maderas alternativas.

### `NavBar`

Menú de navegación con 3 categorías (---Catálogo completo, Pipas de bolsillo y Pipas de lectura---). Branding con retorno al root y acceso al carrito de compras.

### `ItemList`

El catálogo cuenta con una distinción en 2 categorías. Además, la vista inicial simplificada puede expandirse con un botón en la tarjeta, éste da acceso a una versión más detallada que a su vez habilita la posibilidad de agregar el producto al carrito indicando la cantidad deseada. También de ha agregado una lógica para desactivar la posibilidad de comprar cuando el stock de el producto seleccionado es **"0"**

### `Cart`

Los productos pueden ser agragados individualmente al carrito, desde donde se computa el total de artículos y el precio total de la compra. La lógica hace dinámica de aparición de la botonera, de esta manera inutilizando la sección en la ausencia de productos en el carrito.

### `Form`

El Formulario es revelado una vez se confirme el carrito con el botón ***"Comprar"***. El mismo cuenta con un simple método de verificaión de datos para envitar la carga de una orden de compra incompleta.

***

# ReactJs

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
