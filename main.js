function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('breathe').addEventListener('click', () => {
  if (document.getElementById('breathe').innerText == "Bubble") {
      document.getElementById('breathe').innerText = "Up-down"
      document.getElementById('bubble').style.animationName = 'updown'
  } else {
    document.getElementById('breathe').innerText = "Bubble"
    document.getElementById('bubble').style.animationName = 'bubble'
  }
});

document.getElementById('color').addEventListener('click', () => {
  document.getElementById('bubble').style.backgroundColor = getRandomColor()
});
