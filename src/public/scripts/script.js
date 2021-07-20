//global variables
myChart1 = null;
myChart2 = null;
myChart3 = null;
myChart4 = null;


//request ajax
function consultaCidade(){
    
    var nomeCidade = $("#nomeCidade").val();

    if (nomeCidade == ""){
        alert("Nome de cidade incorreta");
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

                    response.results.forEach(element => {
                        console.log(element);
                        new_confirmed.push(element.new_confirmed);
                        last_available_confirmed.push(element.last_available_confirmed);
                        last_available_date.push(element.last_available_date);
                        last_available_deaths.push(element.last_available_deaths);
                        media_populacao_contaminada.push(element.estimated_population / element.last_available_confirmed);
                        
                    });
                    media_populacao_contaminada = media_populacao_contaminada.reverse();
                    new_confirmed = new_confirmed.reverse();
                    last_available_deaths = last_available_deaths.reverse();
                    last_available_date =  last_available_date.reverse();
                    last_available_confirmed = last_available_confirmed.reverse();
                    chartMediaPopulacao(media_populacao_contaminada, last_available_date);
                    chartNewConfirmed(new_confirmed, last_available_date);
                    chartDeaths(last_available_deaths, last_available_date);
                    chartLastAvailableConfirmed(last_available_confirmed, last_available_date);
                },
                400:(response)=>{
                    alert("Cidade inválida");
                }
            },
            error: function(){
                alert ("Falha no servidor")
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

function chartMediaPopulacao(new_confirmed,last_available_date){
    
    var ctx = document.getElementById('media_populacao_contaminada').getContext('2d');
    
    if (myChart4!=null){
        myChart4.destroy();
    }
    myChart4 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last_available_date,
            datasets: [{
                label: 'População / População Contaminada',
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
