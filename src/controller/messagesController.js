var fs = require('fs'); 
const stringify = require('csv-stringify');
var parse = require('csv-parse');


class MessagesController{
    async writeFile(req, res){
        var someData = req.body.email + "," + req.body.name + "," + req.body.message + "," + new Date();

        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;

        console.log(name);
        if (!message || !name || !email){
            return res.status(400).json({
                "succes": false,
                "error": "Bad request"
            })
        }

        fs.appendFile('../src/temp/messages.csv', "\r\n"+someData, (err) => {
            if (err) throw err;
        });

        return res.status(201).json({
            "success": true,
            email,
            name,
            message
        });
    }
}

module.exports = MessagesController;