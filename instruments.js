var wavFolder = "wav/";

var PSC;
var PROCEDURAL_SEED_COMPUTER_ = function(seed){
  this.seed = seed;
  this.hash = md5(seed);
  this.hashByteLength = 2;

  this.offset = 0;
  this.initWith = function(seed){
    this.seed = seed;
    this.hash = md5(seed);
    this.offset = 0;
  };

  this.getRecipeFrom = function(from)
  {
    var hashByte = this.getHashByte();
    var index = parseInt(hashByte, 16);
    //console.log(hashByte + " " + index + " " + (index%from.length));
    if(Array.isArray(from))
    return from[index%from.length];
    var keys = Object.keys(from);
    return from[keys[ index%keys.length]];
  };

  this.getRecipeIndex = function(){
    var hashByte = this.getHashByte();
    return parseInt(hashByte, 16);
  };

  this.getHashByte = function()
  {
    var hashByte = this.hash.slice(this.offset, this.offset+(this.hashByteLength));
    this.nextHashByte();
    return hashByte;
  };

  this.nextHashByte = function()
  {
    this.offset += this.hashByteLength;

    if((this.offset+(this.hashByteLength))>this.hash.length)
    {
      this.offset = 0;
    }
  };

  return this;
};

var PSC =  new PROCEDURAL_SEED_COMPUTER_();
var PMG_BASEINSTRUMENTS = {
  drumA: {
    o:   wavFolder+"Dry-Kick",
    "-": wavFolder+"Closed-Hi-Hat-6",
    x:   wavFolder+"Korg-NS5R-Snare-Drum"
  },
  chrugs: {
    aa:wavFolder+"grattea/HMRhyB Chug-A",
    ab:wavFolder+"grattea/HMRhyB Chug-B",
    ac:wavFolder+"grattea/HMRhyB Chug-C",
    ad:wavFolder+"grattea/HMRhyB Chug-D Lo",
    ae:wavFolder+"grattea/HMRhyB Chug-E",
    af:wavFolder+"grattea/HMRhyB Chug-F",
    ag:wavFolder+"grattea/HMRhyB Chug-G",
    ba:wavFolder+"gratteb/HMRhyBChug-A",
    bb:wavFolder+"gratteb/HMRhyBChug-B",
    bc:wavFolder+"gratteb/HMRhyBChug-C",
    bd:wavFolder+"gratteb/HMRhyBChug-D",
    be:wavFolder+"gratteb/HMRhyBChug-E Lo",
    bf:wavFolder+"gratteb/HMRhyBChug-F",
    bg:wavFolder+"gratteb/HMRhyBChug-G",
  },
  symbals:{
    1:  wavFolder+"symbals/1_hit_symbal",
    2:  wavFolder+"symbals/2_hit_symbal",
    3:  wavFolder+"symbals/3_hit_symbal",
    4:  wavFolder+"symbals/4_hit_symbal",
    5:  wavFolder+"symbals/5_hit_symbal",
    6:  wavFolder+"symbals/6_hit_symbal",
    7:  wavFolder+"symbals/7_hit_symbal",
    8:  wavFolder+"symbals/8_hit_symbal",
    9:  wavFolder+"symbals/9_hit_symbal",
    10: wavFolder+"symbals/10_hit_symbal",
    11: wavFolder+"symbals/11_hit_symbal",
  }
}
var PMG_BASEPATTERNS = {
  "drumA":[
    ["o", "o", "x", " "],
    ["o", "o", "o", " "],
    ["o", "o", "o", "o"],
    ["x", " ", " ", " "],
    ["x", "o", " ", "o"],
    ["x", "x", "x", "o"],
    ["o", " ", "x", " "],
    [" ", " ", "o", "o"],
    [" ", " ", "x", "x"],
    ["x", "x", "x", "x"],
    ["o", " ", " ", " "],
    [" ", " ", " ", " "],
  ],
  "chrugs":[
    ["aa", " ", " ", " "],
    ["ab", " ", " ", " "],
    ["ac", " ", " ", " "],
    ["ad", " ", " ", " "],
    ["ae", " ", " ", " "],
    //  ["af", " ", " ", " "],
    [" ", " ", " ", " "],
    ["ba", " ", " ", " "],
    ["bb", " ", " ", " "],
    ["bc", " ", " ", " "],
    ["bd", " ", " ", " "],
    ["be", " ", " ", " "],
    ["bf", " ", " ", " "],
    ["aa", " ","aa", " "],
    ["ab", " ","ab", " "],
    ["ac", " ","ac", " "],
    ["ad", " ","ad", " "],
    ["ae", " ","ae", " "],
    ["af", " ","af", " "],
    [" ", " ", " ", " "],
    ["ba", " ","ba", " "],
    ["bb", " ","bb", " "],
    ["bc", " ","bc", " "],
    ["bd", " ","bd", " "],
    ["be", " ","be", " "],
    ["bf", " ","bf", " "],
    [" "," ", "aa",  " "],
    [" "," ", "ab",  " "],
    [" "," ", "ac",  " "],
    [" "," ", "ad",  " "],
    [" "," ", "ae",  " "],
    //  [" "," ", "af",  " "],
    [" ", " ", " ", " "],
    [ " "," ", "ba", " "],
    [ " "," ", "bb", " "],
    [ " "," ", "bc", " "],
    [ " "," ", "bd", " "],
    [ " "," ", "be", " "],
    [ " "," ", "bf", " "],
  ],
  symbals:[ ],
  /*
  Get four patterns to choose from.
  */
  "getABCD": function(base_pattern){
    var pattern = [
      PSC.getRecipeFrom(base_pattern),
      PSC.getRecipeFrom(base_pattern),
      PSC.getRecipeFrom(base_pattern),
      PSC.getRecipeFrom(base_pattern)
    ];
    console.log("------");
    console.log(base_pattern);
    return pattern;
  }
}

