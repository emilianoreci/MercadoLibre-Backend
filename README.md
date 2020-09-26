"scripts": {
    "dev": "cross-env NODE_ENV=dev nodemon index.js",
    "start": "cross-env NODE_ENV=production node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },


/**********
 * HEROKU *
 **********/

Examples:
    snap run heroku
    snap run heroku --version
    snap run heroku login -i
    git push heroku master 

Asociar ssh a heroku:
    snap run heroku keys:add

Crear carpeta en heroku para la app(el name debe ser unico)
    snap run heroku create reci-weather-app-911

Luego hay que configurar las variables entorno:
heroku config:set key=value //key(va el nombre de la var)
    ej: MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
    heroku config:set MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api

    Para borrar una var entorno de heroku:
    heroku config:unset key=value //key(va el nombre de la var)

 heroku logs --tail
 git push heroku master

//original
mongodb+srv://taskapp:targa911@cluster0-gwxkm.mongodb.net/task-manager-api?
//
 mongodb+srv://taskapp:targa911@cluster0-gwxkm.mongodb.net/test?retryWrites=true&w=majority

/**************
 * IMPORTANTE *
 **************/
En el package.json se debe agregar el script para heroku:
    "start": "node src/app.js"

    asi estaba para heroku:
    "start": "node index.js"
Solo debe figurar el script start nada mas!!! 
Lo siguiente debe estar comentado.
    "dev": "nodemon --watch src src/app.js --watch ./templates -e js,hbs --watch ./public/css -e css,hbs,js"

Ver q los fetch tenga la url sin localhost
Poner que escuche el puerto 3000 y la variable entorno para heroku

git push heroku master 
