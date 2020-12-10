/**
myshopping hide and show
 */

	function order(){
    	if($('#ord').css('display')=='none'){
    	    $('#ord').show();
    		$('#mil').hide();
    		$('#cou').hide();
    		$('#boa').hide();
    		$('#add').hide();
    	}
    }
    function mileage(){
    	if($('#mil').css('display')=='none'){
    		$('#ord').hide();
    		$('#mil').show();
    		$('#cou').hide();
    		$('#boa').hide();
    		$('#add').hide();
    	}
    }
    function coupon(){
    	if($('#cou').css('display')=='none'){
    		$('#ord').hide();
    		$('#mil').hide();
    		$('#cou').show();
    		$('#boa').hide();
    		$('#add').hide();
    	}
    }
    function board(){
    	if($('#boa').css('display')=='none'){
    		$('#ord').hide();
    		$('#mil').hide();
    		$('#cou').hide();
    		$('#boa').show();
    		$('#add').hide();
    	}
    }
    function address(){
    	if($('#add').css('display')=='none'){
    		$('#ord').hide();
    		$('#mil').hide();
    		$('#cou').hide();
    		$('#boa').hide();
    		$('#add').show();
    	}
    }