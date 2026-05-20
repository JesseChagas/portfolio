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

// ════════════════════════════════════════════
// 3D scroll & tilt effects
// ════════════════════════════════════════════
(function() {
    // ── Scroll-triggered 3D entrance for cert cards ──
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.cert-3d-item').forEach(function(item, i) {
            gsap.to(item, {
                opacity: 1,
                rotateY: 0,
                x: 0,
                duration: 0.75,
                delay: i * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 88%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // ── 3D parallax depth on About counters ──
        gsap.from('.ab-counter', {
            z: -80,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.ab-counter',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        // ── Slide-in 3D for experience entries ──
        gsap.utils.toArray('.ab-date-content').forEach(function(el, i) {
            gsap.from(el, {
                opacity: 0,
                x: 40,
                rotateY: -8,
                duration: 0.6,
                delay: i * 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    // ── 3D mouse-tilt on portfolio cards ──
    document.querySelectorAll('.portfolio-item').forEach(function(card) {
        card.style.transformStyle = 'preserve-3d';
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var cx = rect.width / 2;
            var cy = rect.height / 2;
            var rotX = ((y - cy) / cy) * -8;
            var rotY = ((x - cx) / cx) * 8;
            card.style.transform = 'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) scale3d(1.02,1.02,1.02)';
            card.style.transition = 'transform 0.08s ease-out';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s ease';
        });
    });

    // ── Touch support: flip cert cards on tap (mobile) ──
    document.querySelectorAll('.cert-card').forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
    });
})();

// ════════════════════════════════════════════
// i18n translations + Terminal Easter Egg
// ════════════════════════════════════════════
(function() {
    // ── i18n translations ──
    var T = {
        en: {
            'nav.home':'Home','nav.about':'About','nav.certs':'Certs',
            'nav.portfolio':'Portfolio','nav.research':'Research','nav.contact':'Contact',
            'header.cta':"Let's Talk",
            'hero.greeting':"Hello, ✌️ I'm Jessé Chagas",
            'hero.desc':'Full Stack Developer · Data Enthusiast · CS student at UFCG. Building software and solving real problems since 2022.',
            'hero.freelance':'Freelancer Available','hero.follow':'Follow Me',
            'about.label':'About Me 👋',
            'about.title':'I\'ve been <span class="active"> Full-Stack Developer and</span> <span class="active-color"> Tech Professional</span> Since 2022',
            'about.mission':'About me',
            'about.desc1':'I build software using Java, Python, JavaScript, and PHP — with Spring Boot, Laravel, and Node.js. Currently working as CX & Data Specialist at Cupom Fiscal Sistemas and Online Content Manager at Ajardine Imóveis.',
            'about.desc2':'I also study Data Analytics (Google Certificate), algorithms & data structures, and IoT sensing platforms. Proficient in Figma, Photoshop, and Illustrator. Pursuing a B.Sc. in Computer Science at UFCG (est. 2028).',
            'about.counter1':'Years of experience','about.counter2':'Projects delivered',
            'about.exp':'Experience','about.skills':'Skills',
            'exp1.role':'Web Developer · Intern',
            'exp2.role':'Online Content Manager · Trainee',
            'exp3.role':'CX & Data Specialist · Part-time',
            'exp4.role':'Freelance Developer',
            'certs.label':'Specialities 👋',
            'certs.title':'These Are My <span class="active-color"> Certifications</span>',
            'portfolio.label':'Portfolio 👏',
            'portfolio.title':'These Are My <span class="active-color"> Portfolio</span>',
            'research.label':'Research &amp; Writing ✍️',
            'research.title':'Published <span class="active-color">Work</span>',
            'cta.title':"I'm available for<br />freelance work",
            'cta.hire':'Hire Me','cta.call':'Call me',
            'contact.label':'Drop Me Line ✍️',
            'contact.title':'Let\'s Start Your Next <span class="active-color"> Dream Project</span>',
            'contact.email':'Email','contact.phone':'Phone','contact.address':'Office Address',
            'contact.form':'Get In Touch','contact.submit':'Submit Now',
            'form.name':'Name','form.email':'Email','form.subject':'Subject','form.msg':'Describe your project...',
            'footer.follow':'Follow Me','footer.links':'Quick Link',
            'footer.about':'About Me','footer.certs':'Certifications',
            'footer.portfolio':'Portfolio','footer.privacy':'Privacy Policy',
            'otw.text':'Open to Work',
            'otw.tooltip':'Looking for: <strong>Internship · Freelance · CLT</strong><br/>Remote only &nbsp;·&nbsp; Available now',
            'pf.all':'All','pf.web':'Web','pf.python':'Python','pf.game':'Game',
            'stats.projects':'Projects Delivered','stats.papers':'Paper Published',
            'stats.years':'Years of Experience','stats.techs':'Technologies',
        },
        pt: {
            'nav.home':'Início','nav.about':'Sobre','nav.certs':'Certs',
            'nav.portfolio':'Portfólio','nav.research':'Pesquisa','nav.contact':'Contato',
            'header.cta':'Fale Comigo',
            'hero.greeting':'Olá, ✌️ Sou Jessé Chagas',
            'hero.desc':'Desenvolvedor Full Stack · Entusiasta de Dados · Estudante de CC na UFCG. Construindo software e resolvendo problemas reais desde 2022.',
            'hero.freelance':'Disponível para Freelas','hero.follow':'Me Siga',
            'about.label':'Sobre Mim 👋',
            'about.title':'Desenvolvedor Full Stack e <span class="active-color"> Profissional de Tecnologia</span> Desde 2022',
            'about.mission':'Sobre mim',
            'about.desc1':'Desenvolvo software com Java, Python, JavaScript e PHP — usando Spring Boot, Laravel e Node.js. Atualmente atuo como Especialista em CX & Dados na Cupom Fiscal Sistemas e Gestor de Conteúdo Online na Ajardine Imóveis.',
            'about.desc2':'Também estudo Análise de Dados (Certificado Google), algoritmos e estruturas de dados, e plataformas de IoT. Domino Figma, Photoshop e Illustrator. Cursando B.Sc. em Ciência da Computação na UFCG (conclusão: 2028).',
            'about.counter1':'Anos de experiência','about.counter2':'Projetos entregues',
            'about.exp':'Experiência','about.skills':'Habilidades',
            'exp1.role':'Desenvolvedor Web · Estagiário',
            'exp2.role':'Gestor de Conteúdo Online · Trainee',
            'exp3.role':'Especialista em CX & Dados · Meio período',
            'exp4.role':'Desenvolvedor Freelance',
            'certs.label':'Especialidades 👋',
            'certs.title':'Minhas <span class="active-color">Certificações</span>',
            'portfolio.label':'Meu Portfólio 👏',
            'portfolio.title':'Projetos <span class="active-color">Recentes</span>',
            'research.label':'Pesquisa &amp; Escrita ✍️',
            'research.title':'Trabalhos <span class="active-color">Publicados</span>',
            'cta.title':'Disponível para<br />trabalhos freelance',
            'cta.hire':'Contrate-me','cta.call':'Ligar',
            'contact.label':'Entre em Contato ✍️',
            'contact.title':'Vamos Iniciar Seu <span class="active-color">Próximo Projeto</span>',
            'contact.email':'E-mail','contact.phone':'Telefone','contact.address':'Localização',
            'contact.form':'Entre em Contato','contact.submit':'Enviar Agora',
            'form.name':'Nome','form.email':'E-mail','form.subject':'Assunto','form.msg':'Descreva seu projeto...',
            'footer.follow':'Me Siga','footer.links':'Links Rápidos',
            'footer.about':'Sobre Mim','footer.certs':'Certificações',
            'footer.portfolio':'Portfólio','footer.privacy':'Política de Privacidade',
            'otw.text':'Disponível para Trabalho',
            'otw.tooltip':'Buscando: <strong>Estágio · Freela · CLT</strong><br/>Apenas remoto &nbsp;·&nbsp; Disponível agora',
            'pf.all':'Todos','pf.web':'Web','pf.python':'Python','pf.game':'Jogo',
            'stats.projects':'Projetos Entregues','stats.papers':'Artigo Publicado',
            'stats.years':'Anos de Experiência','stats.techs':'Tecnologias',
        }
    };

    var currentLang = localStorage.getItem('portfolio-lang') || 'en';

    function applyLang(lang) {
        var t = T[lang];
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var v = t[el.getAttribute('data-i18n')];
            if (v !== undefined) el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            var v = t[el.getAttribute('data-i18n-html')];
            if (v !== undefined) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
            var v = t[el.getAttribute('data-i18n-ph')];
            if (v !== undefined) el.setAttribute('placeholder', v);
        });
        var flag = document.getElementById('lang-flag');
        var code = document.getElementById('lang-code');
        if (flag) flag.textContent = lang === 'pt' ? '🇺🇸' : '🇧🇷';
        if (code) code.textContent  = lang === 'pt' ? 'EN'   : 'PT';
        localStorage.setItem('portfolio-lang', lang);
        currentLang = lang;
    }

    if (currentLang === 'pt') applyLang('pt');

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', function() {
        applyLang(currentLang === 'en' ? 'pt' : 'en');
    });

    // ── Terminal Easter Egg ──
    var trigger  = document.getElementById('term-trigger');
    var overlay  = document.getElementById('term-overlay');
    var termBody = document.getElementById('term-body');
    var input    = document.getElementById('term-input');
    var closeBtn = document.getElementById('term-close');
    var history  = [], histIdx = -1;

    var cmds = {
        help: function() { return [
            '<span class="term-line-hi">Available commands:</span>',
            '  <span class="term-line-cmd">whoami</span>    — who is Jessé?',
            '  <span class="term-line-cmd">about</span>     — background & education',
            '  <span class="term-line-cmd">skills</span>    — tech stack',
            '  <span class="term-line-cmd">projects</span>  — portfolio projects',
            '  <span class="term-line-cmd">research</span>  — published paper',
            '  <span class="term-line-cmd">contact</span>   — get in touch',
            '  <span class="term-line-cmd">clear</span>     — clear terminal',
            '  <span class="term-line-cmd">exit</span>      — close terminal',
        ];},
        whoami: function() { return [
            '<span class="term-line-hi">Jessé Oliveira das Chagas</span>',
            'Full Stack Developer · Data Enthusiast',
            'CS student at UFCG · Campina Grande, PB 🇧🇷',
        ];},
        about: function() { return [
            '<span class="term-line-hi">Education</span>',
            '  B.Sc. Computer Science — UFCG (2024–2028)',
            '',
            '<span class="term-line-hi">Experience</span>',
            '  Web Developer Intern   — IFPB (2022–2023)',
            '  Content Manager        — Ajardine Imóveis (2023–present)',
            '  CX &amp; Data Specialist    — Cupom Fiscal (2024–present)',
        ];},
        skills: function() { return [
            '<span class="term-line-hi">Back-end  </span> Java/Spring Boot · Python · PHP/Laravel · SQL',
            '<span class="term-line-hi">Front-end </span> JavaScript/Node.js · HTML/CSS/Bootstrap',
            '<span class="term-line-hi">Design    </span> Figma · Photoshop · Illustrator · Flutter/Firebase',
        ];},
        projects: function() { return [
            '<span class="term-line-hi">Promo Bot</span>',
            '  Telegram bot · Mercado Livre scraping · Python, Selenium',
            '',
            '<span class="term-line-hi">Advergame — Lajedo Marinho</span>',
            '  Educational game for marine conservation · Java, LibGDX',
        ];},
        research: function() { return [
            '<span class="term-line-hi">WICS 2024 / SBC — Jul 21, 2024</span>',
            '  "IA burlada: elaboração de prompts maliciosos no ChatGPT"',
            '  Authors: João Paiva, <span class="term-line-hi">Jessé Chagas</span>, Danyllo Albuquerque, Golbery Rodrigues',
            '  DOI: 10.5753/wics.2024.2855',
        ];},
        contact: function() { return [
            '📧  jessechagas2006@gmail.com',
            '📱  (83) 9 9328-5838',
            '💼  linkedin.com/in/jessechagas-dev',
            '🐙  github.com/JesseChagas',
        ];},
        clear: function() { termBody.innerHTML = ''; return []; },
        exit:  function() { closeTerminal(); return []; },
    };

    function print(html, cls) {
        var d = document.createElement('div');
        if (cls) d.className = cls;
        d.innerHTML = html || '&nbsp;';
        termBody.appendChild(d);
        termBody.scrollTop = termBody.scrollHeight;
    }

    function run(raw) {
        var cmd = raw.trim().toLowerCase();
        print('jesse@portfolio:~$ ' + (raw.trim() || ''), 'term-line-cmd');
        if (!cmd) return;
        history.unshift(cmd); histIdx = -1;
        if (cmds[cmd]) { cmds[cmd]().forEach(function(l){ print(l); }); }
        else { print('command not found: <b>' + cmd + '</b> — type <span class="term-line-cmd">help</span>', 'term-line-err'); }
        print('');
    }

    function openTerminal()  { overlay.classList.add('open');    setTimeout(function(){ input && input.focus(); }, 80); }
    function closeTerminal() { overlay.classList.remove('open'); }

    if (trigger)  trigger.addEventListener('click', openTerminal);
    if (closeBtn) closeBtn.addEventListener('click', closeTerminal);
    if (overlay)  overlay.addEventListener('click', function(e){ if (e.target === overlay) closeTerminal(); });

    if (input) {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') { var v = input.value; input.value = ''; run(v); }
            else if (e.key === 'ArrowUp')   { e.preventDefault(); if (histIdx < history.length-1) histIdx++; input.value = history[histIdx] || ''; }
            else if (e.key === 'ArrowDown') { e.preventDefault(); if (histIdx > 0) histIdx--; else { histIdx=-1; input.value=''; return; } input.value = history[histIdx] || ''; }
            else if (e.key === 'Escape') closeTerminal();
        });
        var box = document.querySelector('.term-box');
        if (box) box.addEventListener('click', function(){ input.focus(); });
    }

    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === '`') { e.preventDefault(); overlay.classList.contains('open') ? closeTerminal() : openTerminal(); }
    });
})();

