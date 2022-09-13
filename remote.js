class Remote {
  contructor(id) {
    this.id = id;
  }
  changerChannel(tivi, newchannel) {
    tivi.setchannel(newchannel);
  }
  changerVolume(tivi, newvolume){
    tivi.setvolume(newvolume)
  }
  displayStatus(tivi){
    tivi.getStatus();
  }
}
