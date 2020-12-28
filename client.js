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
    const payload = { id : id,  title: title };

    removeElement();
    
    $.post(appUrl, payload, showResponse);
});

$("#btn_read").click(() => {
    const id = $("#entity_id").val();
    const payload = { id : id };

    removeElement();

    $.get(appUrl, payload, showResponse);
});

$("#btn_update").click(() => {
    const id = $("#entity_id").val();
    const title = $("#entity_title").val();
    const payload = { id : id,  title: title };

    removeElement();

    $.ajax({
        url: appUrl,
        type: 'GET',
        contentType: 'application/json',
        data: payload,
        success: showResponse
    });
});

$("#btn_delete").click(() => {
    const id = $("#entity_id").val();
    const payload = { id : id };

    removeElement();

    $.ajax({
        url: appUrl,
        type: 'DELETE',
        contentType: 'application/json',
        data: payload,
        success: showResponse
    });
});