// ════════════════════════════════════════════
// Typewriter & EmailJS contact form
// ════════════════════════════════════════════
(function() {
    // ── Typewriter ──
    var words = ['Scientist', 'Developer', 'Problem Solver', 'Data Analyst'];
    var el = document.getElementById('typewriter-text');
    if (el) {
        var i = 0, charI = words[0].length, deleting = false;
        function tick() {
            var word = words[i % words.length];
            if (!deleting) {
                charI++;
                el.textContent = word.slice(0, charI);
                if (charI >= word.length) { deleting = true; setTimeout(tick, 2000); return; }
            } else {
                charI--;
                el.textContent = word.slice(0, charI);
                if (charI === 0) { deleting = false; i++; }
            }
            setTimeout(tick, deleting ? 55 : 110);
        }
        setTimeout(tick, 2500);
    }

    // ── EmailJS contact form ──
    // 1. Crie conta em emailjs.com (grátis)
    // 2. Crie um Email Service e copie o Service ID abaixo
    // 3. Crie um Email Template com as variáveis: {{name}}, {{email}}, {{subject}}, {{message}}
    // 4. Copie o Template ID e a Public Key (Account > API Keys)
    var EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // <- substitua
    var EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // <- substitua
    var EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // <- substitua

    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    var form   = document.getElementById('contact-form');
    var btn    = document.getElementById('contact-submit');
    var status = document.getElementById('contact-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                status.style.color = '#f87171';
                status.textContent = 'Configure as chaves do EmailJS no HTML para ativar o envio.';
                return;
            }
            btn.disabled = true;
            btn.innerHTML = 'Sending… <i class="ri-loader-4-line"></i>';
            status.textContent = '';
            var params = {
                name:    document.getElementById('name').value,
                email:   document.getElementById('emailOne').value,
                subject: document.getElementById('SubjectTwo').value,
                message: document.getElementById('message').value,
            };
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
                .then(function() {
                    status.style.color = '#4dffaf';
                    status.textContent = '✓ Mensagem enviada! Responderei em breve.';
                    form.reset();
                })
                .catch(function() {
                    status.style.color = '#f87171';
                    status.textContent = '✕ Erro ao enviar. Tente pelo WhatsApp ou e-mail.';
                })
                .finally(function() {
                    btn.disabled = false;
                    btn.innerHTML = 'Submit Now <i class="ri-arrow-right-line"></i>';
                });
        });
    }
})();

