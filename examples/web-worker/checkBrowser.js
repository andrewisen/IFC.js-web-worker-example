/**
 * Alert WebKit users.
 *
 * Safari can't spawn new Web Workers inside Web Workers.
 * I.e. use nested Web Workers.
 *
 * See: https://www.chromestatus.com/feature/6080438103703552
 */
if (navigator.userAgent.indexOf('Safari') !== -1) {
  alert('Your browser is not supported at the moment. Please switch to Chrome or Firefox.');
}
