// Get Quote from API and display it on the page
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes',
    headers: { 'X-Api-Key': 'FYsj1NCouQTLy/VcPFkhHw==QJIm5QV3AbYgXyHY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});