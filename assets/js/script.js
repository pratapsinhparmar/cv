var button = document.querySelector('.fabTrigger');
var wrap = document.querySelector('.fabWidget');

button.onclick = function() {
    button.classList.toggle('active');
    wrap.classList.toggle('active');
}