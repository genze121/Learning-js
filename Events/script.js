/* Approach - 1 */
function clicked() {
  alert("Approach 1");
}
/* Approach - 2 */
document.getElementById("first").onclick = function() {
  alert("Approach 1");
};
/* Approach - 3 Recommended approach because add event listener is mostly used*/
const firstImage = document.querySelector("#first");
firstImage.addEventListener("click", e => {
  alert("Approach 1");
});

/* Notes :- Types of functions present in event
         1) type, timeStamp, defaultPrevented
         2) target, toElement, srcElement, currentTarget
         3) clientX, clientY, screenX, screenY
         4) altKey, ctrlKey, shiftKey, keyCode */

/* Event Propagation - Event bubbling ==> propagates from child to parent like li to ul in this case. 
In order to stop propagation we use stopPropagation() to stop event bubbling 
capturing also can be used by making it to true, capturing basically captures the parent and then the child.
*/

document.querySelector(".parent").addEventListener(
  "click",
  function(e) {
    console.log("Clicked inside UL !!");
  },
  false
);

document.getElementById("first").addEventListener(
  "click",
  function(e) {
    console.log("First Clicked !!");
    e.stopPropagation(); // to stop the bubbling, the event will not bubble to the parent.
  },
  true
);

document.getElementById("google").addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    console.log("Google Clicked !!");
    e.stopPropagation();
  },
  false
);

// Practicing with example - Removing images

document.querySelector(".parent").addEventListener(
  "click",
  function(e) {
    if (e.target.tagName === "IMG") {
      const removeIt = e.target.parentNode;
      removeIt.remove();
      console.log(removeIt);
    }
  },
  false
);
