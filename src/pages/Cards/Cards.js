import "./Cards.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Ucard from "../../images/ucard2.webp"
import icons from "../../images/icons.png"
import card2 from "../../images/cart2.jpg"
import card3 from "../../images/cart3.webp"
import card4 from "../../images/cart4.webp"
import card5 from "../../images/cart5.webp"
import card6 from "../../images/cart7.webp"
import card7 from "../../images/cart6.webp"
import card8 from "../../images/cart8.webp"
import card9 from "../../images/cart9.webp"
import card10 from "../../images/cart10.jpg"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function Cards(){
    document.body.style.backgroundColor="white"

    const elaveOlundu = () => {

        toast.success('Məhsul səbətə əlavə olundu !', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    };

    const sebetdeVar = () => {

        toast.error('Məhsul artıq səbətdə var !', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        
    };

    let hasBasket=true;
    const Click=(e)=>{
        hasBasket=true;
        let id=e.target.parentElement.parentElement.id;
        let price=e.target.nextElementSibling.innerHTML;
        let title=e.target.previousElementSibling.previousElementSibling.innerHTML;
        let about=e.target.previousElementSibling.innerHTML;
        let src=e.target.parentElement.previousElementSibling.firstChild.src;
        let baskets=JSON.parse(localStorage.getItem("cards"))
        if (baskets.length===0) {
            baskets.push({
                Id: id,
                Price:price,
                Title: title,
                About: about,
                Src: src,
                Count: 1
            })
            localStorage.setItem("cards",JSON.stringify(baskets))
            elaveOlundu();
        }
        else{
            baskets.map((element)=>{
                if (element.Id===id) {
                    hasBasket=false;
                    element.Count++;
                    localStorage.setItem("cards",JSON.stringify(baskets))
                    sebetdeVar();
                }
            })
            if(hasBasket===true){
                baskets.push({
                    Id: id,
                    Price: price,
                    Title: title,
                    About: about,
                    Src: src,
                    Count: 1
                })
                localStorage.setItem("cards",JSON.stringify(baskets))
                elaveOlundu();
            }
        }
        document.querySelector(".basketCount").innerHTML= baskets.length
    }   




    return(
        <>
            <Header/>
            <main>
                <div className="cards">
                    <div className="container">
                        <div className="mt-3 text-end">
                            <div>
                                <Link to="/basket" className="orange me-3">Səbətə get</Link>
                                <Link to="/basket" className="me-4 " style={{position:'relative'}}><i style={{color:'#ff6400',fontSize:'22px'}} class="fa-solid fa-cart-shopping"></i> <span style={{position:'absolute',top:'-20px',right:"-13px",padding:'0 8px',borderRadius:'50%',backgroundColor:'#fafafa',color:'#ff6400',border:'1px solid #ff6400',fontWeight:'600'}} className="basketCount z">{JSON.parse(localStorage.getItem('cards')).length}</span> </Link>
                            </div>
                        </div>
                    <h1 className=" mt-4">
                    Kartlar
                    </h1>
                    <div id="1" price="5" className="box ucart mb-5">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <img src={Ucard} alt="" />
                    </div>
                    <div id="content" className="col-lg-7 col-md-12 col-sm-12 col-12">
                        <p className="title">Ucard</p>
                        <p className="mt-3 pt-3">UCard - kredit və multivalyutalı debet kartını özündə birləşdirən tək kartdır.</p>
                        <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                        <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        />                        
                        <p className="d-none">5</p>
                        <div className="info-icons d-flex justify-content-between">
                            <div className="icon-box">
                            <i class="fa-solid fa-copy"></i>                            
                            <div className="icon-bottom">
                                <h5 style={{fontSize:'17px',marginBottom:'5px'}}>Multivalyutalı</h5>
                                <h5 style={{fontSize:'17px'}}>tək kart</h5>
                            </div>
                            </div>
                            <div className="icon-box">
                            <i class="fa-regular fa-hourglass"></i>
                            <div className="icon-bottom">
                                <h5 style={{fontSize:'17px',marginBottom:'5px'}}>40 dünədək</h5>
                                <h5 style={{fontSize:'17px'}}>faizsiz kredit</h5>
                            </div>

                            </div>
                            <div className="icon-box">
                            <i class="fa-solid fa-arrow-right-arrow-left"></i>
                            <div className="icon-bottom">
                                <h5 style={{fontSize:'17px',marginBottom:'5px'}}>30%-dək</h5>
                                <h5 style={{fontSize:'17px'}}>keşbek</h5>
                            </div>

                            </div>
                        </div>
                    </div>
                    </div>
                    <h1>Debet kartlar</h1>
                    <div className="row my-5 g-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div id="2" className="box">
                                <div className="carts">
                                <img src={card2} alt="cart-img" />
                                </div>
                                <div className="kart-infos">
                                <p className="title mt-5">Visa Platinum</p>
                                <p id="cart-info" className=" mt-3">Bu kartla hər zaman və hər yerdə yüksək statusunu vurğula! Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir.</p>
                                <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">10</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div id="3" className="box">
                                <div className="carts">
                                <img src={card3} alt="cart-img" />
                                </div>
                                <div className="kart-infos">
                                <p className="title mt-5">Visa Infinite</p>
                                <p id="cart-info" className=" mt-4">Bu kartın sahibi olaraq, hər yerdə ən yaxşı xidmət və eksklüziv imkanlar səni gözləyir. Visa növündə olan bu kartdan olduqca fərqli faydalan.</p>
                                <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">2</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="4" className="box">
                            <div className="carts">
                            <img className="me-5" src={card4} alt="cart-img" />
                            </div>
                            <div className="kart-infos">
                            <p className="title mt-5">Unimiles</p>
                                <p id="cart-info" className=" mt-4">Uçuşa hazır ol! UniMiles kartı ilə nağdsız ödənişlər et, millər topla və milləri istənilən hava yollarının aviabiletinə dəyiş.</p>
                                <button onClick={Click} className="orange mt-4 basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">15</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="5" className="box">
                            <div className="carts">
                            <img src={card5} alt="cart-img" />
                            </div>
                            <div className="kart-infos">
                            <p className="title mt-5">Mastercard Black Edition</p>
                                <p id="cart-info" className="mt-4 ">Bu kartı əldə etməklə geniş səyahət, sığorta və xidmət imkanlarına malik olursan. Sənin yüksək statusunu MasterCard-ın ən nüfuzlu kartlarından biri vurğulayır!</p>
                                <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">3</p>

                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="6" className="box">
                                <div className="carts">
                                <img src={card6} alt="cart-img" />
                                </div>
                                <div className="kart-infos">
                                <p className="title mt-5">Mastercard World Elite</p>
                                <p id="cart-info" className="mt-4">Dünyanın istənilən yerində eksklüziv imkanlar və yüksək xidmət səni gözləyir! Arzularını bu karta həvalə et!</p>
                                <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="mb-5">Digər</h1>
                    <div className="row g-4 mb-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="7" className="box">
                                <div className="carts">
                                <img src={card7} alt="cart-img" />
                                </div>
                                <div className="kart-infos">
                                <p className="title mt-5">Albalı Debet</p>
                                <p id="cart-info" className="mt-4">Bu kartla dünyanın hər bir nöqtəsində rahat alış-veriş, onlayn ödənişlər et və ya rahat nağd pul çıxar.</p>
                                <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>

                                <p className="d-none">5</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="8" className="box">
                                <div className="carts">
                                <img src={card8} alt="cart-img" />
                                </div>
                                <div className="kart-infos">
                                <p className="title mt-5">Albalı</p>
                                <p id="cart-info" className="mt-4">Albalı - 4 bank məhsulunu (kredit, taksit kartı, depozit və debet kartı) özündə birləşdirən beynəlxalq kartdır.</p>
                                <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">7</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="9" className="box">
                                <div className="carts">
                                <img src={card9} alt="cart-img" />
                                </div>
                                <div className="kart-infos">
                                <p className="title mt-5">UCard Gift</p>
                                <p id="cart-info" className="mt-4">UCard Gift-ən çox arzulanan hədiyyə! UCard Gift kartını hədiyyə et!</p>
                                <button onClick={Click} className="orange mt-4 basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">7</p>

                                <button className="grey">Partnyorlar</button>
                                </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div id="10" className="box z">
                                <div className="carts">
                                <img src={card10} alt="cart-img" />
                                </div>
                                <div className="kart-infos">
                                <p className="title mt-5">Digital card</p>
                                <p id="cart-info" className="mt-4 ">Artıq kart sifarişi üçün banka gəlməyə ehtiyac yoxdur. Bu kart ilə hesab açmadan UBank-da, müxtəlif İnternet saytlarda bütün ödənişlərini rahatlıqla edə bilərsən.</p>
                                <button onClick={Click} className="orange basket-btn">Əlavə et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                                <p className="d-none">4</p>

                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
  
 }