function buildMap(e,t){function n(e,t){commMarker=new google.maps.Marker({position:{lat:e,lng:t},map:map,zIndex:1e3,icon:iconPath+"static-comm-marker.png"})}function a(e){e.addListener("click",function(){infowindow=new google.maps.InfoWindow,null!==currentInfoWindow&&currentInfoWindow.close(),currentInfoWindow=infowindow,infowindow.setContent(e.html),infowindow.open(map,e)})}if(bounds=new google.maps.LatLngBounds,addCommMarker){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var e=JSON.parse(o.responseText);n(Number(e.acf.latitude),Number(e.acf.longitude))}},o.open("GET",t,!0),o.send()}var i=[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]}];map=new google.maps.Map(document.getElementById("map-canvas"),{mapTypeControl:!1,scrollwheel:!1,panControl:!1,rotateControl:!1,streetViewControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},styles:i});for(var s=0;s<e.length;s++){var r=e[s].title.rendered,l=e[s].acf.address,c=e[s].acf.address_2,d=e[s].acf.phone,u=e[s].acf.website,m=e[s].acf.additional_details,f=e[s].acf.latitude,p=e[s].acf.longitude,g="cat-"+e[s].landmark_types[0];r=""!==r?'<strong class="window-heading">'+r+"</strong>":"",l=""!==l?"<br>"+l:"",c=""!==c?"<br>"+c:"",d=""!==d?"<br>"+d:"",u=""!==u?'<br><a target="_blank" href="'+u+'">Website &raquo;</a>':"",m=""!==m?"<br><br>"+m:"",locations.push([s,r,f,p,l,c,d,u,m,g])}for(var v=0;v<locations.length;v++){var h=iconPath+locations[v][9]+".png",y=new google.maps.Marker({position:new google.maps.LatLng(locations[v][2],locations[v][3]),map:map,icon:h,html:'<strong class="heading">'+locations[v][1]+"</strong>"+locations[v][4]+locations[v][5]+locations[v][6]+locations[v][7]+locations[v][8]});markers.push(y),bounds.extend(y.getPosition()),a(y)}map.fitBounds(bounds)}function buildCats(e,t){function n(e,t){e.addEventListener("click",function(e){e.preventDefault(),infowindow&&infowindow.close();for(var n=this.parentElement.getAttribute("id"),a=0;a<locations.length;a++)locations[a][9]===n?(markers[a].setVisible(!0),markers[a].setOptions({zIndex:1100})):locations[a][9]!==n&&markers[a].setVisible(!1);var o=[];o=t.children;for(var i=0;i<o.length;i++)o[i].firstChild.classList.remove("active");this.classList.add("active"),resetBtn.classList.add("active")})}document.getElementById(t).parentNode.appendChild(catNav,document.getElementById(t));var a=document.createElement("ul");catNav.appendChild(a);for(var o=0;o<e.length;o++)if(e[o].count>0){var i=document.createElement("li");i.id="cat-"+e[o].id,i.classList.add(e[o].slug);var s=document.createElement("a");s.href="#",s.innerHTML=catCount?'<span class="count">'+e[o].count+"</span>"+e[o].name:e[o].name,i.appendChild(s),a.appendChild(i),n(s,a)}}function initMap(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status?(landmarksObj=JSON.parse(t.responseText),document.getElementById("map-canvas").innerHTML="",buildMap(landmarksObj,locationOptionsFeed)):document.getElementById("map-canvas").innerHTML="Error Loading Data"},t.open("GET",e,!0),t.send(),document.getElementById("map-canvas").innerHTML="Loading map..."}function initCats(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status&&(catsObj=JSON.parse(t.responseText),buildCats(catsObj,myMap))},t.open("GET",e,!0),t.send()}function callback(){initMap(markersFeed),addCats&&initCats(catsFeed)}function resetMap(e,t){for(var n=0;n<locations.length;n++)markers[n].setVisible(!0);e.fitBounds(bounds),infowindow&&infowindow.close();for(var a=catNav.children[0].childNodes,o=0;o<a.length;o++)a[o].firstChild.classList.remove("active");t.classList.remove("active")}function viewImage(){this.parentNode.classList.add(activeClass)}function hideImage(){this.parentNode.classList.remove(activeClass)}var myMap="map-canvas",apiKey="AIzaSyDqcS80RSqBcZepAEhhxKHkSzYLZeNI0Ho",markersFeed="/wp-json/wp/v2/area_landmarks?per_page=100",addCats=!0,catCount=!1,catsFeed="/wp-json/wp/v2/landmark_types",addCommMarker=!0,locationOptionsFeed="/wp-json/acf/v2/options",iconPath="/wp-content/themes/cider_mill/imgs/",map,commMarker,bounds,infowindow,currentInfoWindow=null,landmarksObj,catsObj,markers=[],locations=[],resetBtn=document.getElementById("reset-map");document.addEventListener("DOMContentLoaded",function(){if(document.getElementById(myMap)){var e;e=document.querySelector("html").lang?document.querySelector("html").lang:"en";var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?key="+apiKey+"&callback=callback&language="+e,document.getElementsByTagName("body")[0].appendChild(t)}});var catNav=document.createElement("nav");catNav.id="map-nav",resetBtn.addEventListener("click",function(){resetMap(map,this)}),function(e){e(window).load(function(){e(".flexslider").flexslider({animation:"fade",directionNav:!1,animationLoop:!0})})}(jQuery),function(e){wp.customize("blogname",function(t){t.bind(function(t){e(".site-title a").text(t)})}),wp.customize("blogdescription",function(t){t.bind(function(t){e(".site-description").text(t)})}),wp.customize("header_textcolor",function(t){t.bind(function(t){"blank"===t?e(".site-title a, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):(e(".site-title a, .site-description").css({clip:"auto",position:"relative"}),e(".site-title a, .site-description").css({color:t}))})})}(jQuery);for(var activeClass="active",viewBtns=document.querySelectorAll(".view"),closeBtns=document.querySelectorAll(".close"),i=0;i<viewBtns.length;i++)viewBtns[i].addEventListener("click",viewImage);for(var j=0;j<closeBtns.length;j++)closeBtns[j].addEventListener("click",hideImage);jQuery(window).load(function(){jQuery(".view-btn").click(function(){jQuery(this).hasClass("view")?(jQuery(".fp-models-wrapper").slideToggle("slow"),jQuery(".view-btn").text("hide floor plans")):jQuery(".fp-models-wrapper").slideToggle("slow")})}),jQuery(window).load(function(){var e=function(){jQuery('<div id="imagelightbox-loading"><div></div></div>').appendTo("body")};activityIndicatorOff=function(){jQuery("#imagelightbox-loading").remove()},overlayOn=function(){jQuery('<div id="imagelightbox-overlay"></div>').appendTo("body")},overlayOff=function(){jQuery("#imagelightbox-overlay").remove()},closeButtonOnPlans=function(e){jQuery('<div class="wrapper"><button type="button" id="imagelightbox-close" title="Close">&lt; Return to Floor Plans</button></div>').appendTo("#imagelightbox-overlay").on("click touchend",function(){return jQuery(this).remove(),e.quitImageLightbox(),!1})},closeButtonOnGallery=function(e){jQuery('<div class="wrapper"><button type="button" id="imagelightbox-close" title="Close">&lt; Return to Gallery</button></div>').appendTo("#imagelightbox-overlay").on("click touchend",function(){return jQuery(this).remove(),e.quitImageLightbox(),!1})},closeButtonOff=function(){jQuery("#imagelightbox-close").remove()},captionOn=function(){var e=jQuery('a[href="'+jQuery("#imagelightbox").attr("src")+'"] img').attr("description");e.length>0&&jQuery('<div id="imagelightbox-caption">'+e+"</div>").appendTo("body")},captionOff=function(){jQuery("#imagelightbox-caption").remove()},arrowsOn=function(e,t){var n=jQuery('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left">&lt;</button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right">&gt;</button>');n.appendTo("body"),n.on("click touchend",function(n){n.preventDefault();var a=jQuery(this),o=jQuery(t+'[href="'+jQuery("#imagelightbox").attr("src")+'"]'),i=o.index(t);return a.hasClass("imagelightbox-arrow-left")?(i-=1,jQuery(t).eq(i).length||(i=jQuery(t).length)):(i+=1,jQuery(t).eq(i).length||(i=0)),e.switchImageLightbox(i),!1})},arrowsOff=function(){jQuery(".imagelightbox-arrow").remove()};var t='a[data-imagelightbox="c"]',n=jQuery('a[data-imagelightbox="c"]').imageLightbox({onLoadStart:function(){e(),captionOff()},onLoadEnd:function(){activityIndicatorOff(),captionOn()},onStart:function(){overlayOn(),closeButtonOnPlans(n),arrowsOn(n,'a[data-imagelightbox="c"]')},onEnd:function(){overlayOff(),captionOff(),closeButtonOff(),arrowsOff()}}),a='a[data-imagelightbox="a"]',o=jQuery('a[data-imagelightbox="a"]').imageLightbox({onLoadStart:function(){e(),captionOff()},onLoadEnd:function(){activityIndicatorOff(),captionOn()},onStart:function(){overlayOn(),closeButtonOnGallery(o),arrowsOn(o,'a[data-imagelightbox="a"]')},onEnd:function(){overlayOff(),captionOff(),closeButtonOff(),arrowsOff()}})}),function(){function e(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}var t,n,a,o,i,s,r;if((t=document.getElementById("site-navigation"))&&void 0!==(n=t.getElementsByTagName("button")[0])){if(void 0===(a=t.getElementsByTagName("ul")[0]))return void(n.style.display="none");for(a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),n.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),n.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false")):(t.className+=" toggled",n.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))},o=a.getElementsByTagName("a"),i=a.getElementsByTagName("ul"),s=0,r=i.length;s<r;s++)i[s].parentNode.setAttribute("aria-haspopup","true");for(s=0,r=o.length;s<r;s++)o[s].addEventListener("focus",e,!0),o[s].addEventListener("blur",e,!0);!function(e){var t,n,a=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t,n=this.parentNode;if(n.classList.contains("focus"))n.classList.remove("focus");else{for(e.preventDefault(),t=0;t<n.parentNode.children.length;++t)n!==n.parentNode.children[t]&&n.parentNode.children[t].classList.remove("focus");n.classList.add("focus")}},n=0;n<a.length;++n)a[n].addEventListener("touchstart",t,!1)}(t)}}(),function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}();