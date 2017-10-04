$(document).ready(function() {
    var input = $('#input');
    var inputVal;
    var array;
    //test Regex at: https://regexr.com/
    var pattern = /([\w][\d]|[\d][\w]|\d)\w.*[^(\.\s)]/gm;

    input.on('change', function() {
        inputVal = input.val();
        array = inputVal.split(". ");
    });
    //output
    $('.submit').on('click', function() {
        for (i = 0; i < array.length; i++) {
            console.log(array[i].match(pattern));
            $('#output').append("<div>" + array[i].match(pattern) + "</div>");

        }
    });
});
