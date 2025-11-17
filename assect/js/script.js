const container = document.getElementById("cardContainer")


// Latest Section daynamic Card 
const cardTemplate = `
     <div class="card-b">
          <div class="card-sound">
              <div class="card-header">
                <img
                  src="/assect/image/card-logo.png"
                  class="card-logo"
                  alt=""
                />
                <p class="card-p">
                  Wood, twig snap in forest, <br />
                  stereo, weaker, smaller
                </p>
              </div>

              <div class="player-controls">
                <button class="d-btn "> <img src="./assect/image/play-btn.png" alt=""></button>

                <div class="audio-container">
                  <img class="duration" class="frame" src="/assect/image/Frame 2147228474.png" alt="">
                  <p>04:15</p>
                  <img class="volume" src="/assect/image/volume-high.png" alt="">
                </div>


              </div>
           

            <div class="action-btn">
              <button class="ac-btn d-btn">
                <img src="/assect/image/download-04.png" alt="" />
              </button>

              <div class="ac-btn">
                <img src="/assect/image/list.png" class="icon" alt="" />
              </div>


              <div class="">
                <img src="/assect/image/information-circle.png" class="icon" alt="" />
              </div>


            </div>
          </div>
        </div>
`

// make 12 card
for (let i = 0; i < 12; i++){
    container.innerHTML += cardTemplate;
}



// Popular Section 2 daynamic Card

document.addEventListener("DOMContentLoaded", () => {
  // card information
    const cardData =[
        {
            img: "/assect/image/popular-I1.png",
            title: "Anime Tones",
            des: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains."
        },
        {
            img: "/assect/image/popular-I2.png",
            title: "Plasma Core Sampler",
            des: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains."
        },
        {
            img: "/assect/image/popular-I3.png",
            title: "Sci-Fi Ul Tones",
            des: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains."
        },
        {
            img: "/assect/image/popular-I4.png",
            title: "Cellphone Vibrate",
            des: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains."
        },
        {
            img: "/assect/image/popular-I5.png",
            title: "Sci-Fi Computer Tones",
            des: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains."
        },
        {
            img: "/assect/image/popular-I6.png",
            title: "Dark Cinematic Whooshes",
            des: "80 anime tone sound effects to download in both mp3 and wav formats. This dynamic collection of classic anime sound effects contains."
        },    
    ];


    // creat daynamic card using card data
    const cardsWrapper = document.getElementById("cardsWrapper");
    cardsWrapper.innerHTML = cardData.map (card => `
           
          <div class="collection-card">
            <div class="card-img-container">
              <img src="${card.img}" alt="" class="card-img">
            </div>

            <div class="card-container">
              <div class="titel-row">
                <h2 class="">${card.title}</h2>
                <div class="icon-badge">
                  <img src="/assect/image/policy.png" alt="">
                </div>
              </div>
              <p class="card-d">${card.des}</p>
            </div>
            <div class="card-f">
              <button class="read-more-btn">
                Read More
              </button>
            </div>
          </div>
        
        `).join("")
})  

