const http = require('http')



http.createServer((request, response) => {

    //Status de la peticion forzado
   // response.writeHead(404); mostramos un Not Found 404

   // Especificamos que es de tipo Json
   //response.writeHead(200, {'Content-Type' : 'application/json'});

   //Objeto
   /* const persona = {
        id: 1,
        nombre : 'Ivan'
    };
    
    //Devolvemos el objeto convirtiendolo a JSON
    response.write(JSON.stringify(persona));
    */


    response.write('Prueba');
    response.end(); //Le avisamos a node que finalice el response
})
.listen(8080); //Escucha en este puerto al abrir al localhost:8080









