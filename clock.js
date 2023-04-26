class Clock {
    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        // let tick = this._tick.bind(this)
        setInterval(this._tick.bind(this), 1000);
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }
  
    printTime() {
        let hh = this.hours < 10 ? `0${this.hours}` : this.hours;
        let mm = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
        let ss = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
        console.log(`${hh}:${mm}:${ss}`);
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }
  
    _tick() {
        // debugger
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
        }

        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
        }

        if (this.hours === 24) {
            this.hours = 0;
        }

        return this.printTime()

      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
  }
  
  const clock = new Clock();