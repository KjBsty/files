document.querySelector('.arrow').addEventListener('click', function() {
  document.querySelector('.arrow__left, .arrow__right').classList.toggle('rotate');
  document.querySelector('.arrow__top').classList.toggle('size');
  document.querySelector('.arrow__top-ball').classList.toggle('move');
  document.querySelector('.arrow__fill').classList.toggle('fill');
  document.querySelector('.status__percent').classList.toggle('appear');
  
  setTimeout ( function() {
  let duration = 5000; // 5 seconds
    document.querySelector('.arrow__fill').stop().animate(
      {scaleX: 1}, { //stop when the scale reaches 1
      duration: duration,
      progress: function(promise, progress, ms) {
      document.querySelector('.status__percent').text(Math.round(progress * 100) + '%');}
  });
  }, 1800); // 1.8 seconds delay
  
});
