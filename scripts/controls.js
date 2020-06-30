$(document).ready(function () {

  $("#10x10").click(function () {
    w = 60;
    resetValues();
  })
  $("#20x20").click(function () {
    w = 30;
    resetValues();
  })

  $("#40x40").click(function () {
    w = 15;
    resetValues();
  })


  $("#slow").click(function () {
    console.log('frame rate changed to 5')
    fRate = 8;
    resetValues();
  })
  $("#medium").click(function () {
    console.log('frame rate changed to 25')
    fRate = 25;
    resetValues();
  })
  $("#fast").click(function () {
    console.log('frame rate changed to 50')
    fRate = 50;
    resetValues();
  })

  $("#main-btn").click(function () {
    if (starter == false) {
      clear();
      loop();
      starter = !starter
      $('#main-btn').html('reset')
    } else if (starter == true) {
      resetValues()
    }
  })




  $("#sketch-holder").animate({
      opacity: 0
    },
    500,
    function () {
      $(this).animate({
        opacity: 1
      }, 200);
    }
  );


});