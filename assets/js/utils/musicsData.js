const musicsData = [
	
   {
    musicFile: "Nachtmahr - I hate berlin.mp3",
    albumFile:"Nachtmahr.jpg",
    name:"Mit Vereinten Kräften",
    performer:"I hate Berlin",

  },
 	
	{
    musicFile: "Phosgore - Dein Licht.mp3",
    albumFile:"phosgore.jpg",
    name:"Pestbringer",
    performer:"Dein Licht",

  },
  
  {
    musicFile: "Agonoize   Glaubenskrieger Official Video(MP3_128K).mp3",
    albumFile:"agonize.jpg",
    name:"Ultraviolet Six",
    performer:"Glaubenskrieger",

  },
	
  {
    musicFile: "Lilith Immaculate.mp3",
    albumFile:"Darkly,_Darkly,_Venus_Aversa_cover.jpg",
    name:"Darkly, Darkly, Venus Aversa",
    performer:"Lilith Immaculate",

  },

  {
    musicFile: "Summer Dying Fast.mp3",
    albumFile:"BitterSuitesToSuccubi-cover.jpg",
    name:"Bitter Suites To Succubi",
    performer:"Summer Dying Fast",

  },


  {
    musicFile: "Tonight in flames.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Tonight in flames",

  },

    {
    musicFile: "Cemetery And Sundown.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Cemetery And Sundown",

  },

    {
    musicFile: "the foetus of a new day kicking.mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"The foetus of a new day kicking",

  },


    {
    musicFile: "Temptation (Heaven 17 Cover)  (Featuring Dirty Harry).mp3",
    albumFile:"Thornography - Album - Cover.jpg",
    name:"Thornography",
    performer:"Temptation",
  },

  {
    musicFile: "babymetal - karate.mp3",
    albumFile : "Metal Resistance.jpg",
    name: "Metal Resistance",
    performer:"Karate",
  },

  {
    musicFile: "sorrow - deathgaze.mp3",
    albumFile : "sorrow_album_deathgaze.jpg",
    name: "Sorrow",
    performer:"Sorrow",
  },

  {
    musicFile: "fuck love - all that remains.mp3",
    albumFile : "album_all_that_remains_victim_of_the_new_disease.jpg",
    name: "Victim of the new disease",
    performer:"Fuck love",
  },

  {
    musicFile: "Attila - Party With The Devil.mp3",
    albumFile : "Attila - Album (About that life).jpg",
    name: "About That Life",
    performer:"Party With The Devil",
  },

  {
    musicFile: "NX Zero - Razões E Emoções.mp3",
    albumFile:"NX Zero - Razões E Emoções.jpg",
    name: "Razões E Emoções",
    performer: "Razões e Emoções"
  },

  {
    musicFile: "NX Zero - Cedo Ou Tarde.mp3",
    albumFile:"NX Zero - Razões E Emoções.jpg",
    name: "Razões E Emoções",
    performer: "Cedo ou Tarde"
  },

];

function createMusicWrapper(music, curr) {
  const queueMusic = document.createElement('div');
  const innerContent = `
    <div class="queue__music-album">
      <img src="./assets/images/${music.albumFile}" alt="">
    </div>
    <div class="queue__music-details">
      <h2 class="music-details__name">${music.name}</h2>
      <p class="music-details__performer">${music.performer}</p>
    </div>
    <div class="queue__music-like">
      <i class='bx bxs-heart' id="like-icon"></i>
    </div>
    <div class="queue__music-play">
      <i class='bx bx-play' data-music="${curr}"></i>
    </div>
  `;

  queueMusic.setAttribute('class', 'queue__music');
  queueMusic.innerHTML = innerContent;

  return queueMusic
}

export { musicsData, createMusicWrapper };