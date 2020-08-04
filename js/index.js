
// creating arrays for allowed user input in calculator
let allowedKeys = {
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    107: '+',
    109: '-',
    106: '*',
    111: '/',
    67: 'c',
    187: '='
};



// making the calculator buttons clickable with mouse
$('.one').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 49});
    $('.output').html('1')
    console.log("one")
});
$('.two').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 50});
    $('.output').html('2')
    console.log("two")
});
$('.three').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 51});
    $('.output').html('3')
    console.log("three")
});
$('.plus').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 107});
    $('.output').html('+')
    console.log("plus")
});
$('.four').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 52});
    $('.output').html('4')
    console.log("four")
});
$('.five').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 53});
    $('.output').html('5')
    console.log("five")
});
$('.six').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 54});
    $('.output').html('6')
    console.log("six")
});
$('.minus').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 109});
    $('.output').html('-')
    console.log("minus")
});
$('.seven').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 55});
    $('.output').html('7')
    console.log("seven")
});
$('.eight').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 56});
    $('.output').html('8')
    console.log("eight")
});
$('.nine').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 57});
    $('.output').html('9')
    console.log("nine")
});
$('.times').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 106});
    $('.output').html('*')
    console.log("times")
});
$('.zero').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 48});
    $('.output').html('0')
    console.log("zero")
});
$('.equals').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 187});
    $('.output').html('=')
    console.log("equals")
});
$('.divide').click(function () {
    jQuery.event.trigger({type: 'keydown', keyCode: 111});
    $('.output').html('/')
    console.log("divide")
});




// reloads page if C 'clear' is selected
function reloadThePage() {
    $('.clear').click(function () {
        window.location.reload(true);
    });
}
reloadThePage();