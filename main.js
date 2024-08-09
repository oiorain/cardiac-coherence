function getRandomColor() {
  var color = '#';
  for (var i = 0; i < 6; i++)
    color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
  return color;
}

function displayPace(){
  document.getElementById('time').innerText = pace+"secs"
}
function changePace(change){
  pace += change;

  document.getElementById('bubble').style.animationDuration = pace+"s";
  displayPace();
}

let pace = 8;
displayPace()

document.getElementById('breathe').addEventListener('click', () => {
  if (document.getElementById('breathe').innerText == "Bubble") {
      document.getElementById('breathe').innerText = "Up-down"
      document.getElementById('bubble').style.animationName = 'updown'
  } else if (document.getElementById('breathe').innerText == "Up-down") {
      document.getElementById('breathe').innerText = "Sama Vritti / Box Breathing"
      document.getElementById('bubble').style.animationName = 'boxbreathing'
      changePace(+pace)
  } else {
    document.getElementById('breathe').innerText = "Bubble"
    document.getElementById('bubble').style.animationName = 'bubble'
    changePace(-pace/2)
  }
});

document.getElementById('color').addEventListener('click', () => {
  document.getElementById('bubble').style.backgroundColor = getRandomColor()
});

document.getElementById('faster').addEventListener('click', () => {
  if (pace > 2)
    changePace(-1);
});

document.getElementById('slower').addEventListener('click', () => {
  changePace(+1)
});
