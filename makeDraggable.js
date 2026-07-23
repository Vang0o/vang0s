
function dragElement(element) {
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;
        
    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }
    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
  
        // Capture original mouse coordinates
        initialX = e.clientX;
        initialY = e.clientY;
          
        document.onmouseup = stopDragging;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
          
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        
        initialX = e.clientX;
        initialY = e.clientY;
        
        // Apply the new position to the element
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }
    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

