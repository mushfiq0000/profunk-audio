const container = document.getElementById("cardContainer")


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


for (let i = 0; i < 12; i++){
    container.innerHTML += cardTemplate;
}

