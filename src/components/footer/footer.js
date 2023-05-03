import "./footer.css"
import "../bootstrap.css"
import { Link } from "react-router-dom"


export default function Footer(){
    if (localStorage.getItem("dark")==true) {
        document.body.style.backgroundColor="black"
        let h5=document.querySelectorAll("h5")
        for(let x of h5){
            x.style.color="white"
        }
        let h6=document.querySelectorAll("h6")
        for(let x of h6){
            x.style.color="white"
        }
        let b=document.querySelectorAll("b")
        for(let x of b){
            x.style.color="white"
        }
        let a=document.querySelectorAll("a")
        for(let x of a){
            x.style.color="white"
        }
        let h4=document.querySelectorAll("h4")
        for(let x of h4){
            x.style.color="white"
        }
        let p=document.querySelectorAll("p")
        for(let x of p){
            x.style.color="white"
        }
        let span=document.querySelectorAll("span")
        for(let x of span){
            x.style.color="white"
        }
        let box=document.querySelectorAll(".box")
        for(let x of box){
            x.style.backgroundColor="#1a1a1a"
        }
        let z=document.querySelectorAll(".z")
        for(let x of z){
            x.style.backgroundColor="#1a1a1a"
        }
        
        document.querySelector("header").style.backgroundColor="black"
        document.querySelector(".bottom-header").style.backgroundColor="black"

    }



    return(
        <>
        <div className="massege">
        <svg color="inherit" viewBox="0 0 32 32" class="css-1mpchac"><path fill="#FF6B00" d="M12.63,26.46H8.83a6.61,6.61,0,0,1-6.65-6.07,89.05,89.05,0,0,1,0-11.2A6.5,6.5,0,0,1,8.23,3.25a121.62,121.62,0,0,1,15.51,0A6.51,6.51,0,0,1,29.8,9.19a77.53,77.53,0,0,1,0,11.2,6.61,6.61,0,0,1-6.66,6.07H19.48L12.63,31V26.46"></path><path fill="#ffffff" d="M19.57,21.68h3.67a2.08,2.08,0,0,0,2.11-1.81,89.86,89.86,0,0,0,0-10.38,1.9,1.9,0,0,0-1.84-1.74,113.15,113.15,0,0,0-15,0A1.9,1.9,0,0,0,6.71,9.49a74.92,74.92,0,0,0-.06,10.38,2,2,0,0,0,2.1,1.81h3.81V26.5Z" class="css-1adcsh3 eam5rsy0"></path></svg>
        </div>
        <footer>
            <div className="container py-4">
                <div className="top-footer">
                    <div className="text-start">
                        <Link to={ "/cards"}><b>Kartlar</b></Link>
                        <br />
                        <Link to={"./cards"}>Kartlar</Link><br />
                        <a>Debet kartlar</a><br />
                        <a>Digər</a>
                    </div>
                    <div className="text-start">
                        <a><b>Kreditlər</b> </a><br />
                        <a >Nağd</a><br />
                        <a >Mikro</a><br />
                        <a >İpoteka</a>
                    </div>
                    <div className="text-start">
                    <a><b>Əmanətlər</b> </a><br />
                        <a >Müddətli</a><br />
                        <a >Proqressiv</a><br />
                        <a >Yığım</a><br />
                        <a >Faizlər əvvəlcədən</a><br />
                        <a >Topla</a>
                    </div>
                    <div className="text-start">
                    <a><b>Köçürmələr</b> </a><br />
                        <a >Ölkəxarici</a><br />
                        <a >Ölkədaxili</a><br />
                    </div>
                    <div className="text-start">
                    <a><b>Rəqəmsal bankçılıq</b> </a><br />
                        <a >UBank</a><br />
                        <a >İnternet bankçılıq</a><br />
                        <a >Şəxsi kabinet</a><br />
                        <a >Unimiles şəxsi kabinet</a><br />
                        <a >Onlayn kredit ödənişi</a><br />
                        <a >Onlayn kredit müraciəti</a>
                    </div>
                    <div className="text-start">
                    <a><b>Əlavə xidmətlər</b> </a><br />
                        <a >Hesablaşma-kassa xidməti</a><br />
                        <a >POS terminal / Smart kassa</a><br />
                        <a >Depozit qutuları</a><br />
                        <a >Onlayn ticarət (eCommerce)</a><br />
                    </div>
                    <div className="text-start">
                    <a><b>Rəqəmsal bankçılıq</b> </a><br />
                        <a >Rəhbərlik</a><br />
                        <a >Müxbir hesablar</a><br />
                        <a >Təklif və Şikayətlər</a><br />
                        <a >İnsan resursları</a><br />
                        <a >Hesabatlar</a><br />
                        <a >Digər sənədlər</a>
                    </div>
                </div>
                <div className="my-4 icons d-flex pt-4">
                <a href="https://apps.apple.com/ru/app/unibank-mobile/id1073632425"><i class="fa-brands fa-apple"></i></a>
                <a href="https://play.google.com/store/apps/details?id=az.unibank.mbanking">
                <span class="material-symbols-outlined">
                adb
                </span>
                </a>
                <a href="https://www.facebook.com/unibank.az/" className="web"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/unibank" className="web"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/company/unibankazerbaijan/" className="web"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/c/UnibankAze" className="web"><i class="fa-brands fa-youtube"></i> </a>
                <a href="https://www.instagram.com/unibank.az/" className="web">
                <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://t.me/UnibankAZ" className="web">
                <i class="fa-brands fa-telegram"></i>
                </a>
                </div >
                <div className="line mt-3 mb-4"></div>
                <div className="bottom-footer">
                    <div className="portniors">
                        <a href="https://www.adif.az/" target="blank" id="first">
                        </a>
                        <a href="https://www.e-gov.az/" target="blank" id="second"></a>
                        <a href="https://infobank.az/" target="blank" id="third"></a>
                        <a href="https://bizimpullar.az/" target="blank" id="fourth"></a>
                    </div>
                    <div>
                        <p id="top">© <span>2023</span>, Unibank - Sənin Bankın</p>
                        <p id="bottom">Bütün hüquqlar qorunur.</p>
                    </div>

                </div>  
            </div>  
        </footer>
        </>

    )
}