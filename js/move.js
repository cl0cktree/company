$(function(){
	//-----지역 변수의 전역화 정의-------
	var fixability_url = 'http://fixability.co.kr';
	var resize_framespeed = 1000/600;
	var nav_num;
	var nav_num_start;
	var contents_head;
	var contents_title;
	var work_years;
	var class_add;
	var frame_year;
	var $language = $('.language');
	var $language_mobile = $('.language-mobile');
	// var jsonCover_data=portfolioindex_url+'/data/cover_data.json';
	// var jsonHeader_data=portfolioindex_url+'/data/header_data.json';
	// var jsonFrame_data=portfolioindex_url+'/data/frame_data.json';
	var $name_header=$('.header');
	var $name_section = $('.section');
	var $name_footer = $('.footer');
	var footer_contaner=document.querySelector('footer .body-footer-contaner');
	var split_url = this.location.href.split('/').reverse()[0];
	//-----------------------------------
	//-----시작시 바로 동적 요소 제어------
	$(document).ready(function(){
		var down_speed = 700;

		function nav_down(){
			nav_timeout = setTimeout(function(){
				$('.nav').css({'margin-top':'0'});
			},down_speed);
		};
		nav_down();
	});
	//----------------------------------
	//-----브라우저 가로폭 변동시 필요 요소 동작-----
	$(window).stop().resize(function(){
		var delay_time;
		if(!delay_time){
			delay_time = setTimeout(function() {
				delay_time=null;
				if($('.header').width()>1063){
					$('.language, .language-mobile').stop().removeClass('on');
					$('.menu_btn').stop().removeClass('mobile');
					$('.menu_btn input[type=checkbox]').prop('checked',false);
					$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
						if ($('.background-filter').find('.terms-modal')==false){
							$('.background-filter').stop().fadeOut('300').removeClass('on');
						}
					});
				}else{
					$('.nav').stop().css({'height':'100px','line-height':'100px'},200);
				};
			},resize_framespeed)
		}
	});
	//--------------------------------
	//-----topmenu 및 top_btn scroll--
	var scroll_index = $('.article').each(Array).length;
	$(window).scroll(function(){
		var scroll_delay_time_1;
		var height_over = $(window).height()+$(window).scrollTop();
		var footer_height = $name_footer.height()+20;
		var article1_height = $('.article_1').height()-35;

		if(!scroll_delay_time_1){
			scroll_delay_time_1 = setTimeout(function(){
				scroll_delay_time_1=null;
				if ($(window).scrollTop()>article1_height){
					$('.header').css({'background':'rgba(255,255,255,0.7)'});
					$('.gnb-wrap').stop().css({'height':'70px','line-height':'70px'},200);
					$('.language').stop().css({'top':'15px'},220);
					if ($name_header.width()>1063){
						$('.nav').stop().css({'height':'70px','line-height':'70px'},200);
					}
					$('.top_btn').addClass('on');
					if (height_over>$name_section.height()){
						$('.top_btn').css({'bottom':footer_height});
					}else{
						$('.top_btn').css({'bottom':'50px'});
					}
					$('.article').each(function(){
						var draw_speed = 400;
						if ($(window).scrollTop()>=$(this).offset().top-100){
							var scm = $(this).attr('data-index');
							var $container_this;
							function contents_draw(){
								if ($container_this.parent('.article').find('.top-pop')){
									$container_this.parent('.article').find('.top-pop').stop().animate({'top':'0','opacity':'1'},draw_speed);
								}else if($container_this.parent('.article').find('.bottom-pop')){
									$container_this.parent('.article').find('.bottom-pop').stop().animate({'bottom':'0','opacity':'1'},draw_speed);
								}else if($container_this.parent('.article').find('.left-pop')){
									$container_this.parent('.article').find('.left-pop').stop().animate({'left':'0','opacity':'1'},draw_speed);
								}else if($container_this.parent('.article').find('.right-pop')){
									$container_this.parent('.article').find('.right-pop').stop().animate({'right':'0','opacity':'1'},draw_speed);
								}
							};
							$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
							$('.gnb-wrap, .gnb-modile').find('.gnb-'+scm).children('a').addClass('on');
							if ($(this).find('.contents')){
								$(this).find('.contents').children('h3').stop().animate({'top':'0','opacity':'1'},500,function(){
									$container_this = $(this);
									console.log($container_this);
									$container_this.siblings('.card-wrap').find('.sevice_title').css({'box-shadow':'5px 5px 5px 0px rgba(0,0,0,0.4)'});
								});
							}

						}
					});
				}else{
					$('.header').css({'background':'rgba(255,255,255,1)'});
					$('.gnb-wrap').stop().css({'height':'100px','line-height':'100px'},200);
					$('.language').stop().css({'top':'30px'},220);
					if ($name_header.width()>1063){
						$('.nav').stop().css({'height':'100px','line-height':'100px'},200);
					};
					$('.top_btn').removeClass('on');
				};
			},resize_framespeed);
		}
	});
	//--------------------------------
	//-----top_btn 클릭시 동작-----------
	$('.top_btn').on('click',function(){
		$('body, html').stop().animate({ scrollTop: $('body').offset().top-100},400);
	});
	//----------------------------------
	//-----스크롤시 각 article 동작------
	//----------------------------------
	//-----언어 선택 selectbox---------
	$('.language, .language-mobile').on('click keypress','a, i',function(e){
		var sel_lang = $(this).data('lang');
		var roll_speed;
		if(e.type=='click'){
			roll_speed=30000;
			if($('.language, .language-mobile').height()<160){
				$('.language, .language-mobile').stop().addClass('on');
			}else{
				$('.language, .language-mobile').stop().removeClass('on');
				if(sel_lang=='val'){
					$(this).html();
				}else{
					$('.language, .language-mobile').find('a:eq(0)').html(sel_lang);
				}
			}
			function roll_up(){
				$('.language, .language-mobile').stop().removeClass('on');
			};
			setTimeout(roll_up,roll_speed);
		}
	});
	//-----------------------------------
	//------햄버거 버튼 클릭 시 동작-------
	$('.nav').on('click keypress','.menu_btn input[type=checkbox]',function(){
		$('.language, .language-mobile').removeClass('on');
		if($('.menu_btn input[type=checkbox]').prop('checked')==false){
			$('.menu_btn').removeClass('mobile');
			$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
				$('.background-filter').stop().fadeOut('300').removeClass('on');
			});
		}else{
			$('.menu_btn').addClass('mobile');
			$('.background-filter').stop().fadeIn('300').addClass('on');
			$name_header.find('.mobile-menu').stop().animate({'right':'0'});
		}
	});
	$('.background-filter').on('click',function(){
		$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
			// $('.background-filter').stop().fadeOut('300').removeClass('on');
			if ($('.background-filter').find('.terms-modal')==false){
				$('.background-filter').stop().fadeOut('300').removeClass('on');
			}
		});
		
		if($('.menu_btn input[type=checkbox]').prop('checked')==true){
			$('.menu_btn input[type=checkbox]').click();
		}
		
	});
	//-----------------------------------
	//------풀브라우징 및 모바일 GNB 제어--
	$('.gnb-wrap, .gnb-modile').on('click keypress','a',function(){
		var gnb_index = $(this).parent('li').data('index');
		var art_index = gnb_index+1;
		var topminus;
		if($('.header').width()>1063){
			topminus = 70;
		}else{
			topminus = 100;
		};
		$language.removeClass('on');
		$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
		$('.gnb-wrap, .gnb-modile').find('.gnb-'+gnb_index).children('a').addClass('on');
		$('body, html').stop().animate({ scrollTop: $('.article_'+art_index).offset().top-topminus },300);
	});
	//----------------------------------
	//-----footer 클릭시 각 동작 모음----
	$name_footer.find('.terms').on('click','a',function(){
		var datasum;
		$('.background-filter').stop().fadeIn('300').addClass('on');
		if ($(this).is('.terms-service')){
			datasum = './data/terms.html .data-service';
		}else if($(this).is('.information-policy')){
			datasum = './data/terms.html .data-policy';
		}else if($(this).is('.standard-terms')){
			datasum = './data/terms.html .data-terms';
		}else if($(this).is('.Rejection-email')){
			datasum = './data/terms.html .data-Rejection';
		}
		$('.background-filter').css({'z-index':'200'});
		$('.background-filter').load(datasum);
	});
	$('.background-filter').on('click','.close-btn',function(){
		$('.background-filter').stop().fadeOut('300').removeClass('on');
		$('.background-filter').css({'z-index':'-1'});
		$('.background-filter').html('');
	});
	$name_footer.on('click','.phon-num',function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='tel:02-6952-8892','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='tel:02-6952-8892','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	});
	//----------------------------------

	return false;
});
