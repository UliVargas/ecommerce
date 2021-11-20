const app = require("./app");

async function main() {
    await app.listen(3001)
    console.log("listening por 3001")
}

main();