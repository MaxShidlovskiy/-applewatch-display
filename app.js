class Whatch {

  constructor() {
    setInterval(this.doTime, 1000)
  }

  doTime() {
    let time = new Date();
    let hh = time.getHours() * 30;
    let mm = time.getMinutes() * 6;
    let ss = time.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  }
}

const test = new Whatch()