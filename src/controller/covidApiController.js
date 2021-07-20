var axios = require('axios');



class CovidApiController{

    async casos_full(req, res){


        if (req.query.city == "" || req.query.city == null){
            return res.status(404).json({
                "error": "Ausência campo city"
            })
        }

        var nomeCidade = req.query.city;

        
        var config = {
            method: 'get',
            url: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/?city='+nomeCidade+'&is_repeated=False',
            headers: { 
              'Authorization': 'Token 8e37d50fedd60c7af5be3ca866445d89c949620b', 
              'Content-Type': 'application/json'
            }
        };
          
        try {
            var responseApi = await axios(config);
            var results = responseApi.data.results.slice(0, 6);
            return res.status(200).json({
                "count": results.length,
                results});
        }catch(e){
            return res.status(400).json({
                "error": "Cidade inválida"
            })
        }   
               
    }

}

module.exports = CovidApiController;