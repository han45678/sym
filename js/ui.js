window.onload = function () {

    function loader() {
        document.getElementById("loader").classList.add("active");
        document.querySelector("body").classList.remove('fixed');
        document.querySelector("html").classList.remove('fixed');
    }

    var counter = 0;
    var c = 0;
    var i = setInterval(function () {
        document.getElementById("loading-page").innerHTML = c + "%"
        counter++;
        c++;

        if (counter == 101) {
            clearInterval(i);
        }
    }, 9);

    // $('html,body').animate({
    //     scrollTop: 0
    // }, 800);

    setTimeout(loader, 1000);

};

(function ($) {
    $('.go_step').click(function () {
        $("#product").addClass("active")
        $("#bottom").addClass("active")
        // $("#product li #slick-slide-control32").click()
        if ($(window).outerWidth() >= 1024) {
            $("#step_title").addClass("to")
            $('#top').animate({
                scrollTop: $('#product_tltle').offset().top - 10
            }, 800);
            $("#product").scrollLeft($(window).width() * 2 - 10)
        }
    });

    $('.go_contact').click(function () {
        $("#product").addClass("active")
        $("#bottom").addClass("active")
        // $("#product li #slick-slide-control32").click()
        if ($(window).outerWidth() >= 1024) {
            $("#step_title").addClass("to")
            $('#top').animate({
                scrollTop: $('#product_tltle').offset().top - 10
            }, 800);
            $("#product").scrollLeft($(window).width() * 2 - 10)
        }

        // $('#bottom').animate({scrollTop:$('#contact').offset().top}, 800);
    });

    if ($(window).outerWidth() < 769) {
        $("#introduction_content .content").removeClass("active");
    }

    $('#partner .da').click(function () {
        $('html,body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    });

    $('#service .da').click(function () {
        $('html,body').animate({
            scrollTop: $('#innovating').offset().top
        }, 800);
    });

    $('#banner .slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        autoplay: true,
        arrows: false,
    });

    $('#banner_m .slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        autoplay: true,
        arrows: false,
    });


    if ($(window).outerWidth() >= 1024) {
        $("#banner_m").remove()
        $("#video_m").remove()
        $(".mobile").remove()
        $("#introduction .wrapper #introduction_content .content .item .video .m").remove()
        $('#about .slick').slick({
            dots: true,
            // autoplay: true,
            slidesToShow: 1,
            arrows: false,
            adaptiveHeight: true
        });

        var bv = $("#banner_video").text()

        videojs("banner_video", {
            controls: false,
            autoplay: true,
            muted: true,
            loop: true,
            height: '100vh',
            preload: "auto",
            techOrder: ["youtube"],
            sources: [{
                type: "video/youtube",
                src: "https://www.youtube.com/watch?v=" + bv
            }]
        });

        var vv = $("#film").text()

        videojs("film", {
            controls: false,
            autoplay: false,
            muted: true,
            loop: true,
            preload: "auto",
            techOrder: ["youtube"],
            sources: [{
                type: "video/youtube",
                src: "https://www.youtube.com/watch?v=" + vv
            }]
        });
    } else {
        $(".pc").remove()
        $("#banner").remove()
        $("#video").remove()
        $("#introduction .wrapper #introduction_content .content .item .video .pc").remove()
    }
    if ($(window).outerWidth() < 768) {
        $('#about_text .slick').slick({
            dots: true,
            // autoplay: true,
            slidesToShow: 1,
            arrows: false,
            adaptiveHeight: true
        });
    }
    /* 
    if ($(window).outerWidth() >= 1024) {
        var o = document.querySelector('#product');

        o.onwheel = function (event) {
            event.preventDefault();

            var step = 70;

            if (event.deltaY < 0) {
                //向上滾動 滾動條右移
                this.scrollLeft -= step;
                console.log(step)
                // $("#product").css("transform","translateX("+ -step +"vw)")
                if ($("#product").scrollLeft() <= $("#product").width() * 1 - 250) {
                    $(".product2").addClass("to")
                }

                if ($("#product").scrollLeft() <= $("#product").width() * 2 - 250) {
                    $(".product3").addClass("to")
                }
            } else {
                //向下滾動 滾動條左移
                this.scrollLeft += step;
                console.log(step)
                // $("#product").css("transform","translateX("+ +step +"vw)")
                if ($("#product").scrollLeft() >= $("#product").width() * 1 - 250) {
                    $(".product2").addClass("to")
                }

                if ($("#product").scrollLeft() >= $("#product").width() * 2 - 250) {
                    $(".product3").addClass("to")
                }
            }
        }

        $("#product").scroll(function () {
            if ($("#product").scrollLeft() === 0) {
                $('#top').animate({
                    scrollTop: $('#top').scrollTop() - 10
                }, 300);
                $("#product").removeClass("active")
            }
            if ($("#product").scrollLeft() >= $(window).width() * 2) {
                $('#bottom').animate({
                    scrollTop: $('#bottom').scrollTop() + 10
                }, 300);
                $("#bottom").addClass("active")
                $("#step_title").delay(800).addClass('to')

            }
        })
    } else {
        $('#product').slick({
            dots: true,
            infinite: false,
            autoplay: false,
            arrows: false,
            speed: 1000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    // vertical: true,
                    // verticalSwiping: true,
                    arrows: true,
                }
            }]
        });
    }
    */

    $('#step .slick').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        slidesToShow: 1,
        arrows: true,
        appendDots: $('#step .dots'),
        nextArrow: '#step_next',
        prevArrow: '#step_previous',
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
            }
        }]
    });

    $('#step .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        let ssw = $('#step .content .item').length
        let n = $("#step .slick-dots .slick-active").text()

        $("#step .mask").css('clip-path', 'inset(0 0 0 ' + 100 / ssw * n + '%')
    });

    // $('#step .content .item').lengthfd

    // if ($("#top").scrollTop() === 0) {
    //     $('header').removeClass('fixed');
    //     $('header').removeClass('fd');
    // } else {
    //     $('header').addClass('fixed');
    //     $('header').addClass('fd');
    // }

    // if ($(window).scrollTop() > 0) {
    //     $('header').addClass('fd');
    // }

    var countOptions = {
        useEasing: false,
        separator: ''
    }
    var pn = new CountUp('pn', 0, 37, 0, 2, countOptions)

    $(window).scroll(function () {
        if ($("#top").scrollTop() === 0) {
            $('header').removeClass('fixed');
        } else {
            $('header').addClass('fixed');
        }

        let wh = $(window).height(); //瀏覽器可視視窗的高度
        let ws = $(window).scrollTop(); //目前視窗離頂部的高度
        let m = wh / 2 + ws;

        // $("#partner").each(function () {
        //     if ($(this).offset().top < m - $(this).height() / 2) {
        //         $(this).addClass("pto4");
        //         // console.log("開跑")
        //         pn.start()
        //     }
        // });

        // $("#partner").each(function () {
        //     if ($(this).offset().top < m - $(this).height() / 2 + 100) {
        //         $(this).addClass("pto3");
        //     }
        // });

        // $("#partner").each(function () {
        //     if ($(this).offset().top < m - $(this).height() / 2 + 150) {
        //         $(this).addClass("pto2");
        //     }
        // });

        $("#partner").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 250) {
                $(this).addClass("pto1");
                $(this).delay(600).addClass("pto2");
                $(this).delay(1200).addClass("pto3");
                $(this).delay(2400).addClass("pto4");
                pn.start()
            }
        });

        $("#video").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 250) {
                videojs("film").play();
            }
        });

        $(".an").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 250) {
                $(this).addClass("to");
            }
        });

        $(".ian").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 250) {
                $(this).addClass("to");
            } else {
                $(this).removeClass("to");
            }
        });

        $(".scro").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2) {
                $('#dots ul li').removeClass('active')
                $(this).addClass("to");
            }
        });

        $("#about").each(function () {
            if ($(window).outerWidth() >= 1024) {
                if ($(this).offset().top < m - $(this).height() / 2 + 100) {
                    $(this).addClass("ato5");
                } else {
                    $(this).removeClass("ato5");
                }
            }

        });

        $("#about").each(function () {
            if ($(window).outerWidth() >= 1024) {
                if ($(this).offset().top < m - $(this).height() / 2 + 150) {
                    $(this).addClass("ato4");
                } else {
                    $(this).removeClass("ato4");
                }
            }

        });

        $("#about").each(function () {
            if ($(window).outerWidth() >= 1024) {
                if ($(this).offset().top < m - $(this).height() / 2 + 200) {
                    $(this).addClass("ato3");
                } else {
                    $(this).removeClass("ato3");
                }
            } else {
                if ($(this).offset().top < m - 250) {
                    $(this).addClass("ato3");
                } else {
                    $(this).removeClass("ato3");
                }
            }

        });

        $("#about").each(function () {
            if ($(window).outerWidth() >= 1024) {
                if ($(this).offset().top < m - $(this).height() / 2 + 250) {
                    $(this).addClass("ato2");
                } else {
                    $(this).removeClass("ato2");
                }
            } else {
                if ($(this).offset().top < m - 150) {
                    $(this).addClass("ato2");
                } else {
                    $(this).removeClass("ato2");
                }
            }

        });

        $("#about").each(function () {
            if ($(window).outerWidth() >= 1024) {
                if ($(this).offset().top < m - $(this).height() / 2 + 300) {
                    $(this).addClass("ato1");
                } else {
                    $(this).removeClass("ato1");
                }
            } else {
                if ($(this).offset().top < m - 50) {
                    $(this).addClass("ato1");
                } else {
                    $(this).removeClass("ato1");
                }
            }
        });

        $("#about_text").each(function () {
            if ($(window).outerWidth() >= 1024) {
                if ($(this).offset().top < m - $(this).height() / 2 + 100) {
                    $(this).delay(1200).addClass("ato1");
                } else {
                    $(this).removeClass("ato1");
                }
            }

        });

        // $("#service").each(function () {
        //     if ($(this).offset().top < m - $(this).height() / 2 + 0) {
        //         $("#service .sant").addClass("to");
        //     } else {
        //         $("#service .sant").removeClass("to");
        //     }
        // });

        $("#service").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 50) {
                $("#service h2").addClass("to")
                $("#service ul").delay(400).addClass("to");
                $("#service ul li:nth-child(1)").delay(600).addClass("to");
                $("#service ul li:nth-child(2)").delay(800).addClass("to");
                $("#service ul li:nth-child(3)").delay(1000).addClass("to");
                $("#service ul li:nth-child(4)").delay(1200).addClass("to");
                $("#service ul li:nth-child(5)").delay(1400).addClass("to");
                $("#service ul li:nth-child(6)").delay(1600).addClass("to");
                $("#service ul li:nth-child(7)").delay(1800).addClass("to");
                $("#service ul li:nth-child(8)").delay(2000).addClass("to");
                $("#service ul li:nth-child(9)").delay(2200).addClass("to");
                $("#service ul li:nth-child(10)").delay(2400).addClass("to");
            } else {
                $("#service h2").removeClass("to")
                $("#service ul").removeClass("to");
                $("#service ul li").removeClass("to");
            }
        });

        $("#innovating").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 50) {
                $(this).addClass("ito3");
            } else {
                $(this).removeClass("ito3");
            }
        });

        $("#innovating").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 150) {
                $(this).addClass("ito2");
            } else {
                $(this).removeClass("ito2");
            }
        });

        $("#innovating").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 250) {
                $(this).addClass("ito1");
            } else {
                $(this).removeClass("ito1");
            }
        });

        $("#step_title").each(function () {
            if ($(this).offset().top < m - $(this).height() / 2 + 250) {
                $(this).addClass("to");
            } else {
                $(this).removeClass("to");
            }
        });

        // if ($(window).outerWidth() >= 1024) {
        //     if ($("#top").scrollTop() > $('#banner').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_banner').addClass('active')
        //     }
        //     if ($("#top").scrollTop() > $('#partner').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_partner').addClass('active')
        //     }
        //     if ($("#top").scrollTop() > $('#about').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_about').addClass('active')
        //     }
        //     if ($("#top").scrollTop() > $('#video').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_video').addClass('active')
        //     }
        //     if ($("#top").scrollTop() > $('#service').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_service').addClass('active')
        //     }
        //     if ($("#top").scrollTop() > $('#innovating').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_innovating').addClass('active')
        //     }
        //     if ($("#top").scrollTop() > $('#product_tltle').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_product').addClass('active')
        //     }

        //     if ($("#bottom").scrollTop() > $('#step_title').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_step').addClass('active')
        //     }
        //     if ($("#bottom").scrollTop() > $('#contact').position().top) {
        //         $('#dots ul li').removeClass('active')
        //         $('#dots_contact').addClass('active')
        //     }
        // }
    });

    $('#menu_button').click(function () {
        $("header").toggleClass("active");
        $("#menu").toggleClass("active");
        $(this).toggleClass("active");
        $("#mask").fadeToggle();
        // $("html").css("overflow-y","hidden;");
    });

    $('#mask').click(function () {
        $('#menu_button').click()
    });

    $('#laboratory_button').click(function () {
        $(".introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#slick-slide-control80").click()
    });

    $('#filling_button').click(function () {
        $(".introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#slick-slide-control81").click()
    });

    $('#quality_button').click(function () {
        $(".introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#slick-slide-control82").click()
    });

    $('#sterilization_button').click(function () {
        $(".introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#slick-slide-control83").click()
    });

    $('.checkbox').click(function () {
        $(this).toggleClass("active");
    });

    $('#introduction_content .content.slick').slick({
        dots: true,
        infinite: true,
        // autoplay: true,
        arrows: false,
    });
    $('#im1,#im1_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic1').addClass("active");
    });
    $('#im2,#im2_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic2').addClass("active");
    });
    $('#im3,#im3_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic3').addClass("active");
    });
    $('#im4,#im4_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic4').addClass("active");
    });
    $('#im5,#im5_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic5').addClass("active");
    });
    $('#im6,#im6_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic6').addClass("active");
    });
    $('#im7,#im7_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic7').addClass("active");
    });
    $('#im8,#im8_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic8').addClass("active");
    });
    $('#im9,#im9_m').click(function () {
        $("#introduction_menu ul li").removeClass("active");
        $(this).addClass("active");
        $("#introduction_content .content").removeClass("active");
        $('#ic9').addClass("active");
    });

    $('#menu ul li').click(function () {
        $('#menu_button').click()
    });

    // $('#contact #send').click(function () {
    //     $("#contact .win").addClass("active");
    //     $("#window_bottom").show();
    //     $("#contact .win .title").delay(600).addClass("wan");
    //     $("#contact .win p").delay(600).addClass("wan");
    // });

    // $('#contact_send').click(function () {
    //     $("#contact .win").addClass("active");
    //     $("#window_bottom").show();
    //     $("#contact .win .title").delay(600).addClass("wan");
    //     $("#contact .win p").delay(600).addClass("wan");
    // });

    $('#contact #illustrate').click(function () {
        $(".illustrate_win").addClass("active");
        $("#window_bottom").show();
        if ($(window).outerWidth() >= 1024) {
            $("#bottom").css("overflow-y", "hidden")
        } else {
            $("html").css("overflow-y", "hidden")
            $("body").css("overflow-y", "hidden")
        }
    });

    $('#window_bottom').click(function () {
        $(this).hide();
        $("#contact .win").removeClass("active");
        $(".illustrate_win").removeClass("active");
        $("#contact .win .title").removeClass("wan");
        $("#contact .win p").removeClass("wan");
        if ($(window).outerWidth() >= 1024) {
            $("#bottom").css("overflow-y", "auto")
        } else {
            $("html").css("overflow-y", "auto")
            $("body").css("overflow-y", "auto")
        }
    });


    var $window = $(window);
    var wW = $(window).width();
    var trigger_size = [1024];

    $window.resize(function () {
        trigger_size.forEach(function (size) {
            if (wW > size) {
                ($window.width() <= size) ? location.reload(): "";
            } else {
                ($window.width() > size) ? location.reload(): "";
            }
        });
    });

    var scrollFunc = function (e) {
        var e = e || window.event;
        if (e.wheelDelta) {
            if (e.wheelDelta > 0) { //當鼠標滾輪向上滾動時
                $('header').removeClass('fd');
            }
            if (e.wheelDelta < 0) { //當鼠標滾輪向下滾動時
                $('header').addClass('fd');
            }
        } else if (e.detail) {
            if (e.detail < 0) { //當鼠標滾輪向上滾動時
                $('header').removeClass('fd');
            }
            if (e.detail > 0) { //當鼠標滾輪向下滾動時
                $('header').addClass('fd');
            }
        }
    }
    //    給頁面綁定鼠標滾輪事件,針對火狐的非標准事件 
    window.addEventListener("DOMMouseScroll", scrollFunc)
    //    給頁面綁定鼠標滾輪事件，針對Google，mousewheel非標准事件已被棄用，請使用 wheel事件代替
    window.addEventListener("wheel", scrollFunc)
    //    ie不支持wheel事件，若一定要兼容，可使用mousewheel
    window.addEventListener("mousewheel", scrollFunc)

    $(window).on('load', gsapScrollPanel);


    function gsapScrollPanel() {

        var controllerScrollPanel,
            scrollSceneDefaultForward,
            scrollSceneDefaultReverse,
            resizeTimer;


        // If the .fullpage container exists, set up the fullpage section animations
        if ($('.fullpage').length) {
            initController();
            handleResize();
        }


        // Initialize the scrollMagic controller
        function initController() {

            // Init new controller
            controllerScrollPanel = new ScrollMagic.Controller();

            // Change behaviour of controller to animate scroll instead of jump
            controllerScrollPanel.scrollTo(function (newpos) {
                TweenMax.to(window, 0.5, {
                    scrollTo: {
                        y: newpos,
                        autoKill: false
                    }
                });
            });

            // Init the forward and reverse scenes
            scrollPanelScenes();
        }


        // If window is resized, destroy controller and reset once resize has stopped
        function handleResize() {
            $(window).resize(function () {
                destroyScrollPanels();
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(doneResizing, 500);
            });

            function doneResizing() {
                reInitScrollPanels();
            }
        }


        // Destroy scroll panels
        function destroyScrollPanels() {
            controllerScrollPanel.destroy();
            scrollSceneDefaultForward.destroy();
            scrollSceneDefaultReverse.destroy();
        }


        // Re-init scroll panels
        function reInitScrollPanels() {
            controllerScrollPanel = null;
            scrollSceneDefaultForward = null;
            scrollSceneDefaultReverse = null;
            initController();
        }


        // The forward and reverse scenes
        function scrollPanelScenes() {

            // Create scenes for panels, when scrolling forward
            $('.fullpage__section').each(function (index, elem) {
                var $scrollPanel = $(elem);
                var forwardScrollPos = $scrollPanel.offset().top;

                scrollSceneDefaultForward = new ScrollMagic.Scene({
                        offset: 10, // Number of pixels user can scroll before panel snaps into place
                        triggerElement: elem,
                        triggerHook: 1, // Trigger this scene when top of panel enters view
                    })
                    .on('start', function (event) {
                        if (event.scrollDirection == 'FORWARD') {
                            controllerScrollPanel.scrollTo(forwardScrollPos); // If direction is forward, trigger scrollTo
                        } else if (event.scrollDirection == 'REVERSE') {
                            // Do nothing
                        }
                    })
                    // Prevent problems with momentum scrolling by pausing for a period of time
                    .on('enter', function (event) {
                        $('body').addClass('is-locked');
                        setTimeout(function () {
                            $('body').removeClass('is-locked');
                        }, 1200)
                    })
                    .addTo(controllerScrollPanel);
            })


            // Create scenes for panels, when scrolling reverse
            $('.fullpage__section:nth-child(n+2)').each(function (index, elem) {
                var $scrollPanel = $(elem);
                var reverseScrollPos = $scrollPanel.prev().offset().top;

                scrollSceneDefaultReverse = new ScrollMagic.Scene({
                        offset: -10, // Number of pixels user can scroll before panel snaps into place
                        triggerElement: elem,
                        triggerHook: 0, // Trigger this scene when bottom of panel enters view
                    })
                    .on('start', function (event) {
                        if (event.scrollDirection == 'FORWARD') {
                            // Do nothing
                        } else if (event.scrollDirection == 'REVERSE') {
                            controllerScrollPanel.scrollTo(reverseScrollPos); // If direction is reverse, trigger scrollTo
                        }
                    })
                    // Prevent problems with momentum scrolling by pausing for a period of time
                    .on('leave', function (event) {
                        $('body').addClass('is-locked');
                        setTimeout(function () {
                            $('body').removeClass('is-locked');
                        }, 1200)
                    })
                    .addTo(controllerScrollPanel);
            })

        }

    }

})(jQuery);