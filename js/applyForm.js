   
/*
------------------------------------------------------------
Function to activate form button to open the sliderone.
------------------------------------------------------------
*/
function open_panel() {
    slideIt();
    var a = document.getElementById("sidebartow");
    a.setAttribute("id", "sidebartow");
    a.setAttribute("onclick", "close_panel()");
    }
    /*
    ------------------------------------------------------------
    Function to slide the sidebartow form (open form)
    ------------------------------------------------------------
    */
    function slideIt() {
    var slidingDiv = document.getElementById("sliderone");
    var stopPosition = 0;
    if (parseInt(slidingDiv.style.right) < stopPosition) {
    slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
    setTimeout(slideIt, 1);
    }
    }
    /*
    ------------------------------------------------------------
    Function to activate form button to close the sliderone.
    ------------------------------------------------------------
    */
    function close_panel() {
    slideIn();
    a = document.getElementById("sidebartow");
    a.setAttribute("id", "sidebartow");
    a.setAttribute("onclick", "open_panel()");
    }
    /*
    ------------------------------------------------------------
    Function to slide the sidebartow form (slide in form)
    ------------------------------------------------------------
    */
    function slideIn() {
    var slidingDiv = document.getElementById("sliderone");
    var stopPosition = -342;
    if (parseInt(slidingDiv.style.right) > stopPosition) {
    slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
    setTimeout(slideIn, 1);
    }
    }
    