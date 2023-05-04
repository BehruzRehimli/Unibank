
export default function Dark(){
    let clickedClass="clicked";
    const body=document.body;
    const lightTheme="light";
    const darkTheme="dark";
    let theme;

    if (localStorage) {
        theme= localStorage.getItem('theme');
    }
    if(theme===lightTheme || theme === darkTheme){
        body.classList.add(theme);
    }
    else{
        body.classList.add(lightTheme);
    }

    const switchTheme=(e)=>{
        if (theme===darkTheme) {
            body.classList.replace(darkTheme,lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem ("theme","light");
            theme=lightTheme;
            document.querySelector('.moon').style.display="none"
            document.querySelector('.sun').style.display="inline-block"

        }
        else{
            body.classList.replace(lightTheme,darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem ("theme","dark");
            theme=darkTheme
            document.querySelector('.moon').style.display="inline-block"
            document.querySelector('.sun').style.display="none"
        }
    }


    return (
        <button className={theme==="dark"? clickedClass : ''} id="darkMode" onClick={(e)=> switchTheme(e)}>
            <span style={{width:'70%',height:'70%',fontSize:'18px',display:'none'}} class="moon material-symbols-outlined">
                light_mode
                </span> 
                <span style={{width:'70%',height:'70%',fontSize:'17px',color:'white'}} class="sun material-symbols-outlined">
                sleep
                </span>  

        </button>

    )

}