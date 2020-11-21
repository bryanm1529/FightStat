
/*

highlight v5

Highlights arbitrary terms.

<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>

MIT license.

Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

*/

jQuery.fn.highlight = function(pat) {
function innerHighlight(node, pat) {
    var skip = 0;
    if (node.nodeType == 3) {
    var pos = node.data.toUpperCase().indexOf(pat);
    pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
    if (pos >= 0) {
    var spannode = document.createElement('span');
    spannode.className = 'highlight';
    var middlebit = node.splitText(pos);
    var endbit = middlebit.splitText(pat.length);
    var middleclone = middlebit.cloneNode(true);
    spannode.appendChild(middleclone);
    middlebit.parentNode.replaceChild(spannode, middlebit);
    skip = 1;
    }
    }
    else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
    for (var i = 0; i < node.childNodes.length; ++i) {
    i += innerHighlight(node.childNodes[i], pat);
    }
    }
    return skip;
}
return this.length && pat && pat.length ? this.each(function() {
    innerHighlight(this, pat.toUpperCase());
}) : this;
};

jQuery.fn.removeHighlight = function() {
return this.find("span.highlight").each(function() {
    this.parentNode.firstChild.nodeName;
    with (this.parentNode) {
    replaceChild(this.firstChild, this);
    normalize();
    }
}).end();
};




var all = document.getElementsByTagName("*");
var originalAllLength = all.length
for (var i=0; i < originalAllLength; i++) {
    console.log(all[i])
    // If the current element contains McGregor
    //if (!(all[i].hasChildNodes())) {
    //}
    var $context = $(all[i]);
    //console.log(all[i].innerHTML.trim());
    //console.log(all[i].textContent.trim());
    text = "Conor McGregor"
    if (!(all[i].classList.contains("highlight"))) {
        $context.removeHighlight();
        $context.highlight(text);
    }
}
//Shows fighter HTML element on fighter name hover
$(function() {     
    $('.highlight').hover(function() {
        $('#pop').toggle();
    });
});
//Moves fighter HTML element to user's mouse    
$(document).on('mousemove', function(e){
    $('#pop').css({
        left:  e.pageX,
        top:   e.pageY
     });
});
