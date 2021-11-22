const express = require("express");
const router = express.Router();
const db = require("../db.js");


router.get("/logos", async(req, res) => {
    const peticion = await db.collection("logos").get();
    const {docs} = peticion;
    const logos = docs.map(logos => logos.data())
    res.status(200).json(logos);
})

module.exports = router;