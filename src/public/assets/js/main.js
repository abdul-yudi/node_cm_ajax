$('#fieldjjmddr, #fieldjjmddy').each(function(){
  $(this).on('blur', function(){
    var fnm = $('#fieldjjmddr').val();
    var lnm = $('#fieldjjmddy').val();
    $('#fieldName').val(fnm +' '+ lnm);
  });

});


$('#subForm').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    "method": "POST",
    "url": 'https://api.createsend.com/api/v3.2/subscribers/43c9ac2da554fa06bd35b6ac5a0fda12',
    "crossDomain": true,
    "contentType": "application/json",
    "dataType": 'json',
    "headers": {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      'apiKey': 'SBRwQ/pZh9drGKQbA/wfizilUw3vx11yFfOxwg4tWau7uccHjPWK4ykNENNcYvCn8dI8x2NDmZb+V13zBbGxngoQwS0aGR3Ydtb+iIosisZRlEfAcLR+SecZuj/JxvpcrphGgxTv7ugg336/Kp8HJw=='
    },
    "data": {
      'name': $('#fieldName').val(),
      'email': $('#fieldEmail').val()
    },
    success: function(data) { 
      $('#subForm').css('display', 'none');
      $('.notif-submit').fadeIn(300);
      console.log(data)
    },
  });
});