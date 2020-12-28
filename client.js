const appUrl = "http://localhost:3000";

function showResponse(resp) {
    $("#response_container").append(`<p id="response">${resp}</p>`);
}

function removeElement() {
    $("#response").remove();
}

$("#btn_create").click(() => {
    const id = $("#entity_id").val();
    const title = $("#entity_title").val();
    const payload = { id: id, title: title };

    removeElement();

    $.post(appUrl, payload, showResponse);
});

$("#btn_read").click(() => {
    const id = $("#entity_id").val();
    console.log(id);
    const payload = { id: id };

    console.log(payload);

    removeElement();
    $.ajax({
        url: appUrl,        /* Куда пойдет запрос */
        method: 'get',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: payload ,     /* Параметры передаваемые в запросе. */
        success: showResponse
    });
});

$("#btn_update").click(() => {
    const id = $("#entity_id").val();
    const title = $("#entity_title").val();
    const payload = { id: id, title: title };

    removeElement();

    console.log(payload);

    $.ajax({
        url: appUrl,
        type: 'put',
        data: `id=${id}&title=${title}`, 
        success: showResponse
    });
});

$("#btn_delete").click(() => {
    const id = $("#entity_id").val();
    const payload = { id: id };

    removeElement();

    $.ajax({
        url: appUrl,
        type: 'DELETE',
        data: `id=${id}`, 
        success: showResponse
    });
});