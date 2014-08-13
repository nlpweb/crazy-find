
// initialize the crazyFind object
console.debug('initialize crazyFind');
var o_crazyFind = new crazyFind();


o_crazyFind.extractText();
o_crazyFind.replaceText();

var currentURL = '';

// define crazyFind Class
function crazyFind()
{
    var crazy = this;

    var text = '';

    crazy.extractText = function(){
        console.log('content');
        text = $('.content').text();

        console.log(text);
    }
    crazy.replaceText = function(){
        console.log('replace');
        var regex = /([a-z]+)(ion)/gi;
        var newstr = text.replace(regex, '$1<crazy>$2</crazy>');

        console.log(newstr);
        $('.results').html(newstr)
    }

}