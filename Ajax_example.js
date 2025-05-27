// this code is only an example of working with ajax
$.ajax({
    url: "test-ajax.php",
    type: "POST",
    data: {key1 : "value1", key2 : "value2"},
    datatype: "json",
    async: true,
    cache: false,
    timeout: 5000,
    beforeSend: function() {
        console.log("request is about to be sent");
    },
    success: function(result) {
        console.log("Success : ",result);
    },
    error: function(result) {
        console.log("Error : ",result);
    },
    complete: function() {
        console.log("Complete!!");
    }
})
