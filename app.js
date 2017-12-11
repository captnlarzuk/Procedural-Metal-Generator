var CONFIG = {
  bpb: 4,
  bpmSet: [80, 110, 120, 140 ]
}

function draw_pattern( pattern, count, offset){
  var str = "<div class='pattern'>";
  var playing = " playing"
  var cssclass = ""
  for(var k = 0; k<= pattern.length; k ++)
  {
    if(!(k%4))
      str += "<br />";
    if(typeof pattern[k] !== "undefined")
    for(var l = 0; l< pattern[k].length; l ++)
    {
      cssclass = (count == k && offset == l)?playing:"";
      if((pattern[k][l]==" "))
      str += "<span class='pattern_square pattern_square_empty"+cssclass+"'> </span>";
      else
      str += "<span class='pattern_square pattern_square_full"+cssclass+"'>"+pattern[k][l]+"</span>";
    }
    str += "<br />"
  }
  str +=   "</div>";
  return str;
}

function createSeed(){
  return md5(Math.random());
}
var PMG = new PROCEDURAL_METAL_GENERATOR_(document.getElementById('seedInput').value)  ;
function showInfo()
{
  var str = "<div class='Info'>";
  var info = PMG.getInfoDump();
  var tracks = info.track;
  str += "<h2> Now playing: </h2>"
  + "<ul>"
  + "<li>Seed : " + info.config.seed + "</li>"
  + "<li>Bpm : " + info.config.bpm + "</li>"
  + "</ul>"
  for(i in tracks)
  {
    str += showTrackInfo(tracks[i]);
    str += draw_pattern(tracks[i].pattern,tracks[i].config.patternCount, tracks[i].config.offset );
  }
  str += "</div>";
  return str;
}
function showTrackInfo(track){
  var str = "<div class='trackInfo'>";
  str += "<h2>"+track.name+"</h2>"
  +"<ul>"
  + "<li> BEAT "+track.config.offset+"/"+track.config.patternCount+"</li>"
  + "<li> entropy "+track.structureInfo.config.entropy+"</li>"
  + "<li> repeat "+track.structureInfo.config.repeat+"</li>"
  + "<li> offset "+track.structureInfo.config.offset+"</li>"
  +"</ul>";
  str += "</div>";
  return str;
}
function showPatternInfo()
{

}

function start(){
  setTimeout(start, PMG.timer);
  var info = PMG.getInfoDump();
  document.getElementById('show').innerHTML = showInfo();

/*  + "<pre>"+JSON.stringify(info.config, null, "\t")+"</pre>"
  + "<pre>"+JSON.stringify(info.track[0].config, null, "\t")+"</pre>"
  + "<pre>"+JSON.stringify(info.track[0].structureInfo.config, null, "\t")+"</pre>"
  + "<pre>"+JSON.stringify(info.track[1].config, null, "\t")+"</pre>"
  + "<pre>"+JSON.stringify(info.track[1].structureInfo.config, null, "\t")+"</pre>"
  + "<pre>"+JSON.stringify(info.track[2].config, null, "\t")+"</pre>";
  + "<pre>"+JSON.stringify(info.track[2].structureInfo.config, null, "\t")+"</pre>"*/
   PMG.step();
}
