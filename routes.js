module.exports = function (app, db) {
    console.log("Request to the server...");
    app.post('/', (req, res) => {
        const entity = { id: req.body.id, title: req.body.title };
        console.log(entity);
        db.insert(512, [Number(entity.id), entity.title]).then((resp) => { 
            console.log(resp);
            res.send(resp); 
        });
    });

    app.get('/', (req, res) => {
        const id = Number(req.body.id);
        console.log(id);
        db.select(512, 0, 15, 0, 'eq', [id]).then((resp) => { 
            console.log(resp);
            res.send(resp); 
        });
    });

    app.put('/', (req, res) => {
        const entity = { id: req.body.id, title: req.body.title };
        console.log(entity);
        db.update(512, 0, [Number(entity.id)], [['=', 1, entity.title]]).then((resp) => { 
            console.log(resp);
            res.send(resp); 
        });
    });

    app.delete('/', (req, res) => {
        const id = Number(req.body.id);
        db.delete(512, 0,[id]).then((resp) => { 
            console.log(resp);
            res.send(resp); 
        });
    });
};