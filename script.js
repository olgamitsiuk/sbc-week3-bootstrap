
$(document).ready(function() {
    // card efect
    $('.product-card').hover(
    function() { $(this).addClass('shadow-lg').css('cursor', 'pointer'); },
    function() { $(this).removeClass('shadow-lg'); }
);
    // add to card button efect
  $('.card-body button:contains("Add to cart")').click(function(e) {
      e.preventDefault();
      $(this).html('<i class="bi bi-check"></i> Added').prop('disabled', true);
      setTimeout(() => {
          $(this).html('Add to cart').prop('disabled', false);
      }, 5000);
    });

    // subscribe button efect
    $('button:contains("Subscribe")').click(function(e) {
      e.preventDefault();
      var email = $(this).prev('input[type="email"]').val();
      if (email) {
          alert('Thank you for subscribing!');
          $(this).prev('input[type="email"]').val('');
      } else {
          alert('Please enter a valid email address.');
      }
    });

    // scroll up button
    var btn = $('<div>', {
    class: 'arrow-icon position-fixed bottom-0 end-0 m-5',
    html: '<i class="fa-solid fa-arrow-up"></i>',
    click: function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    }
    }).appendTo('body').hide();

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.show();
        } else {
            btn.hide();
        }
      });

      // buy now button functionality
      $('.card-body button:contains("Buy now")').click(function(e) {
      e.preventDefault();
      var $button = $(this);
      var productName = $button.closest('.card-body').find('.card-title').text();
      var productPrice = $button.closest('.card-body').find('.fs-4').text();

      setTimeout(function() {
        $('#quickCheckoutForm').submit(function(e) {
                e.preventDefault();
                var name = $('#customerName').val();
                var email = $('#customerEmail').val();

       $('#quickCheckoutForm').submit(function(e) {
                e.preventDefault();
                var name = $('#customerName').val();
                var email = $('#customerEmail').val();

                $('.modal-body').html(`
                    <h4>Thank you for your purchase, ${name}!</h4>
                    <p>We've sent a confirmation email to ${email}.</p>
                    <p>You will receive your order of "${productName}" soon.</p>
                `);
            });
        })
        $('#modalProductName').text(productName);
        $('#modalProductPrice').text(productPrice);

        // Show modal
        var buyNowModal = new bootstrap.Modal(document.getElementById('buyNowModal'));
        buyNowModal.show();

        // Reset button
        $button.removeClass('btn-success').html('Buy now');
    }, 200);         
      })
  })