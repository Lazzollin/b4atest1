const app = require("./src/app");
const db = require("./src/models");

db.sequelize.authenticate()
    .then(() => {
        app.listen(3000, () => console.log('Listening at hola', 3000))
    })
    .catch((err) => {
        console.log(err)
        console.log('No se pudo conectar')
    })
