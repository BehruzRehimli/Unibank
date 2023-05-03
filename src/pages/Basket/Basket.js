import "./Basket.css"
import { useState } from "react";
import cart1 from "../../images/ucard2.webp"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"



export default function Basket(){
    document.body.style.backgroundColor="white"

    let baskets=JSON.parse(localStorage.getItem("cards"));
    let totalSum=0;
    let totalCount=0;

    const Delete = function(e){
        e.target.parentElement.parentElement.parentElement.parentElement.style.display="none"
        let id=e.target.parentElement.parentElement.parentElement.parentElement.id
        let baskets=JSON.parse(localStorage.getItem('cards'));
        let element=baskets.filter((element)=>element.Id==id);
        totalCount=totalCount-element[0].Count;
        totalSum=totalSum - (element[0].Count * element[0].Price)
        document.querySelector(".total-sum").innerHTML=totalSum + ".00 AZN";
        document.querySelector(".total-count").innerHTML=totalCount
        let newArr = baskets.filter((element)=>element.Id!=id);
        localStorage.setItem("cards",JSON.stringify(newArr));
    }

    const Grow= function(e){
        e.target.parentElement.previousElementSibling.innerHTML++
        let id=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;

        let total=0;
        totalCount++;
        document.querySelector(".total-count").innerHTML=totalCount
        let baskets=JSON.parse(localStorage.getItem("cards"))
        baskets.map((element)=>{

            if (element.Id===id) {
                element.Count++;
                total=element.Price * element.Count
                console.log(typeof totalSum);
                totalSum+=Number(element.Price);
                document.querySelector(".total-sum").innerHTML=totalSum + ".00 AZN";
                document.querySelector(".cart-total-price-"+element.Id).innerHTML=total+" AZN"
            }
        })
        localStorage.setItem("cards",JSON.stringify(baskets))
    }

    const Lower =function(e){
        let count= e.target.parentElement.previousElementSibling.innerHTML;
        if (count>=1) {
        e.target.parentElement.previousElementSibling.innerHTML--;
        let id=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;

        let total=0;
        totalCount-=1;
        document.querySelector(".total-count").innerHTML=totalCount
        let baskets=JSON.parse(localStorage.getItem("cards"))
        baskets.map((element)=>{
            if (element.Id===id) {
                element.Count--;
                total=element.Price * element.Count
                totalSum-=element.Price;
                document.querySelector(".total-sum").innerHTML=totalSum + ".00 AZN";
                document.querySelector(".cart-total-price-"+element.Id).innerHTML=total+" AZN"
            }
        })
        localStorage.setItem("cards",JSON.stringify(baskets))
        }
    }

    if (baskets.length===0) {
        return(
            <>
            <Header/>
            <h1 className="my-5">Səbət boşdur...</h1>
            <Footer/>

            </>
        )
    }

    return (    
        <>
        <Header/>
            <main>
            <div className="container">
            <div className="basket">
                {

                    baskets.map((element)=>{
                        let total=element.Count * element.Price
                        totalSum+=total;
                        totalCount+=element.Count;
                        return(
                            <div id={element.Id} key={element.Id} className="box z mb-3">
                            <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12 col-12">
                                    <img src={element.Src} alt="cart" />
                                </div>
                                <div className="cart-content col-lg-8 col-md-12 col-sm-12 col-12">
                                    <h4 className="mb-3">{element.Title}</h4>
                                    <p>{element.About}</p>
                                </div>
                                <div className="tools col-lg-2 col-md-12 col-sm-12 col-12">
                                    <div>
                                        <small className="count">{element.Count}</small>
                                        <div className="arrows">
                                            <i onClick={Grow} className="trash fa-solid fa-caret-up"></i>
                                            <i  onClick={Lower} className="trash fa-solid fa-caret-down"></i>
                                        </div>
                                        <i onClick={Delete} style={{marginTop:"10px"}} class="trash fa-regular fa-trash-can"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="prices">
                                <p>Məhsulun qiyməti: <b >{element.Price} AZN</b></p>
                                <p>Yekun məbləğ: <b className={"cart-total-price-"+element.Id}>{total} AZN</b> </p>
                            </div>
                        </div>
                        )
                    })
                }
                <h5 className="text-end my-5">Ümumi məhsul sayı: <b style={{fontSize:'22px'}} className="total-count me-3">{totalCount}</b><br /><br /> Total məbləğ: <b  className="total-sum" style={{fontSize:'22px'}}>{totalSum}.00 AZN</b></h5>
            </div>
        </div>
    
                
            </main>        
        <Footer/>
        </>

    )
}