// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", setup_anchors);
} else {
  // `DOMContentLoaded` has already fired
  setup_anchors();
}

function setup_anchors() {
  console.info("DOM loaded");
  document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener('click', play);
    anchor.addEventListener('animationend', () => {
      anchor.classList.remove('animated');
      console.info(`animation ended on "${anchor.innerText}"`);
    });
  });
}

function play(event) {
  const anchor = event.currentTarget; // this == event.currentTarget?
  const audio = anchor.firstChild;
  console.info(`"${anchor.innerText}" wants to play ${audio.src}`);
  audio.play().then(
    () => anchor.classList.add('animated'), // fulfilled
    () => console.error('playback error')   // rejected
  );
}