// ════════════════════════════════════════════
// Scroll progress bar + OTW badge + Portfolio filters
// ════════════════════════════════════════════
(function() {
    // ── Scroll progress bar ──
    var pb = document.getElementById('scroll-progress');
    if (pb) {
        window.addEventListener('scroll', function() {
            var s = document.documentElement.scrollTop || document.body.scrollTop;
            var h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            pb.style.width = (h > 0 ? (s / h * 100) : 0) + '%';
        }, { passive: true });
    }

    // ── OTW badge: fade-in + body-level tooltip ──
    var otw = document.querySelector('.otw-badge');
    if (otw) {
        setTimeout(function() {
            otw.style.transition = 'opacity .8s ease';
            otw.style.opacity = '1';
        }, 1800);

        // Build tooltip as direct child of body (avoids GSAP transform stacking context)
        var otwTip = document.createElement('div');
        otwTip.className = 'otw-tooltip';
        otwTip.innerHTML = 'Looking for: <strong>Internship · Freelance · CLT</strong><br>Remote only &nbsp;·&nbsp; Available now';
        document.body.appendChild(otwTip);

        otw.addEventListener('mouseenter', function() {
            var r = otw.getBoundingClientRect();
            otwTip.style.top     = (r.bottom + 10) + 'px';
            otwTip.style.left    = r.left + 'px';
            otwTip.style.display = 'block';
        });
        otw.addEventListener('mouseleave', function() {
            otwTip.style.display = 'none';
        });
    }

    // ── Portfolio filters ──
    document.querySelectorAll('.pf-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.pf-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.portfolio-col').forEach(function(col) {
                var cats = col.getAttribute('data-category') || '';
                var show = filter === 'all' || cats.split(' ').indexOf(filter) !== -1;
                col.classList.toggle('pf-hidden', !show);
            });
        });
    });
})();

