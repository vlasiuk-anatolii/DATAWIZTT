if (window.location.pathname === '/') {
  console.log(window.location.pathname);
  const line = document.getElementById('line1');
  const length = line.getTotalLength();

  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;

  gsap.to(line, {
    duration: 5,
    strokeDashoffset: 0,
    ease: 'linear'
  });
} 

if (window.location.pathname === '/blog/') {
  const autors = document.getElementsByClassName('text-secondary');
  autors[1].insertAdjacentHTML('afterend', '<hr>');
}
