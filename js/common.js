head.ready(function() {

// banner

	function banner(){
		var h = $(window).height();
			$('.banner').css('height', h);
	}
	banner();

	$('.banner').on('click', function(){
		$('html, body').animate({
    	  scrollTop: $('.main').offset().top
    	}, 500);
	});

	$('section[data-type="background"]').each(function(){
        var bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / bgobj.data('speed')); 
            
            var coords = ('50% '+ yPos + 'px');

            bgobj.css({ backgroundPosition: coords });
        }); 
    });

// menu

	$('.js-menu-link').on('click', function(){
		$('.menu-wrap').addClass('is-open');
	});
	$('.js-menu-close').on('click', function(){
		$(this).parent('.menu-wrap').removeClass('is-open');
	});

// list
	
	$('.js-catalog-link').on('click', function(){
		$('.list-wrap').addClass('is-open');
	});
	$('.js-list-close').on('click', function(){
		$(this).parent('.list-wrap').removeClass('is-open');
	});	

// sublist
	
	//$('.sublist').hide();
	$('.list li').hover(
		function(){
			$(this).addClass('is-open');
		},
		function(){
			$(this).removeClass('is-open');
		}
	);

// yandex map
    ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
        center: [55.751077,37.618346],
        zoom: 12,
        controls: []
    }),

        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([55.751077,37.618346], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '',
            balloonContent: 'Балун',
            hintContent: 'Стандартный значок метки'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        });

     myMap.geoObjects
        .add(myPlacemark1)
     });   

// parallax affect

	$('.js-parallax').on('mousemove', function(e) {
              var winW = $(window).width(),
          winH = $(window).height(),
          xCenter = winW/2,
          yCenter = winH/2,
          x = e.pageX,
          y = e.pageY;
          
          xProc = (x - xCenter) /xCenter,
          yProc = (y - yCenter) /yCenter;
          

            if($(this).find('img').size() == 1){
              $(this).css({'left':7-7*xProc,'top': 7-7*yProc})
            }
          
    });
    $('.js-parallax').mouseleave(function(){
    	$(this).css({'left': 0, 'top':0});
    });

// mouseweel
	
	function scrollBanner(){
		flag = 0;

		$(window).scroll(function(){
			if (!flag) {
				
				flag = 1;

				$('html, body').animate({
   				  scrollTop: $('.main').offset().top
   				}, 500);
			}
		}); 
	}
	if ($('.out_index').length) {
		scrollBanner();
	};
	

// onload affect

	function animLoad(){
		var vPos = $(window).scrollTop(),
			h = ($(window).height()/2);
			start = $('.main').offset().top;

		var start = (start - h);	

		if (vPos >= start) {
			$('.anim').addClass('is-loaded');
		};
	}
	animLoad();

// tabs
	function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
            tab_link.on("click", function() {
             	var index = $(this).attr("href");
             	tab_link.removeClass("is-active");
             	tab_link.parent().removeClass("is-active");
             	$(this).addClass("is-active");
             	$(this).parent().addClass("is-active");
             	tab_cont.hide();
             	$(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    	if ($(".js-tab-group").length) {
    		tab();
    	};

// range ui slider

	$( "#slider-range" ).slider({
      	range: true,
      	min: 0,
      	max: 3000,
      	values: [ 220, 1500 ],
      	slide: function( event, ui ) {
      	  $( ".range-slider__min" ).val( ui.values[ 0 ] );
      	  $( ".range-slider__max" ).val( ui.values[ 1 ] );
      }
    });
    $( ".range-slider__min" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( ".range-slider__max" ).val( $( "#slider-range" ).slider( "values", 1 ));


// slick slider
	
	if ($('.slick').length) {
		$('.slick').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	};
	

// resize
	
	$(window).resize(function(){
		banner();
	});	

// scroll
	$(window).scroll(function(){
		if ($('.main').length) {
			animLoad();
		};
	});

});