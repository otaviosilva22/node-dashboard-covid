//global variables
myChart1 = null;
myChart2 = null;
myChart3 = null;
myChart4 = null;


//request ajax
function consultaCidade(){
    
    var nomeCidade = $("#nomeCidade").val();

    if (nomeCidade == ""){
        alert("Por favor, digite o nome da cidade!");
    }else{
        $.ajax({
            method: "GET",
            url: "http://localhost:3333/?city="+ nomeCidade +"&nowDate.getTime())", //rota get para leitura de comentários
            dataType: 'json',
            statusCode:{ //tratando respostas
                200:(response)=>{

                    var last_available_confirmed = [];
                    var last_available_date = [];
                    var last_available_deaths = [];
                    var new_confirmed = [];
                    var media_populacao_contaminada = [];
                    var new_deaths = [];

                    response.results.forEach(element => {
                        console.log(element);
                        new_confirmed.push(element.new_confirmed);
                        last_available_confirmed.push(element.last_available_confirmed);
                        last_available_date.push(element.last_available_date);
                        last_available_deaths.push(element.last_available_deaths);
                        media_populacao_contaminada.push(element.estimated_population / element.last_available_confirmed);
                        new_deaths.push(element.new_deaths);
                    });
                    media_populacao_contaminada = media_populacao_contaminada.reverse();
                    new_deaths = new_deaths.reverse();
                    new_confirmed = new_confirmed.reverse();
                    last_available_deaths = last_available_deaths.reverse();
                    last_available_date =  last_available_date.reverse();
                    last_available_confirmed = last_available_confirmed.reverse();
                    chartNewDeaths(new_deaths, last_available_date);
                    chartNewConfirmed(new_confirmed, last_available_date);
                    chartDeaths(last_available_deaths, last_available_date);
                    chartLastAvailableConfirmed(last_available_confirmed, last_available_date);
                }
            },
            error: function(){
                alert ("Falha na requisição")
            }
        });
    }
}

//popula charts
function chartDeaths(last_available_deaths, last_available_date){

    if (myChart1!=null){
        myChart1.destroy();
    }
    var ctx = document.getElementById('deaths').getContext('2d');
    
    myChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last_available_date,
            datasets: [{
                label: 'Total de mortes',
                data: last_available_deaths,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function chartLastAvailableConfirmed(last_available_confirmed,last_available_date){
    
    var ctx = document.getElementById('last_available_confirmed').getContext('2d');
    
    if (myChart2!=null){
        myChart2.destroy();
    }
    myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last_available_date,
            datasets: [{
                label: 'Total de casos',
                data: last_available_confirmed,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function chartNewConfirmed(new_confirmed,last_available_date){
    
    var ctx = document.getElementById('new_confirmed').getContext('2d');
    
    if (myChart3!=null){
        myChart3.destroy();
    }
    myChart3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last_available_date,
            datasets: [{
                label: 'Novos casos',
                data: new_confirmed,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function chartNewDeaths(new_confirmed,last_available_date){
    
    var ctx = document.getElementById('new_deaths').getContext('2d');
    
    if (myChart4!=null){
        myChart4.destroy();
    }
    myChart4 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last_available_date,
            datasets: [{
                label: 'Novas mortes',
                data: new_confirmed,
                backgroundColor: [
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function writeFile(){
    
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("comment");
    var message = text.value;
    $.ajax({
        method: "POST",
        url: "http://localhost:3333/writeTempFile", //rota get para leitura de comentários
        dataType: 'json',
        data: { name, email, message},    
        statusCode:{ //tratando respostas
            201:(response)=>{
                alert ("Mensagem enviada com sucesso!");
                
            },
            400:(response)=>{
                alert ("Erro! Por favor, preencha todos os campos!");
            },
            500:(response)=>{
                alert("Erro! Tente novamente mais tarde");
            }
        }
    });
}