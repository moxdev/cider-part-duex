function hasClass(e,s){return e.className&&new RegExp("(\\s|^)"+s+"(\\s|$)").test(e.className)}function viewFloorplans(){var e=document.getElementsByClassName("hidden"),s=document.getElementsByClassName("fp-models-wrapper");hasClass(e,"hidden")?alert("yeah buddy!"):alert("Not today my friend")}for(var viewBtns=document.querySelectorAll(".view-btn"),i=0;i<viewBtns.length;i++)viewBtns[i].addEventListener("click",viewFloorplans);