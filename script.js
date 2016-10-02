$(document).ready(function () {
	var name = "";
	var Diner = function(name,dishes) {
		this.name = name,
		this.dishes = dishes
	};
	var diners = ""
	var HTML = 'There are '
	var dishes = ""
	var foodBill = ""

	$('#dinersInput').submit(function(event) {
		event.preventDefault();
		diners ++;
		$('.dinersOutput').html('<br>'+
			HTML + diners +' diners. '
			);
	});

	$('#dishesInput').submit(function(event) {
	event.preventDefault();
	dishes ++;
	foodBill = dishes*20;
	$('.dishesOutput').html('<br>'+
		HTML + dishes +' dishes ordered. '
		);
	});

	$('#billInput').submit(function(event) {
		event.preventDefault();
		
		$('.billOutput').html('<br>'+
			'The bill is $' + foodBill*1.1*1.2 +' dollars. <br>'+
			'Tip: $'+foodBill*1.1*.2+'   Tax: $'+foodBill*1.1 +'<br><br>'+
			'Each person owes : $'+(foodBill*1.1*1.2)/diners+ ' dollars.'
			);
	});	
});