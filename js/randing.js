$(function(){
	var randing_time1 = 5000;
	var randing_time2 = 1500;
	var fadein_time = 1000;
	var fadeout_time = 1000;
	var back_num;
	var $randing_animate = $('.randing-animation');
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
		// $('.phon-animate').stop().animate({'margin-top':'-470px','margin-left':'-320px','width':'300px','height':'640px'},randing_time1);
		if ($('.phon-animate').css('margin-top')<'-470'){
			// phon_act1();
		}
		$('.randing-container').stop().animate({'z-index':'2','opacity':'1'},1000,function(){
			function randing_animation(){
				back_num = 0;
				var randing_num = $randing_animate.find('.randing').length;

				$randing_animate.find('.randing_1').stop().animate({'opacity':'1','z-index':'1'},'300');
				randing_on = setInterval(function(){
					$randing_animate.find('.randing_'+back_num).stop(false,false).animate({'opacity':'0','z-index':'-1'},fadeout_time);
					if (randing_num>back_num){
						back_num++;
						$randing_animate.find('.randing_'+back_num).stop(false,false).animate({'opacity':'1','z-index':'2'},fadein_time);
					}else{
						back_num = 1;
						// $randing_animate.stop().fadeOut('300').removeClass('back-'+back_num);
						$randing_animate.find('.randing_'+back_num).stop(false,false).animate({'opacity':'1','z-index':'2'},fadein_time);
					}
				},randing_time1);
			};
			randing_animation();
		});
	});
	return false;
});
