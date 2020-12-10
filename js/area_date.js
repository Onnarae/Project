/**
 숨기고 보이게하기
 */
	function area(){
    	if($('#h1').css('display')=='none'){
    		$('#h1').show();
    		$('#a1').hide();
    		$('#a2').hide();
    		$('#a3').hide();
    		$('#a4').hide();
    		$('#a5').hide();
    		$('#d1').hide();
    	}
    }
    function area1(){
    	if($('#a1').css('display')=='none'){
    		$('#a1').show();
    		$('#a2').hide();
    		$('#a3').hide();
    		$('#a4').hide();
    		$('#a5').hide();
    	}
    }
    function area2(){
    	if($('#a2').css('display')=='none'){
    		$('#a1').hide();
    		$('#a2').show();
    		$('#a3').hide();
    		$('#a4').hide();
    		$('#a5').hide();
    	}
    }
    function area3(){
    	if($('#a3').css('display')=='none'){
    		$('#a1').hide();
    		$('#a2').hide();
    		$('#a3').show();
    		$('#a4').hide();
    		$('#a5').hide();
    	}
    }
    function area4(){
    	if($('#a4').css('display')=='none'){
    		$('#a1').hide();
    		$('#a2').hide();
    		$('#a3').hide();
    		$('#a4').show();
    		$('#a5').hide();
    	}
    }
    function area5(){
    	if($('#a5').css('display')=='none'){
    		$('#a1').hide();
    		$('#a2').hide();
    		$('#a3').hide();
    		$('#a4').hide();
    		$('#a5').show();
    	}
    }
    function date(){
    	if($('#d1').css('display')=='none'){
    		$('#d1').show();
    		$('#h1').hide();
    		$('#a1').hide();
    		$('#a2').hide();
    		$('#a3').hide();
    		$('#a4').hide();
    		$('#a5').hide();
    	}
    }