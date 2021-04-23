function printSeconds(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

var secondsID = setInterval(printSeconds, 1000);
