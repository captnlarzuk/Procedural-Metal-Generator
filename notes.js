var NOTECONF = {
  "o": 25,
  " ": 0
}

var NOTE_ = function(desc){
  this.fileName = desc.fileName;
  this.octave = desc.octave;
  this.offset = desc.octave;
  this.volume = desc.volume;
  this.time = NOTECONF.o;

  this.soundFile = document.createElement("audio");
  this.soundFile.preload = "auto";

  //Load the sound file (using a source element for expandability)
  var src = document.createElement("source");
  src.src = this.fileName + ".wav";
  this.soundFile.appendChild(src);
  this.soundFile.addEventListener("onended", function(){
    document.removeChild(this);
  });
  this.soundFile.load();
  this.soundFile.volume = this.volume;
  this.soundFile.play();

  this.play = function(){
    this.soundFile.currentTime = 0.00;
    setTimeout(this.soundFile.play(), 0.0 );
  }
}