/*
Structural presets for patterns.
*/
var PMG_STRUCTURES = {
  "ABBA":function(structures, offset){
    if(!structures || structures.length < 4)
    return null;
    return [structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+1)%3], structures[(offset+0)%3] ];
  },

  "ABBAABBA":function(structures, offset){
    if(!structures || structures.length < 4)
    return null;
    return [structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+1)%3], structures[(offset+0)%3],structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+1)%3], structures[(offset+0)%3] ];
  },

  "ABAB":function(structures, offset){
    if(!structures || structures.length < 4)
    return null;
    return [structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+0)%3], structures[(offset+1)%3] ];
  },

  "ABCB":function(structures, offset){
    if(!structures || structures.length < 4)
    return null;
    return [structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+2)%3], structures[(offset+1)%3] ];
  },

  "ABCC":function(structures, offset){
    if(!structures || structures.length < 4)
    return null;
    return [structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+2)%3], structures[(offset+3)%3] ];
  },

  "ABCCCCBA":function(structures, offset){
    if(!structures || structures.length < 4)
    return null;
    return [structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+2)%3], structures[(offset+3)%3],structures[(offset+3)%3], structures[(offset+3)%3], structures[(offset+2)%1], structures[(offset+0)%3] ];
  },

  "AABB":function(structures, offset){
    if(!structures || structures.length < 4)
    return null;
    return [structures[(offset+0)%3], structures[(offset+0)%3], structures[(offset+1)%3], structures[(offset+1)%3] ];
  },
};

var PMG_STRUCTURE_SET = function(base_patterns){
  this.entropySet = [4,5,6,7,8];
  this.repeatSet = [2,3,4];
  this.entropy = PSC.getRecipeFrom(this.entropySet);
  this.repeat = PSC.getRecipeFrom(this.repeatSet);
  this.base_patterns = base_patterns;
  this.structureKit = [];
  this.structureSet = [];
  this.offset = 0;

  /*
  Retrieve information from the structure object.
  */
  this.getInfoDump = function(){
    return {
      "config":{
        "entropy": this.entropy,
        "repeat": this.repeat,
        "offset": this.offset,
      },
    };
  };

  /*
  Return a structure kit ( structure makerz callbacks )
  */
  this.createStructureKit = function()
  {
    this.repeat = PSC.getRecipeFrom(this.repeatSet);
    this.structureKit = [];
    for(var i = 0; i <= this.entropy; i++)
    {
      var structurecall = PSC.getRecipeFrom(PMG_STRUCTURES);
      this.structureKit.push(structurecall)
    }

    return this;
  }

  /*
  Returns a structure set ( x arrays of patterns arranged in structures)
  */
  this.createStructureSet = function(patternsABCD)
  {
    this.structureSet = [];
    //console.log(patternsABCD)
    for(var i = 0; i <= this.entropy; i++)
    {
      var structurecallA = this.structureKit[i];
      //var structurecallB = this.structureKit[i];
      var pattern = structurecallA(patternsABCD,PSC.getRecipeIndex()%3);//+structurecallB(patternsABCD);

      this.structureSet.push(pattern);
    }
    return this;
  }

  /*
  Retrieve the next pattern to be playend on this structure.
  */
  this.getNextPattern = function()
  {
    return this.structureSet[this.offset++%this.structureSet.length]
  }

  /*
  Retrieve the current pattern.
  */
  this.getPattern = function()
  {
    return this.structureSet[this.offset];
  };

  this.reinit = function(){
    this.createStructureKit().createStructureSet(PMG_BASEPATTERNS.getABCD(this.base_patterns));
    this.offset = 0;
  }

  /*
  Initialise the structure with base patterns and create a procedural complete set.
  */
  this.createStructureKit().createStructureSet(PMG_BASEPATTERNS.getABCD(this.base_patterns));
  return this
};

