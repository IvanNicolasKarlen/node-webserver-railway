//USO DE EXPRESS

const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT;

//Handlebars - HBS
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials');


//Middleware - Servir contenido estatico
app.use( express.static('public') ); //Toma la carpeta publica que creamos



app.get('/', (req, res) => {

    //Renderiza la vista Home de la carpeta views
    //.render('Nombre de la vista', {Recursos a enviar})
    res.render('home', {
        nombre: 'Ivan Karlen',
        titulo: 'Node'
    }); 
})

app.get('/generic', (req, res) => {

    //Es como retornar una vista, envia un archivo
    //res.sendFile( __dirname + '/public/generic.html'); // _ _dirname se refiere a una ruta absoluta, sino daba error.

    res.render('generic', {
        nombre: 'Ivan Karlen',
        titulo: 'Node'
    });
})

app.get('/elements', (req, res) => {

    //res.sendFile( __dirname + '/public/elements.html'); // _ _dirname se refiere a una ruta absoluta, sino daba error.

    res.render('elements', {
        nombre: 'Ivan Karlen',
        titulo: 'Node'
    });

})


app.get('/hola-mundo', (req, res) => {

    res.send('Ruta hola-mundo');
})

//Esta peticion a * es un comodin, si no existe ruta viene acá
app.get('*', (req, res)  => {

    //res.writeHead(404);
    res.sendFile( __dirname + '/public/404.html'); // _ _dirname se refiere a una ruta absoluta, sino daba error.
})

app.listen(port)