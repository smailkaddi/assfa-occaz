$(document).ready(function() {
    // alert($(window).width());
    $('#block-filter .collapse').collapse("show");

    var showMenu = true;
    var showFilter = true;
    var showForm = true;
    $("#menu-toggle").click(function() {
        if(showMenu == true) {
            $(".menu-container").addClass("show");
            $(".menu-icon").addClass("close-icon");
            $("#fixed-header").addClass("menu-shwd");
            $("#fixed-logo").addClass("fixed-logo");
            $("#fixed-logo1").addClass("fixed-logo");
            $("#icon").addClass("fixed-logo");
            
            $("section:not('.header'), footer").fadeOut(500);
          
        }else {
            $(".menu-container").removeClass("show");
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
            $("#no,.d-deals .body, footer").fadeOut(500);
        }else {
            $(".deals-form").removeClass("show");
            $(" #no,.d-deals .body, footer").fadeIn(500);
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

    // $("#menu-toggle").click(function () {
    //     $("nav").toggleClass("bg-dark");
    //     })

        
        // $("#menu-toggle").click(function () {
        //     $("nav-fil").toggleClass("bg-dark");
        //     })
    
       
        
});
window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
  })