/**
 * Created by Jim Li on 2015-03-17.
 */
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    console.log(mySrc);
}