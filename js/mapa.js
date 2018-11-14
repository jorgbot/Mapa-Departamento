jQuery(document).ready(function(){

	$('.head-norte').click(function(e){
        $('.mnorte').fadeIn("slow");
		$('.moccidente').hide();
		$('.moriental').hide();
		$('.mcentro').hide();
		$('.msuroriente').hide();
        $('.msuroccidente').hide();
        $('.zone-norte').fadeIn("slow");
        $('.zone-occidente').hide();
        $('.zone-oriental').hide();
        $('.zone-centro').hide();
        $('.zone-suroriente').hide();
        $('.zone-suroccidente').hide();       
	});

	$('.head-occidente').click(function(e){
        $('.moccidente').fadeIn( "slow" );
		$('.mnorte').hide();
		$('.moriental').hide();
		$('.mcentro').hide();
		$('.msuroriente').hide();
        $('.msuroccidente').hide();
        $('.zone-norte').hide();
        $('.zone-occidente').fadeIn("slow");
        $('.zone-oriental').hide();
        $('.zone-centro').hide();
        $('.zone-suroriente').hide();
        $('.zone-suroccidente').hide(); 
	});


	$('.head-oriental').click(function(e){
        $('.moriental').fadeIn( "slow" );
		$('.mnorte').hide();
		$('.moccidente').hide();
		$('.mcentro').hide();
		$('.msuroriente').hide();
        $('.msuroccidente').hide();
        $('.zone-norte').hide();
        $('.zone-occidente').hide();
        $('.zone-oriental').fadeIn("slow");
        $('.zone-centro').hide();
        $('.zone-suroriente').hide();
        $('.zone-suroccidente').hide(); 
	});


	$('.head-centro').click(function(e){
        $('.moriental').hide();
		$('.mnorte').hide();
		$('.moccidente').hide();
		$('.mcentro').fadeIn( "slow" );
		$('.msuroriente').hide();
        $('.msuroccidente').hide();
        $('.zone-norte').hide();
        $('.zone-occidente').hide();
        $('.zone-oriental').hide();
        $('.zone-centro').fadeIn("slow");
        $('.zone-suroriente').hide();
        $('.zone-suroccidente').hide(); 
	});

	$('.head-suroriente').click(function(e){
        $('.moriental').hide();
		$('.mnorte').hide();
		$('.moccidente').hide();
		$('.mcentro').hide();
		$('.msuroriente').fadeIn( "slow" );
        $('.msuroccidente').hide();
        $('.zone-norte').hide();
        $('.zone-occidente').hide();
        $('.zone-oriental').hide();
        $('.zone-centro').hide();
        $('.zone-suroriente').fadeIn( "slow" );
        $('.zone-suroccidente').hide(); 
	});	

	$('.head-suroccidente').click(function(e){
        $('.moriental').hide();
		$('.mnorte').hide();
		$('.moccidente').hide();
		$('.mcentro').hide();
		$('.msuroriente').hide();
        $('.msuroccidente').fadeIn( "slow" );
        $('.zone-norte').hide();
        $('.zone-occidente').hide();
        $('.zone-oriental').hide();
        $('.zone-centro').hide();
        $('.zone-suroriente').hide();
        $('.zone-suroccidente').fadeIn( "slow" );
	});	


   $('.region-son a').click(function(e){
      e.preventDefault();
      $('.col-mapa .indicator').css("visibility", "hidden");
      var id = $(this).attr('href');
      $(id).css("visibility", "visible");
   });
   
   $('.indicator').click(function(e){
      var id = $(this).attr('id');
      console.log(id);
      $.colorbox({
        href: 'https://www.tudestinonortedesantander.com/maps/?id='+id,
        width: 450,
        height: 550,
        iframe: true
      });
   });





});
