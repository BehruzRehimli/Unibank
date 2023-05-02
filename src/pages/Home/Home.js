import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from  "./Slider"
import "./Home.css"
import ucart from "../../images/ucard.webp"
import appbar2 from "../../images/appbar2.webp"
import google from'../../images/google.png'
import app from'../../images/app.png'
import appg from'../../images/app-galary.png'
import Dropdown from 'react-bootstrap/Dropdown';
import bitmap from "../../images/Bitmap.webp";
import { useState } from 'react';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"




export default function Home(){
    const [conMenu,setConMenu]=useState(1)

    return(
        <>
        <Header/>
        <main>
        <div>
            <Slider/>
        </div>

        <div className="container">
            <div className="row g-3 my-3">
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="box">
                        <h5>Nağd kreditlər</h5>
                        <h1>16%</h1>
                        <p>-dən başlayaraq</p>
                        <button className='orange'>Sifariş et</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="box">
                        <h5>Əmanətlər</h5>
                        <h1>11%</h1>
                        <p>-dək illik gəlir</p>
                        <button className='orange'>Ətraflı</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="box">
                        <h5>Plastik kartlar</h5>
                        <h1>30%</h1>
                        <p>-dək keşbek xidməti</p>
                        <button className='orange'>Ətraflı</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="box">
                        <h5>Kredit kartı</h5>
                        <h1>40</h1>
                        <p>günədək güzəşt müddəti</p>
                        <button className='orange'>Ətraflı</button>
                    </div>
                </div>
            </div>
            <div className='ucard z'>
                <div className="left">
                    <img src={ucart} alt="card" />
                </div>
                <div className="right">
                    <h1>Sənin kartın - UCarddır!</h1>
                    <p>Bu kart sənə dünyanın istənilən yerində multivalyutalı hesablarla alış-veriş imkanı, 10 000 ₼-dək və 40 günədək faizsiz kredit xətti, 30%-dək keşbek və illik 6%-dək gəlir əldə etmək imkanı verir. Bir sözlə, bütün ehtiyaclar tək kartda!</p>
                    <button className='orange'>Ətraflı</button>
                    <button className='grey '>Portniyorlar</button>
                    <button className='grey'>Şəxsi kabinet</button>
                </div>
            </div>
            <div className='ubank z'>
                <div className="left">
                <h1>UBank</h1>
                    <p>UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən mobil əlavədir. Ödənişlərini banka gəlmədən, telefonunuzda bir toxunuşla həyata keçir!</p>
                    <img src={google} alt="google" />
                    <img src={app} alt="app" />
                    <img src={appg} alt="app-galary" />
                    <br /> <br /> <button className='orange'>Haqqında</button>
                </div>
                <div className="right">
                <img src={appbar2} alt="card" />
                </div>
            </div>
            <div className='valyuta z'>
                <h1 className='mb-5'>Valyuta məzənnələri</h1>
                <div className="row price">
                    <div className='context-menu'>
                        <button id='0' className={conMenu===1? "menu-btn active":"menu-btn"} onClick={(e)=>{
                            setConMenu(1);
                            let options=document.querySelectorAll("#option")
                            options.forEach(x=>x.style.display="none")
                            options[e.target.id].style.display="block"
                            }}>Nağd</button>
                        <button id='1' className={conMenu===2? "menu-btn active":"menu-btn"} onClick={(e)=>{
                            setConMenu(2);
                            let options=document.querySelectorAll("#option")
                            options.forEach(x=>x.style.display="none")
                            options[e.target.id].style.display="block"
                            }}>Nağdsız</button>
                        <button id='2' className={conMenu===3? "menu-btn active":"menu-btn"} onClick={(e)=>{
                            setConMenu(3);
                            let options=document.querySelectorAll("#option")
                            options.forEach(x=>x.style.display="none")
                            options[e.target.id].style.display="block"
                            }}>Kart</button>
                    </div>
                    <div id='option' className="col-lg-4 pe-5">
                        <h5>Nağd</h5>
                        <span>Yeniləndi 25.04.2023</span>
                        <div className='mt-4'>
                            <span className='me-4'>Valyuta</span>
                            <span className='me-5 second'>Alış</span>
                            <span>Satış</span>
                        </div><hr />
                        <div className='d-flex'>
                            <div className='me-5'>
                            <h6>USD</h6>
                            <h6>EUR</h6>
                            <h6>RUB</h6>
                            <h6>GBP</h6>
                            </div>
                            <div className='me-4'>
                                <h6>1.6970 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>1.8463 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>0.0200 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>2.0901 <i class="fa-solid fa-angle-down"></i></h6>
                            </div>
                            
                            <div>
                                <h6>1.7015 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>1.9040 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>0.0213 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>2.1580 <i class="fa-solid fa-angle-down"></i></h6>
                            </div>
                        </div>
                    </div>
                    <div id='option' className="col-lg-4 pe-5">
                        <h5>Nağdsız</h5>
                        <span>Yeniləndi 25.04.2023</span>
                        <div className='mt-4'>
                            <span className='me-4'>Valyuta</span>
                            <span className='me-5 second'>Alış</span>
                            <span>Satış</span>
                        </div><hr />
                        <div className='d-flex'>
                            <div className='me-5'>
                            <h6>USD</h6>
                            <h6>EUR</h6>
                            <h6>RUB</h6>
                            <h6>GBP</h6>
                            </div>
                            <div className='me-4'>
                                <h6>1.6900 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>1.8523 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>0.0200 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>2.0837 <i class="fa-solid fa-angle-down"></i></h6>
                            </div>
                            
                            <div>
                                <h6>1.7025 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>1.9117 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>0.0200 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>2.0837 <i class="fa-solid fa-angle-down"></i></h6>
                            </div>
                        </div>
                    </div>
                    <div id='option' className="col-lg-4 pe-5">
                        <h5>Kart</h5>
                        <span>Yeniləndi 25.04.2023</span>
                        <div className='mt-4'>
                            <span className='me-4'>Valyuta</span>
                            <span className='me-5 second'>Alış</span>
                            <span>Satış</span>
                        </div><hr />
                        <div className='d-flex'>
                            <div className='me-5'>
                            <h6>USD</h6>
                            <h6>EUR</h6>
                            <h6>RUB</h6>
                            <h6>GBP</h6>
                            </div>
                            <div className='me-4'>
                                <h6>1.6915 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>1.8598 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>0.0205 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>2.1007 <i class="fa-solid fa-angle-down"></i></h6>
                            </div>
                            
                            <div>
                                <h6>1.7100 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>1.8974 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>0.0213 <i class="fa-solid fa-angle-down"></i></h6>
                                <h6>2.1431 <i class="fa-solid fa-angle-down"></i></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='colcul my-4' style={{padding:"3rem 2rem",backgroundColor:"white",borderRadius:"10px",display:'flex',flexWrap:'wrap'}}>
                    <div className="left ">
                        <h5>Valyuta kalkulyatoru</h5>
                        <span>Nağd məzənnə əsasında hesablanır</span>
                    </div>
                    <div className="right " >
                        <div className='first '>
                            <input type="text" value={0} />
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              USD
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">RUB</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">GBP</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">USD</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">AZN</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <i class="fa-solid fa-arrow-right-long"></i>
                        <div className='first second'>
                            <input type="text" value={0} />
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                              AZN
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">RUB</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">GBP</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">USD</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">AZN</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>
                </div>

            </div>
            <div className='row my-4 context g-4'>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <a href="">
                        <div className="box">
                            <p className="orange-text text-start">
                            Unibank birinci rübü mənfəətlə başa vurub
                            </p>
                            <p className='text-start content'>
                            “Unibank” KB ASC 2023-cü ilin üzrə maliyyə göstəricilərini açıqlayıb. 31 mart 2023-cü il tarixinə Bankın əməliyyat mənfəəti 15 milyon manat olub. Hesabat dövrü ərzində Bankın məcmu gəlirlərində ciddi artım qeydə alınıb. Dövr ərzində cəmi gəlirlər ötən ilin müvafiq dövrü ilə müqayisədə 56% artaraq, 75...
                            <br /><small>25.04.23</small>
                            </p>
                            
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <a href="">
                        <div className="box">
                            <p className="orange-text text-start">
                            Sənin kartın 1 yaşını qeyd edir
                            </p>
                            <p className='text-start content'>
                            Ölkə bank bazarında ilk olaraq kredit və multivalyutalı debet kartını özündə birləşdirən tək kartın – “Unibank”ın UCard məhsulunun müştərilərin istifadəsinə verilməsindən 1 il ötür. Dörd fərqli valyutada hesabları olan (AZN, USD, EUR, GBP) debet kartını və AZN valyutalı kredit xəttini birləşdirən UCard, hər parametri ilə...                            
                            <br /><small>13.04.23</small>
                            </p>
                            
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <a href="">
                        <div className="box">
                            <p className="orange-text text-start">
                            Unibank kartlarında 200 AZN dövriyyə tələbi ləğv edildi
                            </p>
                            <p className='text-start content'>
                            İndi Unibank kart sahiblərinin ay ərzində yüksək keşbek qazanmaq imkanı daha da artıb. Çünki artıq UCard-la yanacaqdoldurma, kafe-restoran və marketlərdə 5% keşbek qazanmaq üçün 200 manat dövriyyə tələbi yoxdur. Qeyd olunan xidmət və ticarət obyektlərində Apple Pay və Google Pay ilə ödəniş edən UCard...                            
                            <br /><small>25.04.23</small>
                            </p>
                            
                        </div>
                        </a>
                    </div>
                </div>
                <div>
                    <button className='orange'>Bütün xəbərlər</button>
                </div>
                <div className="my-5 about row" >
                    <div className='left box'>
                        <div className="left-content text-start">
                        <h1>Xidmət</h1>
                        <h1>şəbəkəsi</h1>
                        <p>Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər məlumatlar haqqında ətraflı.</p>
                        <button className="orange">
                            Daha ətraflı
                        </button>
                        </div>
                        <div className="right-img ri">
                            <img src={bitmap} alt="photo" />
                        </div>
                    </div>
                    <div className="right box text-start">
                        <h1>Sualın var?</h1>
                        <h1>Bizimlə əlaqə saxla!</h1>
                        <p>Onlayn-məsləhətçi, 117 Çağrı mərkəzi və ya bank filiallarına müraciət et və suallarına cavab al. Rahat və asan!</p>
                        <button className="orange">
                            Daha ətraflı
                        </button>

                    </div>
                </div>
        </div>
        </main>
        <Footer/>
        </>
    )
}