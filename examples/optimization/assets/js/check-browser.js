/**
 * See: https://www.chromestatus.com/feature/6080438103703552
 * Credit: https://stackoverflow.com/a/23522755
 */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  alert('Your browser is not supported at the moment. Please switch to Chrome or Firefox.');
}
