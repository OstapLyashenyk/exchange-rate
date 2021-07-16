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
  		var url ='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=PLN&date='+date+'&json';
  				fetch(url)
 				 .then((response) => {
   					 return response.json();
 				 })
  				.then((data) => {
    				console.log(data[0]["rate"]);
 				 });
  	}
  	

  }
