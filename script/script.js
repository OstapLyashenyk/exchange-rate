$( ".datepicker" ).datepicker();



  function apiRequest() {
  	
    var arrayRates = [];
    var arrayRatesCounter = 0;
    var arrayDates = [];
    var arrayDatesCounter = 0;

    var currency = document.getElementById('currency').value;
  	var start = document.getElementById('datepickerStart').value;
  	start = start.split("/");
  	var finish = document.getElementById('datepickerFinish').value;
  	finish = finish.split("/");

  		
  	if(start[1]<=finish[1]){
  		for (var i = start[1];i<=finish[1];i++) {
  				var date =(start[2]+''+start[0]+''+i);
  				
  				var url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode='+currency+'&date='+date+'&json';
  				fetch(url)
 				 .then((response) => {
   					 return response.json();
 				 })
  				.then((data) => {
            var exchangedate = data[0]["exchangedate"];
            arrayDates[arrayDatesCounter] = exchangedate;
            arrayDatesCounter++;
            var dataRate = data[0]["rate"];
            arrayRates[arrayRatesCounter] = dataRate;
            arrayRatesCounter++;
            var dataTxt = data[0]["txt"];
  					// document.write("<br>"+exchangedate+" "+dataRate+" "+dataTxt+" ");
    				console.log(data[0]["rate"]);
            Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories:arrayDates
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: dataTxt,
        data: arrayRates
      }]
    });
 				 });
  		}
      

      console.log(arrayRates);
      console.log(arrayDates);

  	}
  	


  }
