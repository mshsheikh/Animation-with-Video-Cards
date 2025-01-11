document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reset video to the start
  });
});
