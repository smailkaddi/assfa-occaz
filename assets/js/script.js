$(document).ready(function() {
    // alert($(window).width());
    $('#block-filter .collapse').collapse("show");

    var showMenu = true;
    var showFilter = true;
    var showForm = true;
    $("#menu-toggle").click(function() {
        if(showMenu == true) {
            $(".menu-container").addClass("show");
            $(".menu-iconhome").addClass("close-icon");
            $(".menu-icon").addClass("close-icon");
            $("#fixed-header").addClass("menu-shwd");
            $("#fixed-logo").addClass("fixed-logo");
            $("#fixed-logo1").addClass("fixed-logo");
            $("#icon").addClass("fixed-logo");
            
            $("section:not('.header'), footer").fadeOut(500);
          
        }else {
            $(".menu-container").removeClass("show");
            $(".menu-iconhome").removeClass("close-icon");
            $(".menu-icon").removeClass("close-icon");
            $("#fixed-header").removeClass("menu-shwd");
            $("#fixed-logo").removeClass("fixed-logo");
            $("#fixed-logo1").removeClass("fixed-logo");
            
            $("section:not('.header'), footer").fadeIn(500);
        }
        showMenu = !showMenu;
        
    });
    
    $(".filter-toggler").click(function() {
        if(showFilter == true) {
            $("#block-filter").addClass("show");
            $(".block-resultat, footer").fadeOut(500);
        }else {
            $("#block-filter").removeClass("show");
            $(".block-resultat, footer").fadeIn(500);
        }
        showFilter = !showFilter;
        
    });

    $(".form-toggler").click(function() {
        if(showForm == true) {
            $(".deals-form").addClass("show");
            $(".d-deals .body, footer").fadeOut(500);
        }else {
            $(".deals-form").removeClass("show");
            $(".d-deals .body, footer").fadeIn(500);
        }
        showForm = !showForm;
        
    });

    $("li[data-target='#dealsCarousel']").click(function(){
        $("li[data-target='#dealsCarousel']").removeClass("active");
        $(this).addClass("active");
    });

   
    // $("#homeCarousel .carousel-item.active").
    $("#to-deal").click(function(event) {
        event.preventDefault();
        var lien = $("#homeCarousel .carousel-item.active").attr("id");
        window.location.href = lien;
        // alert(lien);
    })

   
   
});
$(window).scroll(function(){
    if($(this).scrollTop()>0) {
        $('#header img').attr('src','../../assets/images/logo2.png');
        $('#offres').attr('style','color:#008F70');
        $('#border').attr('style','border-left: 1px solid #008F70')
         $('#menu-icon').addClass('add')
        //  ::::::::::::::::::::::::::::::::::::::::::::::::::::
         $('#lang1').addClass('lang-dropdown')

       
         
    }
    else {
        $('#header img').attr('src','../../assets/images/logo.svg');
        $('#offres').attr('style','color:008F70');
        $('#border').attr('style','border-left: 1px solid withe')

    
        $('#menu-icon').removeClass('add')
// /::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        $('#lang1').removeClass('lang-dropdown')

     
    }
})
window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
  })