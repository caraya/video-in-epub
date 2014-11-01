/**
* touch and keyboard based functions
*/

window.onload = function() { //s/b jq  $(document).ready
  var video = document.getElementsByTagName('video')[0];

  if(checkReadingSystemSupport()) {
     video.removeAttribute('controls', 0);
  }
  
  video.addEventListener('click', function(e){
    e.preventDefault();
    togglePlay();
  }, false);

  video.addEventListener('dblclick', function(e){
    e.preventDefault();
    toggleControls();
  }, false);    

  video.addEventListener('keyup', function (e) {
    var k = e ? e.which : window.event.keyCode;
    if (k === 32) {
      e.preventDefault();
      togglePlay();
    }
  },false);
}