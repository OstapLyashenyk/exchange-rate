$( ".datepicker" ).datepicker();



  function apiRequest() {
  	

var currency = document.getElementById('currency').value;
  	var start = document.getElementById('datepickerStart').value;
  	start = start.split("/");
  	var finish = document.getElementById('datepickerFinish').value;
  	finish = finish.split("/");

  		
  	if(start[1]<finish[1]){
  		for (var i = start[1];i<=finish[1];i++) {
  				var date =(start[2]+''+start[0]+''+i);
  				
  				var url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode='+currency+'&date='+date+'&json';
  				fetch(url)
 				 .then((response) => {
   					 return response.json();
 				 })
  				.then((data) => {
  						
  					 document.write("<br>"+data[0]["exchangedate"]+" "+data[0]["rate"]+" "+data[0]["txt"]+" ");
    				console.log(data[0]["rate"]);
 				 });
  		}
  	}else{
  		var date =(start[2]+''+start[0]+''+start[1]);
  		var url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode='+currency+'&date='+date+'&json';
  				fetch(url)
 				 .then((response) => {
   					 return response.json();
 				 })
  				.then((data) => {
             document.write("<br>"+data[0]["exchangedate"]+" "+data[0]["rate"]+" "+data[0]["txt"]+" ");
    				console.log(data[0]["rate"]);
 				 });
  	}
  	

  }
Highcharts.chart('container', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Monthly Average Temperature'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
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
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    name: 'London',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
});
