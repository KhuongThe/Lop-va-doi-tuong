class Tivi {
  constructor(channel, volume, status) {
    this.channel = channel;
    this.volume = volume;
    this.status = status;
  }
  getchannel() {
    return this.channel;
  }
  setchannel(newchannel) {
    this.channel = newchannel;
  }
  getvolume() {
    return this.volume;
  }
  setvolume(newvolume) {
    this.volume = newvolume;
  }
  getStatus() {
    if (this.status) {
      console.log("Tivi ON");
    } else {
      console.log("Tivi OFF");
    }
  }
}
