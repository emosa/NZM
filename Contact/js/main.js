/*
 * EBERT - Signature Edition | Premium Web Template from Designova
 * Author: Designova, http://www.designova.net
 * Copyright (C) 2015 Designova
 * This is a premium product. For licensing queries please contact info@designova.net
 */
/*global $:false */
/*global window: false */
(function() {
    "use strict";
    $(function($) {

        //Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();
        //Adjusting Intro Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);

        $('.ms-static-title').css('height', vH);
        //Mobile Only Navigation (multi level)
                $('ul.slimmenu').slimmenu({
                    resizeWidth: '1200',
                    collapserTitle: '',
                    easingEffect: 'easeInOutQuint',
                    animSpeed: 'medium',
                });

                $('.slimmenu li a:not(.sub-collapser)').on('click',function(){
                            $('ul.slimmenu').removeClass('expanded').slideUp();
                });


        //PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility',
                'visible');
        });

//Sub Menu Trigger
        $('.main-menu li a.sub-menu-trigger').on('mouseenter', function(){
            $(this).next('.sub-menu').stop().slideDown(1000);
        });
        $('.main-menu li').on('mouseleave', function(){
            $('.sub-menu').stop().slideUp(1000);
        });


//Main Menu Trigger
        (function( $ ){
           $.fn.menuPanelTrigger = function() {
                if($(".mastnav-inner-left").hasClass("slide-to-left"))
                {
                    $('.mastnav-inner-left').removeClass("slide-to-left");
                    $('.mastnav-inner-right').removeClass("slide-to-right");
                    $('.mastnav').fadeOut();
                }
                else{
                    $('.mastnav').fadeIn();
                    $('.mastnav-inner-left').addClass("slide-to-left");
                    $('.mastnav-inner-right').addClass("slide-to-right");
                }
           }; 
        })( jQuery );
        $('a.menu-trigger, .menu-close-notification a').on('click', function(event){
            event.preventDefault();
            $().menuPanelTrigger();
        });
        $('.mastwrap').on('click', function(){
            $('.mastnav').removeClass("slide-to-left");
        });


        $('.first-fold').next().waypoint(function (direction) {
              if (direction === 'down') {
                $('.masthead').addClass('header-highlighted');
              } 
              else {
                $('.masthead').removeClass('header-highlighted');
              }
        }, { offset: '35%' });


        //PARALLAX
        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $('.parallax, .parallax-layer').each(function() {
                $(this).parallax("1%", 0.1);
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).bind('load', function() {
                parallaxInit();
            });


        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }


        
//ISOTOPE
        
        //ISOTOPE GLOBALS
        var $container = $('.works-container');


        //ISOTOPE INIT
        $(window).load(function() {

           //checking if all images are loaded
            $container.imagesLoaded( function() {

                //init isotope once all images are loaded
                $container.isotope({
                    // options
                    itemSelector: '.works-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.8s'
                });


                //forcing a perfect masonry layout after initial load
                setTimeout(function() {
                $container.isotope('layout');
                }, 100);


                // triggering filtering
                $('.works-filter li a').on('click', function() {
                    $('.works-filter li a').removeClass(
                        'active');
                    $(this).addClass('active');
                    var selector = $(this).attr(
                        'data-filter');
                    $('.works-container').isotope({
                        filter: selector
                    });
                    return false;
                });


                //Isotope ReLayout on Window Resize event.
                $(window).on('resize', function() {
                    $container.isotope('layout');
                });

                //Isotope ReLayout on device orientation changes
                window.addEventListener("orientationchange", function() {
                    $container.isotope('layout');
                }, false);

            });

        });





//CAROUSEL
 $(".project-carousel").owlCarousel({
                    loop:true,
                    margin:0,
                    dots:false,
                    nav:true,
                    navText: false,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        1000:{
                            items:1
                        }
                    }
                });



//Text Ticker
 $(window).load(function(){
        $('.text-rotator').each(function(){
            
            var text_rotator_content = $(this).html();
            $(this).empty();
            $(this).html('<div class="rotator-wrap"></div>')
            var this_item = $(this).children('.rotator-wrap');
            var text_rotator_content_split = text_rotator_content.split(',');
            var item_size = text_rotator_content_split.length;
            nova_text_rotator(text_rotator_content_split, this_item, item_size);
        });
        
        function nova_text_rotator(item_array, this_item, item_size, my_index){
            
            if(my_index == undefined)
                var my_index = -1;

            my_index++

            if(my_index < item_size)
            {

                this_item.fadeOut(800, function(){
                    this_item.html('<span>'+ item_array[my_index] +'</span>');
                    this_item.fadeIn(800);
                    
                });
            }
            else
            {
                my_index = -1;
            }

            setTimeout(function() {
                 nova_text_rotator(item_array, this_item, item_size, my_index);
            }, 2500);
        }
    });  



//VENOBOX
    $('.venobox, .image-lightbox-link').venobox({
        numeratio: true,
        infinigall: true
    });   
        

 //SKILLS
    $('.skills').waypoint(function(direction) {
        $('.progress-bar').each(function() {
            var progressValue = $(this).attr('data-skills-value');
            $(this).animate({
                            width: progressValue+"%"
                            }, 2500);
        });

    }, { offset: '25%' });


 //PARALLAX
        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $.stellar({
                positionProperty: 'transform'
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).bind('load', function() {
                parallaxInit();
            });


        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }   



    });
    // $(function ($)  : ends
})();
//  JSHint wrapper $(function ($)  : ends