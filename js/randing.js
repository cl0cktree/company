$(function(){
	var randing_time1 = 5000;
	var randing_time2 = 1500;
	var fadein_time = 800;
	var fadeout_time = 1500;
	var back_num;
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
				$('.randing-animation').stop().fadeIn('300').addClass('back-1');
				randing_on = setInterval(function(){
					$('.randing-animation').stop().fadeOut(fadeout_time).removeClass('back-'+back_num);
					console.log(back_num);
					if ($('.randing-animation').data('background')>back_num){
						back_num++;
						$('.randing-animation').stop().fadeIn(fadein_time).addClass('back-'+back_num);
						// console.log(back_num);
					}else{
						back_num = 1;
						// $('.randing-animation').stop().fadeOut('300').removeClass('back-'+back_num);
						$('.randing-animation').stop().fadeIn(fadein_time).addClass('back-'+back_num);
					}
					// $('.slide').stop(false,false).animate({'opacity':'0','z-index':'0'},movespeed);
					// if(sort_index<mswidth){
					// 	sort_index++;
					// 	$('#slide'+sort_index).stop(false,true).animate({'opacity':'1','z-index':'1'},movespeed);
					// }else{
					// 	$('.slide').removeClass('on');
					// 	sort_index=1;
					// 	$('#slide'+sort_index).stop(false,true).animate({'opacity':'1','z-index':'1'},movespeed);
					// }
				},randing_time1);
			};
			randing_animation();
		});
	});
	return false;
});
