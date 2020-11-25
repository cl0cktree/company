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
	// var jsonCover_data=portfolioindex_url+'/data/cover_data.json';
	// var jsonHeader_data=portfolioindex_url+'/data/header_data.json';
	// var jsonFrame_data=portfolioindex_url+'/data/frame_data.json';
	var name_header=document.querySelector('.header');
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
	$('.gnb-wrap').find('a').on('click',function(){
		$('.gnb-wrap').find('a').removeClass('on');
		$(this).addClass('on');
		console.log(this);
	});
	$('.language').on('click','li',function(e){
		var sel_lang = $(this).data('lang');
		var roll_speed;
		if(e.type=='click'){
			roll_speed=30000;
			if($('.language').height()<160){
				$('.language').addClass('on');
			}else{
				$('.language').removeClass('on');
				if(sel_lang=='val'){
					$(this).html();
				}else{
					$('.language').find('li:eq(0)').html(sel_lang);
				}
			}
			function roll_up(){
				$('.language').removeClass('on');
			};
			setTimeout(roll_up,roll_speed);
		}
	});
	$('.nav').on('click','.menu_btn',function(){
		if($('.nav').find('.mobile')){
			$('.menu_btn').removeClass('mobile');
		}else{
			$('.menu_btn').addClass('mobile');
		}
	});
	return false;
});
