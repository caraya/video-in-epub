/**
* Shared functions that are used in all pages that use video
*/
function checkReadingSystemSupport() {
  var neededFeatures =["mouse-events", "dom-manipulation"];
  var support = typeof navigator.epubReadingSystem !== 'undefined';
  if (support) {
    for (var i = 0; i < neededFeatures.length; i++) {
      if (!navigator.epubReadingSystem.hasFeature(neededFeatures[i])) {
          return false;
      }
    }
  }
  return support;
}

function togglePlay() {
  var video = document.getElementsByTagName('video')[0];
  if (video.ended || video.paused) {
      video.play();
  } else {
      video.pause();
  }
}

function toggleControls() {
  var video = document.getElementsByTagName('video')[0];
  if (video.controls) {
    video.removeAttribute('controls', 0);
  } else {
    video.controls = 'controls';
  }
}