
$(document).ready(function() {
  console.log("jQuery is ready!");

  // Task 1
  $("#btnChange").click(function() {
    $("#idText").text("Text has been changed!");
    $(".classText").html("<b>Modified HTML!</b>");
    $("p").css("color", "blue");
  });

  // Task 2
  $("#btnHide").click(() => $("#textToHide").hide());
  $("#btnShow").click(() => $("#textToHide").show());
  $("#btnToggle").click(() => $("#textToHide").toggle());

  // Task 3
  $("#btnFadeIn").click(() => $("#fadeImg").fadeIn());
  $("#btnFadeOut").click(() => $("#fadeImg").fadeOut());
  $("#btnFadeToggle").click(() => $("#fadeImg").fadeToggle());

  // Task 4
  $("#btnSlide").click(() => $("#panel").slideToggle());

  // Task 5
  $("#btnAdd").click(() => $("#myList").append("<li>New element</li>"));
  $("#btnRemove").click(() => $("#myList li:last-child").remove());

  // Task 6
  $("#btnChangeImg").click(() => $("#changeImg").attr("src", "https://via.placeholder.com/150/ff0000"));
  $("#btnChangeLink").click(() => {
    $("#myLink")
      .attr("href", "https://wikipedia.org")
      .text("Wikipedia");
  });

  // Task 7
  $("#name, #email").on("input", function() {
    const name = $("#name").val();
    const email = $("#email").val();
    $("#output").text(`Name: ${name}, Email: ${email}`);
  });

  // Task 8–10
  $("#btnBasic").click(() => {
    $("#box").animate({ left: "200px", height: "150px", width: "150px" }, 1000);
  });

  $("#btnSeq").click(() => {
    $("#box")
      .animate({ left: "200px" }, 500)
      .animate({ top: "100px" }, 500)
      .animate({ width: "50px", height: "50px" }, 500)
      .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 500);
  });

  $("#btnCombo").click(() => {
    $("#box").animate({
      left: "150px",
      opacity: 0.5,
      width: "120px",
      height: "120px"
    }, 1000);
  });

  // Task 11
  $(".header").click(function() {
    $(this).next(".content").slideToggle();
    $(".content").not($(this).next()).slideUp();
  });
});
