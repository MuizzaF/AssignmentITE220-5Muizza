var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>TH</th><th>F</th><th>S</th></tr><tr>",
	displayCalendar: function(){
		var ele = document.getElementById("calendarForHtml");
		var calendarText = "<table class='table table-condensed'>";
		calendarText += this.header;

		for(var i=1; i<=31; i++){
			
			if(i%7==1){
				calendarText += "<tr></tr>";
			}
			calendarText += "<td>"+ i +"</td>";
			//write code to display date
		}
		calendarText += "</table>";
		ele.innerHTML = calendarText;
	}
}	
calendar.displayCalendar();