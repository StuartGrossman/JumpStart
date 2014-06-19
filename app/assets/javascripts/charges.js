$( document ).ready(function() {
    $('.dollar').on('input propertychange', function(e){
    	var temp = ($(this).val())
    	$('#money').html(temp).append('.00');
    	var real_money = temp * 100

    	$.ajax({
  				type: "POST",
  				url: "/charges/new",
  				data: { amount: real_money }
				}).done(function( msg ) {
    				alert( "Data Saved: " + msg );
  				});
		// $('#hold_money').data('money', real_money)
		// $('#script_payment').data('amount', real_money)
		// 	console.log ($('#script_payment').data('amount'))		
    })
});