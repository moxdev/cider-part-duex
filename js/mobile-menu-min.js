var show_mobile_menu=function(){jQuery(".mobile-menu").hasClass("toggled")?(jQuery(".mobile-menu").removeClass("toggled"),jQuery(this).html("MENU +")):(jQuery(".mobile-menu").addClass("toggled"),jQuery(this).html("MENU -"))};jQuery(".menu-toggle").on("click",show_mobile_menu);