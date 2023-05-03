import "./header.css"
import "../bootstrap.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header(){
    let x=`<span class="material-symbols-outlined moonx">sleep</span>`
    let y=`<span class="material-symbols-outlined sunx">wb_sunny</span>`
    let sideOpen=false;
    let searchOpen=false;

    const Close= function(e){
        e.target.parentElement.parentElement.parentElement.style.display="none"
        searchOpen=false;
        document.body.style.overflowY="auto"

    }
    const Open=function(e){
        searchOpen=!searchOpen
        let search=document.querySelector(".search");
        if (searchOpen===true) {
            search.style.display="block"
            document.body.style.overflowY="hidden"
        }
        else{
            search.style.display="none"
            document.body.style.overflowY="auto"

        }
    }

    const [isDark,setIsDark]=useState(true);
    localStorage.setItem("dark",true);

    const darkMode=function(){
        let isDrak= localStorage.getItem("dark")
        if(isDark==true){
            localStorage.setItem("dark",false)
        }
        else{
            localStorage.setItem("dark",true)
        }
        if (isDark) {
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
                x.style.color="white"
            }
            
            document.querySelector("header").style.backgroundColor="black"
            document.querySelector(".bottom-header").style.backgroundColor="black"
    
    
        }
        else{
            document.body.style.backgroundColor=""
            let h5=document.querySelectorAll("h5")
            for(let x of h5){
                x.style.color=""
            }
            let h6=document.querySelectorAll("h6")
            for(let x of h6){
                x.style.color=""
            }
            let b=document.querySelectorAll("b")
            for(let x of b){
                x.style.color=""
            }
            let a=document.querySelectorAll("a")
            for(let x of a){
                x.style.color=""
            }
            let h4=document.querySelectorAll("h4")
            for(let x of h4){
                x.style.color=""
            }
            let p=document.querySelectorAll("p")
            for(let x of p){
                x.style.color=""
            }
            let span=document.querySelectorAll("span")
            for(let x of span){
                x.style.color=""
            }
            let box=document.querySelectorAll(".box")
            for(let x of box){
                x.style.backgroundColor=""
            }
            let z=document.querySelectorAll(".z")
            for(let x of z){
                x.style.backgroundColor=""
                x.style.color=""
            }

            
            document.querySelector("header").style.backgroundColor=""
            document.querySelector(".bottom-header").style.backgroundColor=""
    
    

        }
        setIsDark(!isDark);

    }

    const sideBar=function(e){
        if (sideOpen===false) {
            sideOpen=true
        }
        else{
            sideOpen=false
        }



        if(sideOpen===true){
            let sideMenu=document.querySelector(".side-bar")
            sideMenu.style.display="block"
            sideMenu.style.height="87vh"
            document.querySelector("main").style.display="none"
            document.querySelector("footer").style.display="none"
        }
        else{
            let sideMenu=document.querySelector(".side-bar")
            sideMenu.style.display="none"
            sideMenu.style.height="0"
            document.querySelector("main").style.display="block"
            document.querySelector("footer").style.display="block"        
        }


    }



    return (
        <header>
            <div className="top-header">
            <div className="search " style={{display:'none'}}>
                <div className="main-search">
                <div><i onClick={Close} style={{fontSize:'25px',cursor:'pointer'}} class="fa-solid fa-xmark"></i></div>
            <h4 style={{fontWeight:"400",marginTop:'30px'}}>Axtarış</h4>
            <div style={{position:'relative',width:'40%',textAlign:'center',margin:'0 auto'}}>
                <input  type="text" />
                <i style={{position:"absolute",right:'30px',bottom:'45px',color:'#ff6400'}} class="fa-solid fa-magnifying-glass"></i>
            </div>
                </div>
        </div>
            <div className="container ">
            <div className="d-flex justify-content-between align-items-center">
                <div onClick={sideBar} className="burgermen">
                <i class="fa-solid fa-bars-staggered"></i>
                </div>
                <div className=" d-flex">
                <Link to="/" className="logo"><img src="	https://unibank.az/assets/images/logonew-orange1.png" alt="Logo" /></Link>
                <nav className="text-start">
                <Link >F.A.Q</Link>
                <Link  to="/services">Xidmət şəbəkəsi</Link>
                <a >Bank haqqında</a>
                <a >Keşbek</a>
                <a >Tariflər</a>
                <Link to="/human">İnsan Resursları</Link>
                <a >Bankla əlaqə və təkliflər</a>
                </nav>

                </div>
                    <div className="top-right">
                    <button className="sel sel-active z">Fərdi</button>
                    <button className="sel z">Biznes</button>
                    <button className="moon x" id="mode-btn" onClick={darkMode}>
                    <span className="material-symbols-outlined moonx">
                    sleep
                    </span>
                    </button>
                    <button className="language z">ENG</button>
                    <button className="language z">RUS</button>
                    <button onClick={Open} className="z"><i class="fa-solid fa-magnifying-glass z"></i></button>
                </div>
                <div className="phone">
                <i class="fa-solid fa-phone"></i>
                <span>117</span>
                </div>
            </div>
            </div>

        </div>


        <div className="bottom-header">
            <div className="container d-flex justify-content-between align-items-center">
                <nav className="d-flex">
                    <Link className="nav-li" to="/cards">Kartlar</Link>
                    <Link className="nav-li" to="">Kreditlər</Link>
                    <Link className="nav-li" to="">Əmanətlər</Link>
                    <Link className="nav-li" to="">Köçürmələr</Link>
                    <Link className="nav-li" to="">Rəqəmsal bankçılıq</Link>
                    <Link className="nav-li" to="">Əlavə xidmətlər</Link>
                </nav>
                <div className="d-flex">
                    <Link to='/basket' style={{color:'black'}} className="phone z"><i class="fa-solid fa-cart-shopping me-2"></i>Səbət</Link>
                <div className="phone z">
                <i class="fa-solid fa-phone"></i>
                <span className="z" style={{letterSpacing:"-1px"}}>117</span>
                </div>
                <Link to="/ibank" className="">
                <div className="phone z" >
                <i style={{fontSize: "17px"}} class="fa-sharp fa-solid fa-circle-arrow-right"></i>
                <span className="z">Internet bankçılıq</span>
                </div></Link>
                </div>
            </div>
        </div>
        <div style={{height:"0",transition:"0.6s", display:"none"}} className="side-bar pb-5 pt-3">
            <div className="mt-2">
                    <button className="sel sel-active">Fərdi</button>
                    <button className="sel">Biznes</button>

            </div>
            <Link className="nav-li mt-3" style={{fontSize:'20px',marginRight:"0"}} onClick={sideOpen}  to="/cards">Kartlar</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'20px',marginRight:"0"}} onClick={sideOpen}>Kreditlər</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'20px',marginRight:"0"}} onClick={sideOpen}>Əmanətlər</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'20px',marginRight:"0"}} onClick={sideOpen}>Köçürmələr</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'20px',marginRight:"0"}} onClick={sideOpen}>Rəqəmsal bankçılıq</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'20px',marginRight:"0"}} onClick={sideOpen}>Əlavə xidmətlər</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'15px',fontWeight:"400",color:"grey",marginRight:"0"}} onClick={sideOpen}>F.A.Q</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'15px',fontWeight:"400",color:"grey",marginRight:"0"}} onClick={sideOpen} to="/services">Xidmətlər şəbəkəsi</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'15px',fontWeight:"400",color:"grey",marginRight:"0"}} onClick={sideOpen}>Bank haqqında</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'15px',fontWeight:"400",color:"grey",marginRight:"0"}} onClick={sideOpen}>Keşbek</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'15px',fontWeight:"400",color:"grey",marginRight:"0"}} onClick={sideOpen}>Tariflər</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'15px',fontWeight:"400",color:"grey",marginRight:"0"}} onClick={sideOpen} to="/human">İnsan resursları</Link><br />
            <Link className="nav-li mt-3" style={{fontSize:'15px',fontWeight:"400",color:"grey",marginRight:"0"}} onClick={sideOpen}>Bankla əlaqə və təkliflər</Link><br />
            <div className="d-flex justify-content-center align-items-center mt-2">
                    <button style={{backgroundColor:"black",marginLeft:"0"}}>
                    <span style={{color:'white'}} className="material-symbols-outlined moonx">
                    sleep
                    </span>
                    </button>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>

                    <button className="language">ENG</button>
                    <button className="language">RUS</button>
            </div>
        </div>

        </header>


    )
}

export default Header;