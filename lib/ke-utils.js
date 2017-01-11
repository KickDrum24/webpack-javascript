module.exports = {
  formatDate(epoch) {
    try {
      let d = new Date(0);
      d.setUTCSeconds(epoch);
      // Mon, Mar 4, 2017
      // mmmdyyyy
      let ret = this.getDayName(d) + " " + this.getMonthName(d) + " " + d.getDate() + " " + d.getFullYear();
      return ret;
    }
    catch (e) {
      console.error(e.message);
    }
  },

  formatTime(epoch) {
    try {
      let d = new Date(0);
      d.setUTCSeconds(epoch);
      // hh:mm
      let ret = this.to12HourClock(d.getHours(), d.getMinutes());
      return ret;
    }
    catch (e) {
      console.error(e);
    }
  },

  to12HourClock(hours, minutes) {
    let amOrPm;
    if (hours < 12) {
      amOrPm = "AM";
    } else {
      amOrPm = "PM";
    }
    if (hours.length == 1) {
      hours = "0" + hours;
    }
    let ret = hours + ":" + minutes + " " + amOrPm;
    return ret;

  },

  getMonthName(date) {
    let num = date.getMonth();
    let months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return months[num];
  },

  getDayName(date, format) {
    let d;
    let DDD = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let DD = ["SU", "M", "TU", "W", "TH", "F", "SA"];
    let index;
    let ret;
    if (!(date instanceof Date)) {
      // Assume it is an epoch
      d = new Date(0);
      d.setUTCSeconds(date);
    } else {
      d = date;
    }
    index = d.getDay();
    switch (format) {
      case "DD":
        ret = DD[index];
        break;
      case "DDD":
        ret = DDD[index];
        break;
      default:
        ret = DD[index];
    }
    return ret;
  },

  log(name, value) {
    var str = name;
    if (value) {
      str += "=" + value;
    }
    console.log("%c [LOG] " + str, "background: #222; color: #ADD8E6");
  },

  logFunction(name) {
    console.log("%c [LOG] " + name + "()", "background: #222; color: green");
  },


};
