/* Modal 1 */
$("#btn_modal_proyecto_1").on("click", function () {
  $("#ventana_modal_proyecto_1").modal("show");
});

$("#ventana_modal_proyecto_1").on("hidden.bs.modal", function () {
  const iframe = $("#video_proyecto_1");
  const src = iframe.attr("src");
  iframe.attr("src", "");
  iframe.attr("src", src);
});

/* Modal 2 */
$("#btn_modal_proyecto_2").on("click", function () {
  $("#ventana_modal_proyecto_2").modal("show");
});

$("#ventana_modal_proyecto_2").on("hidden.bs.modal", function () {
  const iframe = $("#video_proyecto_2");
  const src = iframe.attr("src");
  iframe.attr("src", "");
  iframe.attr("src", src);
});

/* Modal 3 */
$("#btn_modal_proyecto_3").on("click", function () {
  $("#ventana_modal_proyecto_3").modal("show");
});

$("#ventana_modal_proyecto_3").on("hidden.bs.modal", function () {
  const iframe = $("#video_proyecto_3");
  const src = iframe.attr("src");
  iframe.attr("src", "");
  iframe.attr("src", src);
});