/*
Track object: the procedural track to be played.
*/
var PMG_TRACK_ = function(name, vol,  instrument, structure){
  this.name = name;
  this.changed = 0;
  this.instrument = instrument;
  this.structureRepeatSet = [2, 4, 8];
  this.structureRepeat =
  this.structure = structure;
  this.currentTime = 0;
  this.offset = 0;
  this.note = null;
  this.vol = vol;
  this.pattern = this.structure.getPattern();
  this.patternCount = 0;
  this.step = function(currentPattern){
    this.currentTime = currentPattern;

    if(!this.pattern)
    return false;

    this.offset = currentPattern%(CONFIG.bpb);
    if(!this.offset)
      this.patternCount++;
    if(this.patternCount > this.structure.repeat * this.pattern.length )
    {
      this.changed ++;
      this.pattern = this.structure.getNextPattern();

    }

    var pat = this.pattern[this.patternCount%this.pattern.length];
    if(typeof pat == "undefined")
    {
      this.currentTime = 0;
      return 0;
    }

    if(pat[this.offset] && pat[this.offset]!==" " )
    {
      if((typeof this.instrument[pat[this.offset]] == "undefined"))
      {
        console.log(pat[this.offset]+" makes no sense.");
      }
      else
      {
        this.note = new NOTE_({fileName:this.instrument[pat[this.offset]], volume: this.vol});
        this.note.play(pat[this.offset]);
      }
    }

  };

  /*
  Retrieve information from the track object.
  */
  this.getInfoDump = function(){
    return {
      "name": this.name,
      "config":{
        "currentTime": this.currentTime,
        "patternCount": this.patternCount%this.pattern.length,
        "offset": this.offset,
        "vol": this.vol,
      },
      "structureInfo": this.structure.getInfoDump(),
      "pattern":this.pattern,
    };
  };

  return this;
}


var PROCEDURAL_METAL_GENERATOR_ = function(seed){

  this.PSC = PSC;
  this.PSC.initWith(seed);
  this.bpmSet = CONFIG.bpmSet;
  this.bpm = PSC.getRecipeFrom(this.bpmSet);
  this.timer =  60000 / (this.bpm * 8);
  this.offset = 0;
  this.currentPattern = 0;
  this.play = true;
  this.tracksInfo = [];

  this.redrawQuery = 0;

  for( var li = 1; li < 11; li++)
  {
    PMG_BASEPATTERNS.symbals.push([li+"", " ", " ", " "]);
    PMG_BASEPATTERNS.symbals.push([" ", " ", li+"", " "]);
    PMG_BASEPATTERNS.symbals.push([li+"", " ", li+"", " "]);
  }
  var nopat = [" ", " ", " ", " "];
  PMG_BASEINSTRUMENTS.symbals["o"]= wavFolder+"Dry-Kick";
  PMG_BASEINSTRUMENTS.symbals["-"]= wavFolder+"Closed-Hi-Hat-6";
  PMG_BASEINSTRUMENTS.symbals["x"]= wavFolder+"Korg-NS5R-Snare-Drum";
  PMG_BASEPATTERNS.symbals.push(["x", " ", "o", " "]);
  PMG_BASEPATTERNS.symbals.push(["o", " ", "x", " "]);
  PMG_BASEPATTERNS.symbals.push(["x", " ", " ", " "]);
  PMG_BASEPATTERNS.symbals.push(["o", " ", " ", " "]);
  PMG_BASEPATTERNS.symbals.push([" ", " ", "x", " "]);
  PMG_BASEPATTERNS.symbals.push([" ", " ", "o", " "]);
  PMG_BASEPATTERNS.symbals.push(nopat);

  this.patterns= {
    drum: PMG_BASEPATTERNS.drumA,
    chrugs:PMG_BASEPATTERNS.chrugs,
    symbals: PMG_BASEPATTERNS.symbals
  };

  /*
  Create 3 tracks based on preset patterns and instruments: Drums, Chrugs, and symbals.
  */
  this.tracks = [
    new PMG_TRACK_("DRUMS",1, PMG_BASEINSTRUMENTS.drumA, new PMG_STRUCTURE_SET(PMG_BASEPATTERNS.drumA)),
    new PMG_TRACK_("CHRUGS",0.8, PMG_BASEINSTRUMENTS.chrugs, new PMG_STRUCTURE_SET(PMG_BASEPATTERNS.chrugs)),
    new PMG_TRACK_("SYMBALS",1, PMG_BASEINSTRUMENTS.symbals, new PMG_STRUCTURE_SET(PMG_BASEPATTERNS.symbals)),
  ];

  /*
  Calling each track's step.
  */
  this.step = function(timer){
    if(this.play)
    {
      this.currentPattern ++;
      for (var i = 0; i< this.tracks.length; i++)
      {
        this.tracks[i].step(this.currentPattern);
      }
      this.redrawQuery ++;
    }
  }

  /*
  is true every 4 steps.
  */
  this.getRedrawQuery = function(){
    return (!(this.redrawQuery % 4 > 0))?true:false;
  }

  /*
  Retrieve information from the PMG object.
  */
  this.getInfoDump = function(){
    for(var i in this.tracks)
    this.tracksInfo[i] = this.tracks[i].getInfoDump();
    //var tracks =
    return {

      "config":{
        "seed": this.PSC.seed,
        "hash": this.PSC.hash,
        "bpm": this.bpm,
      },
      "track":this.tracksInfo,

    };
  }
  return this;
};
