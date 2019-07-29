
// var releaseTime = 1564401600000; //Noon on 29th
// var releaseTime = 1564398000000; //11am on 29th
var releaseTime = 1564419000000; //11:50am on 29th

$('#tooltip').tooltip('show');


var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();
var time = d.getTime();

var output = 'Today is ' + ((''+month).length<2 ? '0' : '') + month + ' / ' +
    ((''+day).length<2 ? '0' : '') + day +
    ' / ' + d.getFullYear();

$('#yesornoform').submit(function(event) {
    event.preventDefault();
    var radioValue = $("input[name='yesorno']:checked").val();
    if(radioValue == "yes"){
        if(time < releaseTime){
            $('#displayDate').text('Just be a little more patient...');
        }
        else {
            $(location).attr('href',"happybirthday.html");
        }
    }
});



// $(document).ready(function() {
//     alert("I'm in");
// })

// $("#submit").click(function() {
//     $('#displayDate').fadeIn(9000);
// })