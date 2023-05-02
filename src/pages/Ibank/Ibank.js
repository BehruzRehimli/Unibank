import "./Ibank.css"
import { Link } from "react-router-dom"
import Logo from "../../images/logo.webp"
import ibank1 from "../../images/ibank1.webp"
import ibank2 from "../../images/ibank2.webp"





export default function Ibank(){

    const Change=function(e){
        let dots=document.querySelectorAll(".dot")
        dots[0].className="dot"
        dots[1].className="dot"
        e.target.className="dot active"

        let slides=document.querySelectorAll(".slide")
        slides[0].className="slide text-start passive"
        slides[1].className="slide text-start passive"

        slides[e.target.id-1].className="slide text-start"


    }

    const ChangeCon=function(e){
        document.querySelector(".fin").style.display="block"
        document.querySelector(".asan2").style.display="none"
        document.querySelector(".like-input.s").classList.remove("first")
        document.querySelector(".like-input.f").classList.add("first")
    }
    const ChangeCon2=function(e){
        document.querySelector(".fin").style.display="none"
        document.querySelector(".asan2").style.display="block"
        document.querySelector(".like-input.s").classList.add("first")
        document.querySelector(".like-input.f").classList.remove("first")
    }


    return (
        <>
        <div className="ibank">
            <div className="conta">
                <div className="header d-flex">
                    <div className="col-lg-6 text-start">
                        <Link to="/">
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className=" right col-lg-6 text-end">
                        <a href="">AZ</a>
                        <a href="">EN</a>
                        <a href="">RU</a>
                    </div>
                </div>
                <div className="ibank-box z d-flex">
                    <div className="left col-lg-6">
                        <div id="1" className="slide text-start">
                        <img src={ibank1} alt="slide" />
                        <h3>Bir ekranda hər şeyi idarə et!</h3>
                        <p>Filiala getmədən, UBank-la bank</p>
                        <p> əməliyyatlarını bir ekranda et!</p>
                        </div>
                        <div id="2" className="slide text-start passive">
                        <img src={ibank2} alt="slide" />
                        <h3>Bir toxunuşla istənilən yerə köçürmə et!</h3>
                        <p>UBank vasitəsilə Western Union, Zolotaya</p>
                        <p>Korona, CONTACT pul köçürmə sistemləri</p>
                        <p>üzərindən toxunuşla dünyanın istənilən</p>
                        <p>nöqtəsinə sürətli pul göndər!</p>
                        </div>
                        <div className="dots">
                        <button onClick={Change}  id="1" className="dot active"></button>
                        <button onClick={Change}  id="2" className="dot"></button>
                    </div>
                    </div>

                    <div className="right col-lg-6">
                    <div className="d-flex justify-content-between">
                            <h3>İnternet Bankçılığa giriş</h3>
                            <u href="#" className="login">Qeydiyyat</u>
                        </div>
                        <div className="d-flex justify-content-between">
                            <img src="https://online.unibank.az/ibank/qrCode?attr=0cfe973a13" alt="" />
                            
                            <div>
                            <div onClick={ChangeCon}  className="like-input f first text-start" style={{marginTop:'20px'}}>
                                <img src="https://online.unibank.az/ibank/resources/imgs/icons/login-mobile.png" alt="phone" />
                                <span className="ms-3 ">Fin kod ilə</span>
                            </div>
                            <div onClick={ChangeCon2} className="like-input s text-start">
                            <img className="asan" src="https://online.unibank.az/ibank/resources/imgs/icons/asan.png" alt="asan" />
                                <span className="ms-3">Asan İmza</span>
                            </div>
                            </div>
                        </div>
                        <p className="alert"><img style={{width:"23px",height:"23px",color:"grey", marginRight:"15px"}} src="	https://online.unibank.az/ibank/resources/imgs/icons/login-info.png" alt="icon" /> QR kod ilə giriş üçün UBank-dan istifadə et</p>

                        <div style={{display:'none'}}  className="group fin">
                            <img src="https://online.unibank.az/ibank/resources/imgs/icons/account.png" alt="" />
                            <img className="second" src="https://online.unibank.az/ibank/resources/imgs/icons/lock.png" alt="" />
                        <input className="inpu" type="text" maxLength={13} autoComplete="off" required />
                        <label className="first">Şəxsiyyət vəsiqəsinin FİN kodu</label>
                        <input className="inpu second-in" type="text"  />
                        <label className="second" >Şifrə</label>
                        <input className="inpu third-in"></input>
                        <label className="third">Kodu daxil edin</label>
                        <span className="third-key">j3tlw</span>
                        <a href="#" className="forget">Şifrəni unutmusuz?</a>
                        <div style={{position:"relative"}}>
                        <button className="form-btn">Daxil ol </button>
                        <img className="right-arrow" src="https://online.unibank.az/ibank/resources/imgs/icons/arrow-right-login.png" alt="right-arrow" />
                        </div>
                        </div>
                        <div  className="group asan2">
                            <img src="https://online.unibank.az/ibank/resources/imgs/icons/login-mobile.png" alt="" />
                            <img className="second" src="https://online.unibank.az/ibank/resources/imgs/icons/asan-key.png" alt="" />
                        <input className="inpu" type="text" maxLength={13} autoComplete="off" required />
                        <label className="first">Mobil nömrə</label>
                        <input className="inpu second-in" type="text"  />
                        <label className="second" >Istifadəçi İd-si</label>

                        <div style={{position:"relative",width:'50%'}}>
                        <button  className="form-btn">Daxil ol </button>
                        <img  className="right-arrow " src="https://online.unibank.az/ibank/resources/imgs/icons/arrow-right-login.png" alt="right-arrow" />
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        </>

    )
}