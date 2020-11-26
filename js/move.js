$(function(){
	var fixability_url = 'http://fixability.co.kr';
	var scroll_framespeed = 1000/60;
	var nav_num;
	var nav_num_start;
	var contents_head;
	var contents_title;
	var work_years;
	var class_add;
	var frame_year;
	var $language = $('.language');
	// var jsonCover_data=portfolioindex_url+'/data/cover_data.json';
	// var jsonHeader_data=portfolioindex_url+'/data/header_data.json';
	// var jsonFrame_data=portfolioindex_url+'/data/frame_data.json';
	var $name_header=$('.header');
	var name_footer=document.querySelector('.footer');
	var footer_contaner=document.querySelector('footer .body-footer-contaner');
	var split_url = this.location.href.split('/').reverse()[0];

	$(document).ready(function(){
		var down_speed = 700;

		function nav_down(){
			nav_timeout = setTimeout(function(){
				$('.nav').css({'margin-top':'0'});
			},down_speed);
		};
		nav_down();
	});
	 $language.on('click keypress','li, i',function(e){
		var sel_lang = $(this).data('lang');
		var roll_speed;
		if(e.type=='click'){
			roll_speed=30000;
			
			if( $language.height()<160){
				$language.stop().addClass('on');
			}else{
				 $language.stop().removeClass('on');
				if(sel_lang=='val'){
					$(this).html();
				}else{
					$language.find('li:eq(0)').html(sel_lang);
				}
			}
			function roll_up(){
				$language.stop().removeClass('on');
			};
			setTimeout(roll_up,roll_speed);
		}
	});
	$('.nav').on('click keypress','.menu_btn input[type=checkbox]',function(){
		$language.removeClass('on');
		if($('.menu_btn input[type=checkbox]').prop('checked')==false){
			$('.menu_btn').removeClass('mobile');
			$name_header.find('.gnb-modile').animate({'right':'-100%'},function(){
				$('.background-filter').fadeOut('300').removeClass('on');
			});
		}else{
			$('.menu_btn').addClass('mobile');
			$('.background-filter').fadeIn('300').addClass('on');
			$name_header.find('.gnb-modile').animate({'right':'0'});
		}
	});
	$('.background-filter').on('click',function(){
		$name_header.find('.gnb-modile').animate({'right':'-100%'},function(){
			$('.background-filter').fadeOut('300').removeClass('on');
		});
		$('.menu_btn input[type=checkbox]').click();
	});

	$('.gnb-wrap, .gnb-modile').on('click keypress','a',function(){
		var gnb_index=$(this).parent('li').data('index');
		 $language.removeClass('on');
		$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
		$('.gnb-wrap, .gnb-modile').find('.gnb-'+gnb_index).children('a').addClass('on');
	});

	return false;
});
