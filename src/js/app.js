$(document).ready(function() {
  $('#addTask').on('submit', function(e) {
    e.preventDefault();
    var input = $('#inputForm').val();
    $('#list').append('<li>' + input + '<button type="button">' + 'x' + '</button></li>');
    $('#inputForm').val('');
    $('#inputForm').focus();
  });
  $('#listDiv').on('click', 'button', function(e) {
    e.preventDefault();
    $(this).parent().remove();
  })
});
