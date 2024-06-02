$(document).ready(function () {
    $(".image").hover(
      function () {
        $(this).find(".hover-overlay").fadeIn();
      },
      function () {
        $(this).find(".hover-overlay").fadeOut();
      }
    );
    $("#contactForm").on("submit", function (event) {
      event.preventDefault();
      alert("Form submitted successfully!");
      $("#contactModal").modal("hide");
    });

    $(".project-content").click(function () {
      var imageUrl = $(this).data("image");
      $("#project-image").attr("src", imageUrl);
    });

    $('#contactBtn').on('click', function () {
    $('#contactModal').modal('show');
});

$('#contactForm').on('submit', function (e) {
    e.preventDefault();
    
    // Validate form
    var isValid = true;
    $('#contactForm input').each(function() {
        if ($(this).val() === '' && $(this).prop('required')) {
            isValid = false;
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });
    
    if (isValid) {
        // Submit form via AJAX
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize(),
            success: function (response) {
                alert('Form submitted successfully!');
                $('#contactModal').modal('hide');
                $('#contactForm')[0].reset();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('An error occurred while submitting the form. Please try again.');
            }
        });
    }
});
  });