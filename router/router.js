const request = require('./request')
const post = require('./post')

const allRoutes = require("express").Router();




module.exports = (app) => {
    allRoutes.use('/request', request);
    allRoutes.use('/post', post);
    app.use("/", allRoutes);
}