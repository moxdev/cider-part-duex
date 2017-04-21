var viewBtns = document.querySelectorAll('.view-btn');

for(var i = 0; i < viewBtns.length; i++) {
    viewBtns[i].addEventListener("click", viewFloorplans);
}

// hasClass, takes two params: element and classname
function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function viewFloorplans() {

    var hidden = document.getElementsByClassName("hidden");
    var fpWrapper = document.getElementsByClassName("fp-models-wrapper");

    if (hasClass(hidden, "hidden")) {
        alert("yeah buddy!");
    } else {
        alert("Not today my friend");
    }
}






// var accordion_expand = function() {
//     var parent = jQuery(this).parent();

//     if(jQuery(this).hasClass('active')) {
//         jQuery(parent).children().not('.btn, .accordion-header').css('display', 'none');
//         jQuery(this).removeClass('active');
//         jQuery(this).text('Read Full Bio');
//     } else {
//         jQuery(parent).children().css('display', 'block');
//         jQuery(this).addClass('active');
//         jQuery(this).text('Read Less');
//     }
// };

// jQuery('.accordion .show-less').on('click', accordion_expand);

// jQuery('#custom-archive-widget span.select, #custom-category-widget > span.select').on('click', function() {
//     if(jQuery(this).hasClass('active')) {
//         jQuery(this).removeClass('active');
//         jQuery(this).next().css('display', 'none');
//     } else {
//         jQuery(this).addClass('active');
//         jQuery(this).next().css('display', 'block');
//     }
// });

// // hasClass, takes two params: element and classname
// function hasClass(el, cls) {
//   return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
// }


// /* use like below */
// // Check if an element has class "foo"
// if (hasClass(element, "foo")) {

//   // Show an alert message if it does
//   alert("Element has the class!");
// }






