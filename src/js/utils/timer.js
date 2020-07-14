function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = () =>{
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time5');
    startTimer(fiveMinutes, display);
};

// function startTimer7(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
// window.onload = () =>{
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time5');
//     startTimer(fiveMinutes, display);
// };
//  window.onload = () =>{
//     var sevenMinutes = 60 * 7,
//         display = document.querySelector('#time7');
//     startTimer7(sevenMinutes, display);
// };
// window.onload = () =>{
//     var sixMinutes = 60 * 6,
//         display = document.querySelector('#time6');
//     startTimer(sixMinutes, display);
// };

// window.onload = () =>{
//     var threeMinutes = 60 * 3,
//         display = document.querySelector('#time3');
//     startTimer(threeMinutes, display);
// };
