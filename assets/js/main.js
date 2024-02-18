(function ($) {
    var windowOn = $(window);
    // testimonial Slider
    var testimonial = new Swiper(".sc-testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });

    // portfolio Slider
    var portfolio = new Swiper(".sc-portfolio-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });


    // brand Slider
    var brand = new Swiper(".sc-brand-slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: {
            delay: 9000,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            },
        },
    });
    
  
    var ScrollTop = document.querySelector(".scroll-top");
    if (ScrollTop != null) {
        var scrollProgressPatch = document.querySelector(".scroll-top path");
        var pathLength = scrollProgressPatch.getTotalLength();
        var offset = 50;
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "none";
        scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
        scrollProgressPatch.style.strokeDashoffset = pathLength;
        scrollProgressPatch.getBoundingClientRect();
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        window.addEventListener("scroll", function (event) {
            var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = pathLength - (scroll * pathLength) / height;
            scrollProgressPatch.style.strokeDashoffset = progress;
            var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollElementPos >= offset) {
                ScrollTop.classList.add("progress-done");
            } else {
                ScrollTop.classList.remove("progress-done");
            }
        });
        ScrollTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }

    //  search bar
    var search_btn = $(".search-btn");
        if (search_btn.length) {
        $(".search-btn").on("click", function () {
            $(".search_popup").addClass("search-opened");
            $(".search-popup-overlay").addClass("search-popup-overlay-open");
        });

        $(".search_close_btn").on("click", function () {
            $(".search_popup").removeClass("search-opened");
            $(".search-popup-overlay").removeClass("search-popup-overlay-open");
        });
        $(".search-popup-overlay").on("click", function () {
            $(".search_popup").removeClass("search-opened");
            $(this).removeClass("search-popup-overlay-open");
        });
    }

    // Header Sticky  Js
    windowOn.on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#sc-header-sticky").removeClass("sc-header-sticky");
        } else {
            $("#sc-header-sticky").addClass("sc-header-sticky");
        }
    });

 
    $('.modal-popup').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

 
    let sc_animation1 = gsap.utils.toArray(".sc-animation1");
    let homeStratup = gsap.timeline();
    let sc_animation2 = document.querySelector(".sc-animation2");
    let sc_animation3 = document.querySelector(".sc-animation3");

    let sc_animation4 = document.querySelector(".sc-animation4");
    let sc_animation5 = document.querySelector(".sc-animation5");
    let sc_animation6 = document.querySelector(".sc-animation6");

    gsap.set(sc_animation4, {
        opacity: 0,
        y: 50,
    });
    gsap.set(sc_animation5, {
        opacity: 0,
        y: 50,
    });
    gsap.set(sc_animation6, {
        opacity: 0,
        y: 50,
    });
    let sc_animation2_split = new SplitText(sc_animation2, { type: "chars" });
    let sc_animation3_split = new SplitText(sc_animation3, { type: "chars words" });
    homeStratup.from(sc_animation2_split.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
    homeStratup.from(sc_animation3_split.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
    homeStratup.to(sc_animation4, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.5");
    homeStratup.to(sc_animation5, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1");
    homeStratup.to(sc_animation6, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.5");
    sc_animation1.forEach((headingAnimationLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headingAnimationLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const headingSplitLine = new SplitText(headingAnimationLine, { type: "words" });
        gsap.set(headingAnimationLine, { perspective: 400 });
        headingSplitLine.split({ type: "words" });
        tl.from(headingSplitLine.words, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -50,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });

  
    let splitTitleLines = gsap.utils.toArray(".sec-animation");
    splitTitleLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });

    let splitListLines = gsap.utils.toArray(".listing-animation");
    splitListLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });


    var canva_expander = $("#canva_expander");
    if (canva_expander.length) {
        $("#canva_expander, #canva_close, #sc-overlay-bg2, .mobile-navbar-menu ul li a").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("canvas_expanded");
        });
    }

 
    sal({
        threshold: 0.1,
        once: true,
    });
    
    $(document).ready(function () {
      
        $(".odometer").appear(function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    });

   
    $(function() {
        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            var targetId = $(this).attr('href');
            var targetElement = $(targetId);
            if (targetElement.length) {
                $('html, body').animate({ scrollTop: targetElement.offset().top }, 500, 'linear');
            }
        });
    });
    $(window).on("load", function () {
        const preloader = $(".preloader");
        preloader.delay(600).fadeOut();
    });

    var main_menu = $(".main-menu");
        if (main_menu.length) {
        $('ul.main-menu li a').click(function() {
            $('ul.main-menu li a').removeClass('active');
            $(this).addClass('active');
        });
    }
    
})(jQuery);
