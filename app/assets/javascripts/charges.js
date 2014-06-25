$( document ).ready(function() {
    $('.dollar').on('input propertychange', function(){
    	var temp = ($(this).val())
    	$('#money').html(temp).append('.00');
    	var real_money = temp * 100

    // 	$.ajax({
  		// 		type: "POST",
  		// 		url: "/charges",
  		// 		data: { amount: real_money }
				// }).done(function( msg ) {
    // 				alert( "Data Saved: " + msg );
  		// 		});
		// $('#hold_money').data('money', real_money)
      //$('#script_payment').html('amount', '');
      $("#test_div").append( '<center><script id="script_payment" ' +
         'src="https://checkout.stripe.com/checkout.js" ' +
         'class="stripe-button" data-key="458UUQemoncaOL21F82T0aMQ" ' +
         'data-description="A month\'s subscription" ' + 
          'data-amount="' + real_money + '"></script></center>');
		  //$('#script_payment').attr('data-amount', real_money);
			//console.log ($('#script_payment').data('amount'))		
    });
});