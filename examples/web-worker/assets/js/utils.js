/**
 * Show or hide the Loader
 */
function toggleLoader() {
  var element = document.getElementById('loading');
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

export { toggleLoader };