// ════════════════════════════════════════════
// Magnetic Buttons + Command Palette
// ════════════════════════════════════════════
(function() {
    // ── MAGNETIC BUTTONS ──
    var STRENGTH = 0.38;
    document.querySelectorAll('.mag-btn').forEach(function(btn) {
        btn.addEventListener('mousemove', function(e) {
            var r   = btn.getBoundingClientRect();
            var dx  = (e.clientX - (r.left + r.width  / 2)) * STRENGTH;
            var dy  = (e.clientY - (r.top  + r.height / 2)) * STRENGTH;
            btn.style.transform  = 'translate(' + dx + 'px,' + dy + 'px)';
            btn.style.transition = 'transform 0.1s ease-out';
        });
        btn.addEventListener('mouseleave', function() {
            btn.style.transform  = '';
            btn.style.transition = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';
        });
    });

    // ── COMMAND PALETTE ──
    var cmdOverlay = document.getElementById('cmd-palette');
    var cmdInput   = document.getElementById('cmd-input');
    var cmdResults = document.getElementById('cmd-results');
    var cmdChip    = document.getElementById('cmd-chip');
    var cmdActive  = -1;

    var CMD_ITEMS = [
        { label: 'Home',        icon: 'ri-home-4-line',        href: '#scroll-header',    cat: 'Navegar',  ext: false },
        { label: 'About',       icon: 'ri-user-3-line',         href: '#scroll-about',     cat: 'Navegar',  ext: false },
        { label: 'Certs',       icon: 'ri-medal-line',          href: '#scroll-service',   cat: 'Navegar',  ext: false },
        { label: 'Portfolio',   icon: 'ri-briefcase-4-line',    href: '#scroll-portfolio', cat: 'Navegar',  ext: false },
        { label: 'Research',    icon: 'ri-file-paper-2-line',   href: '#scroll-research',  cat: 'Navegar',  ext: false },
        { label: 'Contact',     icon: 'ri-mail-send-line',      href: '#scroll-contact',   cat: 'Navegar',  ext: false },
        { label: 'Download CV', icon: 'ri-download-2-line',     href: 'https://canva.link/vn2hsxk6idgahe2', cat: 'Links', ext: true },
        { label: 'WhatsApp',    icon: 'ri-whatsapp-line',       href: 'https://api.whatsapp.com/send?phone=5583993285838', cat: 'Links', ext: true },
        { label: 'GitHub',      icon: 'ri-github-line',         href: 'https://github.com/JesseChagas', cat: 'Links', ext: true },
        { label: 'LinkedIn',    icon: 'ri-linkedin-box-line',   href: 'https://linkedin.com/in/jessechagas-dev', cat: 'Links', ext: true },
    ];

    function renderCmd(q) {
        var filtered = q
            ? CMD_ITEMS.filter(function(it) { return it.label.toLowerCase().indexOf(q.toLowerCase()) !== -1 || it.cat.toLowerCase().indexOf(q.toLowerCase()) !== -1; })
            : CMD_ITEMS;

        if (!filtered.length) {
            cmdResults.innerHTML = '<div style="padding:28px;text-align:center;color:#2e2e2e;font-size:13px;font-family:Outfit,sans-serif">No results for "<em style=color:#444>' + q + '</em>"</div>';
            cmdActive = -1;
            return;
        }

        var sections = {};
        filtered.forEach(function(it) {
            if (!sections[it.cat]) sections[it.cat] = [];
            sections[it.cat].push(it);
        });

        var html = '';
        Object.keys(sections).forEach(function(sec) {
            html += '<div class="cmd-section-label">' + sec + '</div>';
            sections[sec].forEach(function(it) {
                var ext = it.ext ? ' target="_blank" rel="noopener"' : '';
                html += '<a class="cmd-item" href="' + it.href + '"' + ext + '>' +
                    '<i class="' + it.icon + ' cmd-item-icon"></i>' +
                    '<span class="cmd-item-label">' + it.label + '</span>' +
                    '<span class="cmd-item-category">' + it.cat + '</span>' +
                    '</a>';
            });
        });

        cmdResults.innerHTML = html;
        cmdActive = -1;
        cmdResults.querySelectorAll('.cmd-item').forEach(function(item) {
            item.addEventListener('click', function() { closeCmd(); });
        });
    }

    function getItems() { return cmdResults.querySelectorAll('.cmd-item'); }

    function setActive(idx) {
        var items = getItems();
        items.forEach(function(it) { it.classList.remove('cmd-active'); });
        cmdActive = Math.max(0, Math.min(items.length - 1, idx));
        if (items[cmdActive]) {
            items[cmdActive].classList.add('cmd-active');
            items[cmdActive].scrollIntoView({ block: 'nearest' });
        }
    }

    function openCmd() {
        if (!cmdOverlay) return;
        cmdOverlay.classList.add('open');
        renderCmd('');
        setTimeout(function() { cmdInput && cmdInput.focus(); }, 50);
    }

    function closeCmd() {
        if (!cmdOverlay) return;
        cmdOverlay.classList.remove('open');
        if (cmdInput) cmdInput.value = '';
        cmdActive = -1;
    }

    if (cmdInput) {
        cmdInput.addEventListener('input', function() { renderCmd(cmdInput.value.trim()); });
        cmdInput.addEventListener('keydown', function(e) {
            var items = getItems();
            if (e.key === 'ArrowDown')  { e.preventDefault(); setActive(cmdActive + 1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(cmdActive - 1); }
            else if (e.key === 'Enter') {
                e.preventDefault();
                var active = cmdResults.querySelector('.cmd-active') || items[0];
                if (active) { active.click(); closeCmd(); }
            }
            else if (e.key === 'Escape') { closeCmd(); }
        });
    }

    if (cmdOverlay) {
        cmdOverlay.addEventListener('click', function(e) { if (e.target === cmdOverlay) closeCmd(); });
    }
    if (cmdChip) { cmdChip.addEventListener('click', function(e) { e.preventDefault(); openCmd(); }); }

    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            cmdOverlay && cmdOverlay.classList.contains('open') ? closeCmd() : openCmd();
        }
    });
})();

