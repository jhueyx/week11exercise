// 5 In jQuery: make the image element appear and disappear when you click the corresponding button.

$("#hide").click(function() {
	$("#dog").hide(); 
	});

$("#show").click(function() {
	$("#dog").show()
	});


// 6 Create a third button which does the work of BOTH the previous buttons (i.e. when the image is visible and you click the button, the image disppears; when the image is not visible and you click the button, the image reappears). Open your inspector and notice HOW the image is being hidden/unhidden.

$("#toggle").click(function() {
    $("#dog").toggle();
  });

//9. Create a fourth button which toggles this new "fade" class on and off for the image element when clicked.

$("#fade").click(function() {
    $("#dog").toggleClass("fade");
        // Bonus #2
      if( $("img").css("opacity") == '0') {
        $("#changer").text("Goodbye");
      } else {
        $("#changer").text("Hello");
      }
       });
 

//10. In jQuery: make the image change to a different image on hover (think about what HTML attribute commands the content of an image element).

//bonus 3. In #10 above, you made the image change to a new image on hover. Now can you make it change BACK when you exit the hover (when you move your mouse off of the image element)?


$("#dog").hover(function(){
	$("img").attr("src", "http://cdn2-www.dogtime.com/assets/uploads/2017/02/dog-sleep-habits-4.jpg")
  }, 
  /*Bonus #3 */
  function() {
    $("img").attr("src", "https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d");
  });

// 12. In jQuery: when this button is clicked, add a new list-item with some text content to this unordered list.

$("#addme").click(function(){
	$("#list").append("<li>Good Evening</li>");
//In jQuery: cause each list-item to change color, font-size, and font-family on hover (HINT: you might need to do a double-take on this one, if ALL of your list-items are changing when you hover on any ONE of them, you'll need to think carefully about how to make sure only this one which you're hovering over will change). Don't forget to make them change BACK when you exit the hover.
      // Bonus #4
      $("li").hover(function() {
        $(this).css({"font-size" : "40px", "color": "white"})
      }, function() {
        $(this).css({"font-size" : "initial", "color": "initial"})
      })


});


// 13. In jQuery: when this button is clicked, cause an element to render with a red background, which covers your entire window and all of the elements on your page. Make sure that if you try to scroll, you can still see nothing but the red background.

$("#help").click(function() {
	$("body").append("<div id='cover'></div>");
});