$("document").ready(function(){

    // Hides text below actor names
	$(".sub-blurb").hide();
	

//**Event Listeners**
	$("document").ready(main);

    $(".blurb").click(toggleImage);

    $("nav li:first-of-type").click(openMenu);


//**Functions**
	function main(){
        event.preventDefault();
		// Hides all h2 & h4 headers at startup
		$("h2").hide();
		$("h4").hide();
		// Fades all h2 & h4 headers in
		$("h2").fadeIn(2000);
		$("h4").fadeIn(2000);
	}

    function toggleImage(){
        event.preventDefault();
    	// Hides all .sub-blurbs
    	$(".sub-blurb").hide();

    	// Removes class "toggle" of all .blurb's
    	$(".blurb").removeClass("toggle");

    	// Selects current h2 and adds "toggle" class
        $(this).toggleClass("toggle");

        // Selects current h2 and finds closest following ".sub-blurb"
        $(this).find(".sub-blurb").show();
    }

    function openMenu(){
        event.preventDefault();
        $(this).parent().toggleClass("open");
        $(".icon").hide();
        $(".navi").show();
    }

})