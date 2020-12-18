




	function order(){
    	if($('#ord').css('display')=='none'){
    	    $('#ord').slideDown();
    		$('#mil').slideUp();
    		$('#cou').slideUp();;
    		$('#boa').slideUp();;
    		$('#add').slideUp();;
    	}
    }
    function mileage(){
    	if($('#mil').css('display')=='none'){
    		$('#ord').slideUp();;
    		$('#mil').slideDown();
    		$('#cou').slideUp();;
    		$('#boa').slideUp();;
    		$('#add').slideUp();;
    	}
    }
    function coupon(){
    	if($('#cou').css('display')=='none'){
    		$('#ord').slideUp();;
    		$('#mil').slideUp();;
    		$('#cou').slideDown();
    		$('#boa').slideUp();;
    		$('#add').slideUp();;
    	}
    }
    function board(){
    	if($('#boa').css('display')=='none'){
    		$('#ord').slideUp();;
    		$('#mil').slideUp();;
    		$('#cou').slideUp();;
    		$('#boa').slideDown();
    		$('#add').slideUp();;
    	}
    }
    function address(){
    	if($('#add').css('display')=='none'){
    		$('#ord').slideUp();;
    		$('#mil').slideUp();;
    		$('#cou').slideUp();;
    		$('#boa').slideUp();;
    		$('#add').slideDown();
    	}
	}
	
