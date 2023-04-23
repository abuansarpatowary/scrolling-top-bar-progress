const progress = document.querySelector('#progress');
const section = document.querySelector('section');

function animatedProgressBar() {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.width = `${progressHeight}%`;
}
window.addEventListener('scroll', animatedProgressBar);
