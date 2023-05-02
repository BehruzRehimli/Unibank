import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import fourt from "../../images/slider-4.gif"
import third from "../../images/slider-3.webp"
import second from "../../images/slider-2.webp"
import first from "../../images/slide-1.webp"

function Slider() {
  return (
    <div className="container">
            <Carousel>
      <Carousel.Item interval={5000}>
            <div className='cor-item'>
                <div className="cor-left">
                  <img src={first} className='first' alt="" />
                </div>
                <div className="cor-right">
                  <h1>Ləğv olundu!</h1>
                  <p>Artıq UCard-la dünyanın istənilən yanacaqdoldurma, kafe-restoran və marketlərində 5% keşbek qazanmaq üçün 200 AZN dövriyyə tələbi yoxdur!</p>
                  <button>Ətraflı</button>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <div className='cor-item'>
      <div className="cor-left">
      <img src={second} className='second' alt="" />
      </div>
                <div className="cor-right">
                  <h1>Topla</h1>
                  <p>İstənilən arzunu reallaşdır! Hədəfinə ad ver və daxılına pul köçürməyə başla!</p>
                  <button>Ətraflı</button>
                </div>
      </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <div className='cor-item'>
      <div className="cor-left">
      <img src={third} className='third' alt="" />
      </div>
                <div className="cor-right">
                  <h1>Sənin kartın, sənin “art”ın!</h1>
                  <p>UBank-a daxil ol, Apple Wallet / Google Wallet™dakı Unibank kartlarını istədiyin dizayna dəyiş və hamıdan fərqli ol!</p>
                </div>

      </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <div className='cor-item'>
      <div className="cor-left">
        <img src={fourt} className='fourt' alt="" />
      </div>
                <div className="cor-right">
                  <h1>Kartdan karta - pulsuzdur!</h1>
                  <p>Unibank kartlarına limitsiz, ölkədaxili digər bank kartlarına isə 2000 AZN-dək köçürmələri 0% ilə et!</p>
                </div>
      </div>
      </Carousel.Item>
    </Carousel>
    <div class="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1" aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"></button><button type="button" data-bs-target="" aria-label="Slide 4" aria-current="true" class="active"></button></div>
    </div>
  );
  }

export default Slider;