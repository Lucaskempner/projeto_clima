function getClima(){
    $.ajax({
        method: 'get', crossDomain: true, url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=5a9a1b306ac7e38c785f3018082af4ca',
        dataType: 'json', success: function(data){
            
            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);
            
            temperatura = data.main.temp - 273;
            var tempFormatada = temperatura.toFixed(0).split('.');
            $('#temperatura').html(tempFormatada + "°C");
            
            umidade = data.main.humidity;
            $('#umidade').html(umidade + "%");
            
            velocidadeVento = data.wind.speed;
            $('#velocidadeVento').html(velocidadeVento + "");
            
            tempMin = data.main.temp_min - 273;
            var temp2Formatada = temperatura.toFixed(0).split('.');
            $('#tempMin').html(temp2Formatada + "°C");
            
            tempMax = data.main.temp_max - 273;
            var temp3Formatada = temperatura.toFixed(0).split('.');
            $('#tempMax').html(temp3Formatada + "°c");
            
            pressaoVento = data.wind.deg;
            $('#pressaoVento').html(pressaoVento);
        }, 
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}

function traduzirDescricao(descricao){
    descricaoTraduzida = "";
    if(descricao == "clear sky"){
        descricaoTraduzida = "Céu Limpo";
    }else if(descricao == "few clouds"){
        descricaoTraduzida = "Poucas Nuvens";
    }else if(descricao == "scattered clouds"){
        descricaoTraduzida = "Nuvens Dispersas";
    }else if(descricao == "broken clouds"){
        descricaoTraduzida = "Nuvens Quebradas";
    }else if(descricao == "shower rain"){
        descricaoTraduzida = "Pouca Chuva";
    }else if(descricao == "rain"){
        descricaoTraduzida = "Chuva";
    }else if(descricao == "thunderstorm"){
        descricaoTraduzida = "Trovoada";
    }else if(descricao == "snow"){
        descricaoTraduzida = "Neve";
    }else if(descricao == "mist"){
        descricaoTraduzida = "Névoa";
    }
    return descricaoTraduzida;
}

window.onload = function(){
    getClima();
};