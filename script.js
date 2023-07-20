// using setinterval function
setInterval(() => {

    // calculate the time
    let date = new Date
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    // calculate the rotation
    let hrotate = 30 * hrs + min / 2
    let mrotate = 6 * min
    let srotate = 6 * sec

    // using dom
    let htime = document.getElementById("h")
    let mtime = document.getElementById("m")
    let stime = document.getElementById("s")

    htime.style.transform = `rotate(${hrotate}deg)`;
    mtime.style.transform = `rotate(${mrotate}deg)`;
    stime.style.transform = `rotate(${srotate}deg)`;

    // check
    // console.log(hrotate);
    // console.log(mrotate);
    // console.log(srotate);
}, 1000)