# Client Website

This is Sylvie Samson's Vue.JS-based website. It takes advantage of
Vuetify's components library and run on Netlify.

You can see the build status down below.

[![Netlify Status](https://api.netlify.com/api/v1/badges/669ffd11-6eb1-417b-819d-90d2e4d7376b/deploy-status)](https://app.netlify.com/sites/sylviesamson/deploys)

## Screenshot

![Website Screenshot](./screenshot.png "Website Screenshot")

## Project setup
Install all the NPM dependencies
```
npm install
```

### Unlock the .env file
Decrypt the environment variables using the given password
```
npm run unlock [PASSWORD]
```

### Lock the .env file
Encrypt the environment variables using the given password
```
npm run lock [PASSWORD]
```

### Compiles and hot-reloads for development
Run in development mode
```
npm run serve
```

### Compiles and minifies for production
Compile for production mode
```
npm run build
```

### Lints and fixes files
Attempt to auto-format all the files
```
npm run lint
```
