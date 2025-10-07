/*Name this external file gallery.js*/

function loaded(){
    var imageText="";
    console.log("The page is fully loaded");
    imageText = document.querySelector("#imageText1");
    imageText.innerHTML = "Document loaded";
    addTabIndex();
}

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image

    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  
        console.log(previewPic.src);
        console.log(previewPic.alt);
        document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
        document.getElementById('imageText1').innerHTML = "";
        document.getElementById('imageText2').innerHTML = previewPic.alt;
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	
        document.getElementById('image').style.backgroundImage = "url('')";
        document.getElementById('imageText1').innerHTML = "";
        document.getElementById('imageText2').innerHTML = "Hover over an image below to display here.";

	}

    function addTabIndex(){
        var images = document.querySelectorAll('.preview');
        for(var i=0; i<images.length; i++){
            console.log("IMG" + i + " --> tabindex=0");
            images[i].setAttribute("tabindex", 0);
        }
    }