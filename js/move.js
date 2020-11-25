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
	$('.language').on('click keypress','li',function(e){
		var sel_lang = $(this).data('lang');
		var roll_speed;
		if(e.type=='click'){
			roll_speed=30000;
			if($('.language').height()<160){
				$('.language').addClass('on');
				$('.language').children('before').css({'display':'none'});
				$('.language').children('after').css({'display':'block'});
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
	$('.nav').on('click keypress','.menu_btn input[type=checkbox]',function(){
		$('.language').removeClass('on');
		if($('.menu_btn input[type=checkbox]').prop('checked')==false){
			$('.menu_btn').removeClass('mobile');
			$('.background-filter').find('.gnb-modile').animate({'right':'-100%'},function(){
				$('.nav').find('.background-filter').remove('');
			});
		}else{
			$('.menu_btn').addClass('mobile');
			$('.nav').prepend('<div class="background-filter"><ul class="gnb-modile"><li class="gnb-1" data-index="1"><a href="javascript:;" class="color_black">사업분야</a></li><li class="gnb-2" data-index="2"><a href="javascript:;" class="color_black">기업현황</a></li><li class="gnb-3" data-index="3"><a href="javascript:;" class="color_black">경영이념</a></li><li class="gnb-4" data-index="4"><a href="javascript:;" class="color_black">오시는길</a></li></ul></div>');
			$('.background-filter').addClass('on');
			$('.background-filter').find('.gnb-modile').animate({'right':'0'});
		}
	});
	
	$('.nav').find('.gnb-wrap, .gnb-modile').on('click keypress','a',function(){
		var gnb_index=$(this).parent('li').data('index');
		console.log(gnb_index);
		$('.language').removeClass('on');
		$('.nav').find('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
		$('.nav').find('.gnb-wrap, .gnb-modile').find('.gnb-'+gnb_index).children('a').addClass('on');
	});
	return false;
});
