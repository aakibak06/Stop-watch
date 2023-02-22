let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

// let timer = false;

function start(){
  timer = true;
  stopwatch();

}
function stop(){
  timer = false;

}
function reset(){
  timer = false;
 hr = 0;
 min = 0;
 sec = 0;
 count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    // count = count + 1;
    count++

    if (count == 100) {
      // sec = sec + 1;
      sec++
      count = 0;
    }
    
    if (sec == 60) {
      // min = min + 1;
      min++
      sec = 0;
    }

    if (min == 60) {
      // hr = hr + 1;
      hr++
      min = 0;
      sec = 0;
    }
    let hrstring = hr;
    let minString = min;
    let secString = sec;
    let countString = count;
    if (hr < 10) {
      hrstring = "0" + hrstring;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }



    document.getElementById("hr").innerHTML = hrstring;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    

    setTimeout("stopwatch()", 10);
  }
}