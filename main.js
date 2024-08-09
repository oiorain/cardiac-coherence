function getRandomColor() {
  var color = '#';
  for (var i = 0; i < 6; i++)
    color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
  return color;
}

let pace = 16;
displayPace()

function displayPace(){
  document.getElementById('bubble').style.animationDuration = pace+"s";
  document.getElementById('time').innerText = pace+"secs"
}
function changePace(change){
  pace += change;
  displayPace();
}
function setPace(change){
  pace = change;
  displayPace();
}

function setActive(t){
  let x = document.getElementsByClassName("active");

  // If it exists, remove it.
  if(x.length > 0) { x[0].classList.remove("active"); }
  t.classList.add("active")
}

document.getElementById('boxbreathing').addEventListener('click', () => {
  document.getElementById('bubble').style.animationName = 'boxbreathing'
  setPace(16)
  setActive(document.getElementById('boxbreathing'))
})

document.getElementById('breathe').addEventListener('click', () => {
  document.getElementById('bubble').style.animationName = 'bubble'
  setPace(8)
  setActive(document.getElementById('breathe'))
});

document.getElementById('updown').addEventListener('click', () => {
  document.getElementById('bubble').style.animationName = 'updown'
  setPace(8)
  setActive(document.getElementById('updown'))
})

document.getElementById('bubble').addEventListener('click', () => {
  document.getElementById('bubble').style.backgroundColor = getRandomColor()
});

document.getElementById('faster').addEventListener('click', () => {
  if (pace > 2)
    changePace(-1);
});

document.getElementById('slower').addEventListener('click', () => {
  changePace(+1)
});
