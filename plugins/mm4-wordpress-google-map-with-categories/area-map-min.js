function buildMap(e){function t(e){e.addListener("click",function(){infowindow=new google.maps.InfoWindow,null!==currentInfoWindow&&currentInfoWindow.close(),currentInfoWindow=infowindow,infowindow.setContent(e.html),infowindow.open(map,e)})}bounds=new google.maps.LatLngBounds;var a=[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}];map=new google.maps.Map(document.getElementById("map-canvas"),{mapTypeControl:!1,scrollwheel:!1,panControl:!1,rotateControl:!1,streetViewControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},styles:a});for(var n=0;n<e.length;n++){var o=e[n].title.rendered,s=e[n].acf.address,i=e[n].acf.address_2,r=e[n].acf.phone,c=e[n].acf.website,l=e[n].acf.additional_details,d=e[n].acf.latitude,p=e[n].acf.longitude,m="cat-"+e[n].landmark_types[0];o=""!==o?'<strong class="window-heading">'+o+"</strong>":"",s=""!==s?"<br>"+s:"",i=""!==i?"<br>"+i:"",r=""!==r?"<br>"+r:"",c=""!==c?'<br><a target="_blank" href="'+c+'">Website &raquo;</a>':"",l=""!==l?"<br><br>"+l:"",locations.push([n,o,d,p,s,i,r,c,l,m])}for(var u=0;u<locations.length;u++){var g=catIconPath+locations[u][9]+".png",f=new google.maps.Marker({position:new google.maps.LatLng(locations[u][2],locations[u][3]),map:map,icon:g,html:'<strong class="heading">'+locations[u][1]+"</strong>"+locations[u][4]+locations[u][5]+locations[u][6]+locations[u][7]+locations[u][8]});markers.push(f),bounds.extend(f.getPosition()),t(f)}map.fitBounds(bounds)}function buildCats(e,t){function a(e,t){e.addEventListener("click",function(e){e.preventDefault(),infowindow&&infowindow.close();for(var a=this.parentElement.getAttribute("id"),n=0;n<locations.length;n++)locations[n][9]===a?(markers[n].setVisible(!0),markers[n].setOptions({zIndex:1100})):locations[n][9]!==a&&markers[n].setVisible(!1);var o=[];o=t.children;for(var s=0;s<o.length;s++)o[s].firstChild.classList.remove("active");this.classList.add("active"),resetBtn.classList.add("active")})}document.getElementById(t).parentNode.appendChild(catNav,document.getElementById(t));var n=document.createElement("ul");catNav.appendChild(n);for(var o=0;o<e.length;o++){var s=document.createElement("li");s.id="cat-"+e[o].id,s.classList.add(e[o].slug);var i=document.createElement("a");i.href="#",i.innerText=e[o].name,s.appendChild(i),n.appendChild(s),a(i,n)}}function initMap(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status?(landmarksObj=JSON.parse(t.responseText),document.getElementById("map-canvas").innerHTML="",buildMap(landmarksObj)):document.getElementById("map-canvas").innerHTML="Error Loading Data"},t.overrideMimeType("application/json"),t.open("GET",e,!0),t.send(),document.getElementById("map-canvas").innerHTML="Loading map..."}function initCats(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&200===t.status&&(catsObj=JSON.parse(t.responseText),buildCats(catsObj,myMap))},t.overrideMimeType("application/json"),t.open("GET",e,!0),t.send()}function callback(){initMap(markersFeed),!0===addCats&&initCats(catsFeed)}function resetMap(e,t){for(var a=0;a<locations.length;a++)markers[a].setVisible(!0);e.fitBounds(bounds),infowindow&&infowindow.close();for(var n=catNav.children[0].childNodes,o=0;o<n.length;o++)n[o].firstChild.classList.remove("active");t.classList.remove("active")}var myMap="map-canvas",apiKey="AIzaSyDqcS80RSqBcZepAEhhxKHkSzYLZeNI0Ho",markersFeed="http://localhost:8888/cider/wp-json/wp/v2/area_landmarks/?filter[posts_per_page]=-1",addCats=!0,catsFeed="http://localhost:8888/cider/wp-json/wp/v2/landmark_types",catIconPath="http://localhost:8888/cider/wp-content/themes/cider_mill/imgs/",map,bounds,infowindow,currentInfoWindow=null,landmarksObj,catsObj,markers=[],locations=[],resetBtn=document.getElementById("reset-map");document.addEventListener("DOMContentLoaded",function(){if(document.getElementById(myMap)){var e;e=document.querySelector("html").lang?document.querySelector("html").lang:"en";var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?key="+apiKey+"&callback=callback&language="+e,document.getElementsByTagName("body")[0].appendChild(t)}});var catNav=document.createElement("nav");catNav.id="map-nav",resetBtn.addEventListener("click",function(){resetMap(map,this)});