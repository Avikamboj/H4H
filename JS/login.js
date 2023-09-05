$(document).ready(function() {
    const emoji = $(".emoji");
    const password = $("#pass");
  
    emoji.click(function() {
      if (password.attr("type") === "password") {
        password.attr("type", "text");
        emoji.text("🙂");
      } else {
        password.attr("type", "password");
        emoji.text("😎");
      }
    });
  });
  
