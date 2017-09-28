function updateDevoured () {
  var currentId = $(this).val();

  $.ajax({
    method: "PUT",
    url: "/" + currentId,
    success: function (res) {
      window.location = location.pathname;
    }
  });
};

$(document).ready(function () {
  $(document).on("click", ".burgerAvailable", updateDevoured);
});
