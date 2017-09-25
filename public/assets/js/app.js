function updateDevoured () {
  var currentId = $(this).val();

  $.ajax({
    method: "PUT",
    url: "/" + currentId,
    success: function (res) {
    }
  });
};

$(document).ready(function () {
  $(document).on("click", ".burgerAvailable", updateDevoured);
});
