const routes = (app) =>{
    app.get("/", async (req, res) => {
        res.status(200).json({
            message: "Text Sever"
        })
    }) 
}

module.exports = routes;