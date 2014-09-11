if ("undefined" == typeof(XULSchoolChrome)) {
  var XULSchoolChrome = {};
};

XULSchoolChrome.BrowserOverlay = {};

var appcontent = document.getElementById("appcontent");  // locate browser

if (appcontent) appcontent.addEventListener("load", function (e) { pageLoad(e); }, true);
  
  
function pageLoad(event) {
   if (event.originalTarget instanceof HTMLDocument) {
   var ct3, doc, fc, shtml, limg, x;
      doc = event.originalTarget;
      shtml = doc.documentElement.innerHTML;
	  fc = false;
	  
      var e00 = /\Wchild/i;
	  var e01 = /\Wpre-?teen/i;
	  var e12 = /\Wnude/i;
	  var e13 = /\Wsex/i;
	  if ((e00.test(shtml)||e01.test()) && (e12.test(shtml)||e13.test(shtml))) 
      {
	    fc = true;
        //alert("pedocensor for this site!");
      }
	  var e20 = /toddler-?con/i;
	  var e21 = /loli-?con/i;
	 
	  if (!fc&&(e20.test(shtml)||e21.test(shtml))) {
	    fc = true;
	     //alert("lolicensor for this site!");
      }
	
      limg = doc.getElementsByTagName("img");
	  for (var x = 0;x <= limg.length;x++){
			var s = limg[x].alt+limg[x].src;
			
			
			var e31 = /loli/i;
			if (fc||e31.test(s)){
				if ((limg[x].clientWidth>96)||(limg[x].clientHeight>96)) {
					limg[x].style.border = "2px solid red";
					limg[x].style.boxShadow = "0px 0px 4px red";
					limg[x].src = "null";
					limg[x].id = "noId";
					limg[x].className = "noClass";	
					}
			}
		}
		if (fc){
		limg = doc.getElementsByTagName("embed");
		for (var x = 0;x <= limg.length;x++){
			var s = limg[x].alt+limg[x].src;
					limg[x].style.border = "2px solid red";
					limg[x].style.boxShadow = "0px 0px 4px red";
					limg[x].src = "null";
					limg[x].id = "noId";
					limg[x].className = "noClass";	
			}
		}
	}
}




