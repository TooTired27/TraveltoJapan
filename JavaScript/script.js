function toggleMenu() {
      const nav = document.getElementById('navbar'); // Gets the navigation bar
      nav.classList.toggle('collapsed'); // Adds or removes the 'collapsed' class
}
$(document).ready(function () {
  const placePrices = {
    'Tokyo': 35000,
    'Kyoto': 30000,
    'Osaka': 32000,
    'Nara': 31000,
    'Sapporo': 36000
  };

  // Show the form when "Yes" is clicked
  $('.btn1').eq(0).on('click', function () {
    $('#startQuestion').hide();
    $('#travelForm').show();
  });

  // Show thank-you message when "No" is clicked
  $('.btn1').eq(1).on('click', function () {
    $('#startQuestion').html('<h2>Thank you for visiting Sakura Trails. Have a lovely day!</h2>');
  });

  // Handle quote calculation
  $('.btn1').last().on('click', function () {
    const email = $('#email').val();

    // Validate email
    if (email.indexOf("@") === -1) {
      $('#emailError').text("Please enter a valid email address.");
      return;
    } else {
      $('#emailError').text("");
    }

    const people = parseInt($('#people').val());

    // Validate number of people
    if (isNaN(people)) {
      alert("Please enter a valid number for people travelling.");
      return;
    } else if (people < 1 || people > 5) {
      alert("Please enter a number between 1 and 5 for people travelling.");
      return;
    }
    const destination = $("input[name='package']:checked").val();
    const month = $('#month').val();
       // Validate destination and month
        if (!destination || !month) {
          alert("Please select your destination and travel month.");
          return;
        }
         // Calculate total cost
        let total = placePrices[destination] * people;
        const essentials = $('.essentials:checked').length;
        total += essentials * 500 * people;

$('#quoteResult').html("Thank you! Your estimated quote is <strong>R" + total + "</strong>. We will be in touch via email.");
  });
});

      
