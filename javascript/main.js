$(document).ready(function(){
  //wait for document to load
  //log
  console.log('Document Ready!');

  //click on the hamburger
  $('.fa-bars').click(function(){
    console.log('hamburger clicked!');
    //Show mobile navigation

    //change visibility
    $('#mobile-nav').css({
      visibility:"visible"
    });
  });

  // close the mobile navigation
  $('.fa-times').click(function(){
    console.log('x clicked!');
    $('#mobile-nav').css({
      visibility: "hidden"
    });
  });
});
