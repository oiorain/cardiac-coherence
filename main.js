document.getElementById('breathe').addEventListener('click', () => {
  if (document.getElementById('breathe').innerText == "Bubble") {
      document.getElementById('breathe').innerText = "Up-down"
      document.getElementById('bubble').style.animationName = 'updown'
  } else {
    document.getElementById('breathe').innerText = "Bubble"
    document.getElementById('bubble').style.animationName = 'bubble'
  }
});
