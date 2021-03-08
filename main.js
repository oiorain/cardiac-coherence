// var updateUIInterval;
// var isRunning = false;
//
// var seconds = 0;
// var minutes = 0;

// function updateUI() {
//     seconds++;
//
//
//     var secondString = '00';
//     var minuteString = '00';
//
//     if (seconds === 60) {
//         minutes++;
//         seconds = 0;
//     }
    //
    // secondString = (seconds < 10) ? `0${seconds}` : `${seconds}`
    // minuteString = (minutes < 10) ? `0${minutes}` : `${minutes}`
    //
    // var timerString = `${minuteString}:${secondString}`;
    // console.log(timerString);
    // document.getElementById('timer').innerText = `${timerString}`;
// }

// document.getElementById('breathe').addEventListener('click', () => {
//
//     isRunning = !isRunning
//
//     if (isRunning) {
//         // document.getElementById('breathe').innerText = "Stop"
//         document.getElementById('bubble').style.animation = 'mover 10s infinite ease-in-out'
//         updateUIInterval = setInterval(updateUI, 1000);
//     } else {
//         // document.getElementById('breathe').innerText = "Breathe"
//         document.getElementById('bubble').style.animation = 'none'
//         document.getElementById('timer').innerText = `00:00`;
//
//         seconds = 0;
//         minutes = 0;
//
//         clearInterval(updateUIInterval);
//     }
// });

// document.getElementById('breathe').innerText = "Stop"
// document.getElementById('bubble').style.animation = 'mover 8s infinite ease-in-out'
// updateUIInterval = setInterval(updateUI, 1000);
