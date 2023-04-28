const server = require('./app')
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});






























// const http = require("http");
// const getCharById = require("./controllers/getCharById");
        // const data = require('./utils/data');

// http
// .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

            // if(req.url.includes('/rickandmorty/character')) {
            //     const id = req.url.split('/').at(-1)

            //     const characterFound = data.find((character) => character.id === +id)

            //     return res
            //     .writeHead(200, {"Content-type": "application/json"})
            //     .end(JSON.stringify(characterFound))
            // }

//     if (req.url.includes("/rickandmorty/character")) {
//         let id = req.url.split("/").pop();
//         getCharById(res, id)
//     }
// })
// .listen(3001, 'localhost')