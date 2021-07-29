$( ".datepicker" ).datepicker();




/**/
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
    var startMonth = start[0];
    var finishMonth = finish[0];
    var startDay = start[1];
    var finishDay= finish[1];
  	if(startMonth != finishMonth){

    for(var i = startDay;i<=31;i++){

            var date =(start[2]+''+startMonth+''+i);
          
          var url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode='+currency+'&date='+date+'&json';
          fetch(url)
         .then((response) => {
             return response.json();
         })
          .then((data) => {
            if(!data[0].message){
console.log(data[0].message);

            var dataRate = data[0]["rate"];
            /*if(dataRate == "undefine" || !dataRate){
              break;
            }*/
            arrayRates[arrayRatesCounter] = dataRate;
            arrayRatesCounter++;

            var exchangedate = data[0]["exchangedate"];
            arrayDates[arrayDatesCounter] = exchangedate;
            arrayDatesCounter++;
            var dataTxt = data[0]["txt"];
            // document.write("<br>"+exchangedate+" "+dataRate+" "+dataTxt+" ");
            
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
         }});
    }
    for(var i = 1;i<=finishDay;i++){
      let helper ="0"+i;
        if(i<10){var date =(start[2]+''+finishMonth+''+helper);}
        else{var date =(start[2]+''+finishMonth+''+i);}
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
    }	
  	else if(startDay<=finishDay){
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
      

      
  	}
  	


  }
//////////////////////////////

var date =20210631;
          
          var url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode='+currency+'&date='+date+'&json';
          fetch(url)
         .then((response) => {
             return response.json();
         })
          .then((data) => {
            
            if(!data[0].message)
           console.log(data[0].message);
            // document.write("<br>"+exchangedate+" "+dataRate+" "+dataTxt+" ");
            
           
    
         });
    