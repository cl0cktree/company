$(function(){
	var randing_time1 = 500;
	var randing_time2 = 500;
	$(document).ready(function(){
		function phon_act1(){
			randing_on = setTimeout(function(){
				$('.phon-animate').stop().animate({'margin-top':'-1050px','margin-left':'-450px','width':'900px','height':'1920px'},randing_time1);
				$('.phon-animate').css({'transform':'rotate(90deg)','transition':'all 1s;','overflow':'hidden'});
				$('.phon-animate').fadeOut(300);
				if($('.phon-animate').css('height')){
					
				}
				// randing_animation();
			},randing_time2);
		}
		function randing_animation(){

		};
		// $('.phon-animate').stop().animate({'margin-top':'-470px','margin-left':'-320px','width':'300px','height':'640px'},randing_time1);
		if ($('.phon-animate').css('margin-top')<'-470'){
			// phon_act1();
		}
		$('.randing-container').stop().animate({'z-index':'2','opacity':'1'},1000,function(){
			$(this).addClass('back-1');
		});
	});
	return false;
});