// ════════════════════════════════════════════
// Custom cursor + skill-bar scroll trigger
// ════════════════════════════════════════════
(function() {
    // ── Custom cursor ──
    var dot  = document.getElementById('cursor-dot');
    var ring = document.getElementById('cursor-ring');
    if (dot && ring) {
        var mx = -200, my = -200;
        var rx = -200, ry = -200;

        document.addEventListener('mousemove', function(e) {
            mx = e.clientX; my = e.clientY;
            dot.style.left = mx + 'px';
            dot.style.top  = my + 'px';
        });

        (function rafLoop() {
            rx += (mx - rx) * 0.14;
            ry += (my - ry) * 0.14;
            ring.style.left = rx + 'px';
            ring.style.top  = ry + 'px';
            requestAnimationFrame(rafLoop);
        })();

        document.querySelectorAll('a, button, .portfolio-item, .cert-card, [class*="-btn"], label, .pub-link').forEach(function(el) {
            el.addEventListener('mouseenter', function() { document.body.classList.add('c-hover'); });
            el.addEventListener('mouseleave', function() { document.body.classList.remove('c-hover'); });
        });
        document.addEventListener('mousedown', function() { document.body.classList.add('c-click'); });
        document.addEventListener('mouseup',   function() { document.body.classList.remove('c-click'); });
    }

    // ── Skill bar scroll trigger ──
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
            trigger: '#skills-grid',
            start: 'top 85%',
            once: true,
            onEnter: function() {
                document.querySelectorAll('.skill-bar-fill').forEach(function(bar) {
                    bar.style.width = (bar.getAttribute('data-w') || 0) + '%';
                });
            }
        });
    }
})();
