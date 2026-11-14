const videos = [...document.querySelectorAll('.project-video')];
const motionButton = document.querySelector('.motion-toggle');
const motionLabel = motionButton?.querySelector('span');
const motionIcon = motionButton?.querySelector('path');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let previewsPaused = reducedMotion.matches;
const visibleVideos = new Set();

function updateButton() {
  if (!motionButton) return;
  motionButton.hidden = false;
  motionButton.setAttribute('aria-pressed', String(previewsPaused));
  motionLabel.textContent = previewsPaused ? 'Play previews' : 'Pause previews';
  motionIcon.setAttribute('d', previewsPaused ? 'M4 2.5v11l9-5.5z' : 'M4 3h3v10H4zm5 0h3v10H9z');
}

function synchronize(video) {
  if (previewsPaused || document.hidden || !visibleVideos.has(video)) {
    video.pause();
    return;
  }
  // Do not download a preview until it is near the viewport and motion is enabled.
  if (!video.getAttribute('src')) video.src = video.dataset.src;
  video.muted = true;
  video.play().catch(() => {
    // The linked poster remains available if the browser disallows autoplay.
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (isIntersecting) visibleVideos.add(target);
      else visibleVideos.delete(target);
      synchronize(target);
    }
  }, { rootMargin: '100px 0px', threshold: 0.05 });
  videos.forEach(video => observer.observe(video));
} else {
  videos.forEach(video => visibleVideos.add(video));
  videos.forEach(synchronize);
}

motionButton?.addEventListener('click', () => {
  previewsPaused = !previewsPaused;
  updateButton();
  videos.forEach(synchronize);
});
document.addEventListener('visibilitychange', () => videos.forEach(synchronize));
reducedMotion.addEventListener('change', event => {
  previewsPaused = event.matches;
  updateButton();
  videos.forEach(synchronize);
});
updateButton();
