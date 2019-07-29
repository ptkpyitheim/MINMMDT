

$('#tooltip').tooltip('show');


var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = 'Today is ' + ((''+month).length<2 ? '0' : '') + month + ' / ' +
    ((''+day).length<2 ? '0' : '') + day +
    ' / ' + d.getFullYear();

$('#yesornoform').submit(function(event) {
    event.preventDefault();
    var radioValue = $("input[name='yesorno']:checked").val();
    if(radioValue == "yes"){
        if(day !== 29){
            $('#displayDate').text(output + ". You have to be 21 to view this.");
        }
    }
});



// $(document).ready(function() {
//     alert("I'm in");
// })