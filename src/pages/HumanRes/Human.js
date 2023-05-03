import "./Human.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Video from "../../video/Un.mp4"



export default function Human(){
    document.body.style.backgroundColor="white"


    const Click=function(e){
        let btns= document.querySelectorAll(".menu-btn");
        for(let element of btns){
            element.classList.remove("active")
        }
        btns[e.target.id-1].classList.add("active")
        let options=document.querySelectorAll(".option");
        options.forEach(x=>x.style.display="none");
        options[e.target.id-1].style.display="block";
    }

    const PlayVideo = function(e){
        if (e.target===document.querySelector(".video-area")) {
            e.target.style.display="none"
            let video= document.querySelector(".vid")
            video.style.display="block"
            video.play();
        }
        else{
            e.target.parentElement.style.display="none"
            let video= document.querySelector(".vid")
            video.style.display="block"
            video.play();
        }


    }


    let vacacy=[
        {
            title:'İlkin təqib şöbəsinə kiçik mütəxəssis',
            deadline:"20.05.2023"
        },        {
            title:'Təşkilati işlər və katiblik şöbəsinin aparıcı mütəxəssisi',
            deadline:"20.05.2023"
        },        {
            title:'Mikro kreditlərin monitorinqi üzrə Mütəxəssis/ Aparıcı mütəxəssis',
            deadline:"06.06.2023"
        },        {
            title:'Bazar riskləri üzrə təcrübə proqramı',
            deadline:"06.06.2023"
        },        {
            title:'Mikro kreditlər üzrə mütəxəssis (Quba filialı)',
            deadline:"04.06.2023"
        },        {
            title:'Mikro kreditlər üzrə mütəxəssis (Bərdə filialı)',
            deadline:"31.05.2023"
        },        {
            title:'Əməliyyat sistemləri üzrə mütəxəssis (System administrator)',
            deadline:"24.05.2023"
        },        {
            title:'Kassa xidmətləri üzrə kiçik Mütəxəssis',
            deadline:"24.05.2023"
        },        {
            title:'Senior/Middle QA Engineer',
            deadline:"23.05.2023"
        },        {
            title:'Proqramlaşdırma departamentinə dəstək üzrə mütəxəssis',
            deadline:"21.05.2023"
        },        {
            title:'Kassa xidmətləri üzrə kiçik mütəxəssis (Gəncə filialı)',
            deadline:"22.05.2023"
        },        {
            title:'Kart çatdırılması xidməti üzrə nümayəndə',
            deadline:"21.05.2023"
        },    {
            title:'Korporativ Kreditlər üzrə Mütəxəssis (Salyan)',
            deadline:"17.05.2023"
        },    {
            title:'Mikro kreditlər üzrə mütəxəssis (Bakı-Abşeron)',
            deadline:"17.05.2023"
        },    {
            title:'Mikro kreditlər üzrə mütəxəssis (Mingəçevir)',
            deadline:"17.05.2023"
        },    {
            title:'Mikro kreditlər üzrə mütəxəssis (Şəki)',
            deadline:"17.05.2023"
        },    {
            title:'Mikro kreditlər üzrə mütəxəssis (Tovuz filialı)',
            deadline:"17.05.2023"
        },    {
            title:'Korporativ kreditlər üzrə kiçik mütəxəssis (Bərdə)',
            deadline:"09.05.2023"
        },
    ]


    return(
        <>
        <Header/>
            <main>
             <div className="human">
                <div className="container">
                <h1 className="text-start">İnsan resursları</h1>
                <div className="text-start btns">
                    <button id="1" className="menu-btn active" onClick={Click}>Ümumi məlumat</button>
                    <button id="2" className="menu-btn" onClick={Click}>Vakansiyalar</button>
                    <button id="3" className="menu-btn" onClick={Click}>Unibankda çalışmaq</button>
                    <button id="4" className="menu-btn" onClick={Click}>İşə qəbul prosesi</button>
                    <button id="5" className="menu-btn" onClick={Click}>Təlim və inkişaf</button>
                </div>

                <div className="option" id="1">
                    <video className="vid" width="100%" height="400px" controls>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <div  onClick={PlayVideo} style={{cursor:"pointer"}} className="video-area">
                    <span class="material-symbols-outlined">
                    play_circle
                    </span>
                    </div>
                    <div className="row g-4 my-4">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="box x dif">
                                <div style={{height:'28%'}} className="mb-3">
                                <span class="material-symbols-outlined">
                                edit_document
                                </span>
                                </div>
                                <div>
                                    <h5>Vakansiyalar</h5>
                                    <p>
                                    Unibankda 50-dən çox karyera istiqaməti mövcuddur. Hazırda mövcud vakansiyalar barədə ətraflı məlumat əldə edin. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="box dif">
                                <div style={{height:'28%'}} className="mb-3">
                                <i class="fa-solid fa-people-group"></i>
                                </div>
                                <div>
                                    <h5>Unibankda çalışmaq</h5>
                                    <p>
                                    Ölkənin ən nüfuzlu şirkətlərindən birində çalışmaq, öz karyera arzularını reallaşdırmaq istəyirsənsə - Unibank məhz sənin bankındır! Gələcək inkişafını Unibankla başla! </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="box dif">
                                <div style={{height:'28%'}} className="mb-3">
                                <span class="material-symbols-outlined">
                                lab_profile
                                </span>                                
                                </div>
                                <div>
                                    <h5>İşə qəbul prosesi</h5>
                                    <p>
                                    Müraciət etdiyiniz vakansiyadan asılı olaraq işə qəbul prosesimiz fərqlənə bilər. Test mərhələsində sizi nələr gözlədiyini və müsahibələrdə hansı məqamlara diqqət yetirməli olduğunuzu öyrənin. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="box dif">
                                <div style={{height:'28%'}} className="mb-3">
                                <span class="material-symbols-outlined">
                                fact_check
                                </span>                                
                                </div>
                                <div>
                                    <h5>Təlim və inkişaf</h5>
                                    <p>
                                    Karyera və iş həyatınız boyu Təlim və İnkişaf Mərkəzi əsas dostunuz və yol yoldaşınız olacaq!  </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="box dif">
                                <div style={{height:'28%'}} className="mb-3">
                                <i class="fa-solid fa-graduation-cap"></i>                            
                                </div>
                                <div>
                                    <h5>Təcrübə proqramları</h5>
                                    <p>
                                    Təcrübə proqramları müxtəlif istiqamətlərdə və müxtəlif müddətlərdə olur. Təcrübə müddəti maksimal olaraq 3 ay ərzində keçirilir.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="box dif">
                                <div style={{height:'28%'}} className="mb-3">
                                <i class="fa-solid fa-signs-post"></i>                                
                                </div>
                                <div>
                                    <h5>İstiqamətlər</h5>
                                    <p>
                                    Karyeranızı məhz bank sektorunda qurmaq istəyir, öz gücünüzə və potensialınıza inanırsınızsa, Unibank Sizi öz karyera seçiminizi etməyə dəvət edir.   </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="box text-start">
                                <img className="mb-3" style={{display:"block",width:"106px",height:"106px",borderRadius:'50%'}} src="https://unibank.az/uploads/articles/o_1d0juoufe1dl214ssvb01ijbvjua.jpg" alt="employee" />
                                <h5>Eldar Qəribov</h5>
                            <p className="grey-txt">Müşahidə Şurasının sədri</p>
                            <p>Unibankda gənc mütəxəssislərin özlərini reallaşdırmaları, peşə vərdişlərini, ixtisaslarını artırmaları üçün hər cür şərait yaradılıb. İllər boyu Unibank minlərlə əməkdaşın təkcə iş yeri deyil, həm də onların Məktəbi və İnkişaf Mərkəzi olub. Məhz biz səhmdarlar üçün şirkətin əsas dəyəri onun İnsan Kapitalı, Komandasıdır.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="box text-start">
                                <img className="mb-3" style={{display:"block",width:"106px",height:"106px",borderRadius:'50%'}} src="	https://unibank.az/uploads/articles/o_1d0juqc4l1vakbauvj3k1a3r0a.jpg" alt="employee" />
                                <h5>Faiq Hüseynov</h5>
                            <p className="grey-txt">Müşahidə Şurası sədrinin müavini</p>
                            <p>Unibank həmişə gənc mütəxəssislər üçün uğurlu karyera ünvanı olub. Fəaliyyət göstərdiyi 30 ildən artıq dövrdə Unibank məktəbində yetişmiş minlərlə kadr, bacarıqlı mütəxəssisləridir. Bankın komanda ruhunun gücləndirilməsi, möhkəmləndirilməsi rəhbərlik üçün hər zaman vacib prioritet vəzifələrdən biridir.</p>
                            </div>

                        </div>
                    </div>
                    <div className="box mt-4 text-start">
                        <h1 style={{letterSpacing:"0",marginTop:"0"}}>Haqqımızda</h1>
                        <p style={{marginBottom:'30px',fontSize:"15px"}}>Unibank yarandığı ilk gündən etibarən insan resurslarının inkişafını əsas prioritetlərdən biri kimi qəbul etmişdir. Ümumilikdə bank öz əməkdaşlarına resurs deyil, kapital kimi baxmasına üstünlük verir. Məhz bizim komandamız bizim əsas kapitalımız və dəyərimizdir. İllər boyu formalaşan bu dəyər Unibank dəfələrlə ölkənin bank bazarıda müxtəlif istiqamətlərdə birincilər sırasına gətirmişdir. Əsas qazancımız isə bir daha insan kapitalımızın verdiyi dəyər olub.</p>
                        <p style={{fonts:"15px"}}>Unibank insan kapitalına dair öz strategiyasını əməkdaşın ilk günündən, habelə təcrübə proqramından başlayaraq start verərək, onun sonraki karyera inkişafını planlayır. Müxtəlif vəzifələr üzrə karyera inkişafı planlaşdırılması, o cümlədən əməkdaşların şəxsi və profesional kompetensiyaların artırılması istiqamətində təlim və inkişafı, o cümlədən onların liderlik və idarə etmə kimi bacarıqlarının inkişafıda əsas prioritetlərimizdən biridir. Daxili talantların idarə edilməsi və tanınması, onların bankdaxili rotasiyalar vasitəsilə inkişaf etdirilməsidə Unibankın insan kapitalının inkişafı üzrə əsas məqamlarındandır. İnsan Kapitalı Bankın 2017-2019cu illəri əks etdirən Strateji Planımızda belə əsas strateji hədəflərindən biri kimi səhmdarlar tərəfindən qəbul edilmişdir.</p>
                    </div>
                    <div className="row my-3 g-4">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="box box-org">
                                <div>
                                <i style={{color:"white"}} class="fa-regular fa-circle-check"></i>
                                </div>
                                <p className="txt">Biliyinizi genişləndirmək üçün hədsiz imkanlar</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="box box-org">
                                <div>
                                <i style={{color:"white"}} class="fa-regular fa-circle-check"></i>
                                </div>
                                <p className="txt">Güclü komandanın bir parçası olmaq</p>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="box box-org">
                                <div>
                                <i style={{color:"white"}} class="fa-regular fa-circle-check"></i>
                                </div>
                                <p className="txt">Bank Məktəbində çalışmaq imkanı</p>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="box box-org">
                                <div>
                                <i style={{color:"white"}} class="fa-regular fa-circle-check"></i>
                                </div>
                                <p className="txt">Ölkənin aparıcı şirkətlərindən birində uğur yolunuzun binövrəsini qurmaq</p>
                            </div>

                        </div>
                    </div>
                    <h1 className="text-start mt-5">
                    Dəyərlərimiz
                    </h1>

                    <div className="row g-4 mb-5 mt-3">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 text-start">
                            <h5>Etibarlılıq</h5>
                            <p style={{fontSize:"15px"}}>Ölkəmiz, müştərilərimiz, partnyorlarımız, işçilərimiz üçün daim etibarlı bank olmaq bizim dəyərlərimizdən biridir.</p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 text-start">
                            <h5>İnnovativlik</h5>
                            <p style={{fontSize:"15px"}}>
                            Müştərilərimizin vaxtına qənaət edərək, onlara innovativ məhsul və xidmətləri təklif etməklə, dəyərlərinə dəyər qatmaq əsas prioritetlərimizdəndir. Biz inkişafın nəbzini tuturuq!
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 text-start">
                            <h5>
                            Bank Məktəbi
                            </h5>
                            <p style={{fontSize:"15px"}}>
                            30 ildən artıq fəaliyyətimiz dövründə bank sektoruna minlərlə peşəkar bank işçisi verməyimiz, insan kapitalını hər zaman ön planda tutmağımızla qürur duyuruq!
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 text-start">
                            <h5>
                            Komanda
                            </h5>
                            <p style={{fontSize:"15px"}}>
                            Hədəflərimizə doğru daim bir komanda ruhunda çalışmaq, səmimi, hər kəs üçün faydalı, ailə dəyərlərinə malik komanda olmaqda davam etmək, əsas vəzifələrimizdəndir.Biz komandamızın qələbəsinə inanırıq!
                            </p>
                        </div>
                    </div>
                    </div>
                <div className="option" style={{display:"none"}} id="2">
                    {
                        vacacy.map((element)=>{
                            return                     <div className="box vacancy-box mt-3 text-start">
                            <div className="text-start">
                                <h5>{element.title}</h5>
                                <p style={{paddingBottom:"0"}} className="grey-txt">Son müraciət tarixi: {element.deadline}</p>
                            </div>
                            <button className="orange basket-btn">Müraciət et <i style={{color:"white"}} class="fa-solid fa-arrow-right-long"></i></button>
                        </div>
    
                        })
                    } <br /><br /><br />
                </div>
                <div className="option" style={{display:"none"}} id="3">
                    <div className="head">
                        <div className="left">
                            <img src="https://unibank.az/uploads/menus/o_1dc3tt2c01dqlbf7qd711ag1cnqa.png" alt="photo" />
                        </div>
                        <div className="right">
                            <h1>
                            Unibankda çalışmaq
                            </h1>
                            <p>
                            Xəyal etdiyin karyeranı məhz Unibankda qur!
                            </p>
                        </div>
                    </div>
                    <p className="text-start my-3">Uğurlarımızın mərkəzində dayanan vacib amillərdən biri əməkdaşlarımızın məmnuniyyətidir. Bu səbəbdən, Unibankda əməkdaşın öz bacarığını kəşf edib, özünü Unibank ailəsinin ayrılmaz bir hissəsi olaraq hiss edəcəyi, inkişafa açıq iş mühiti yaradılmışdır.</p>
                    <img width="100%" src="https://unibank.az/files/puzlle4.jpg" alt="" />
                    <p className="text-start my-3">Zəhmətin qiymətləndirildiyi, iş və şəxsi həyatda bir çox sosyal imkanlara sahib olacağınız Unibankda, bank daxili keçirilən müxtəlif layihələrin əsas məqsədi əməkdaşların sosiallaşmasının artırılması, yeni dostluqların yaradılması, onların gərgin iş saatlarından sonra istirahətlərinin məzmunlu keçirilməsidir.</p>
                    <h2 className="mt-5">Tədbirlərimiz</h2>
                    <div className="row g-5 mb-3 mt-1">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <img className="human-img" width="100%" src="https://unibank.az/site/uploads/articles/event-listing/o_1cnjgmv8s1gnf14v21btc129t1ef9a.jpg" alt="" />
                            <h5 className="mt-3" style={{marginBottom:"0",fontSize:"17px"}}>Müştəriyə Yönlənmiş Xidmətin Əsasları</h5>
                            <div className="grey-text txt">21.07.2018</div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <img className="human-img" width="100%" src="	https://unibank.az/site/uploads/articles/event-listing/o_1cnjgt9a724t1sq710211l751juaa.jpg" alt="" />
                            <h5 className="mt-3" style={{marginBottom:"0",fontSize:"17px"}}>UniTalent Debate Tournament</h5>
                            <div className="grey-text txt">13.07.2018</div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <img className="human-img" width="100%" src="https://unibank.az/site/uploads/articles/event-listing/o_1cnjh38um18ej1mul10lctja1b6na.jpg" alt="" />
                            <h5 className="mt-3" style={{marginBottom:"0",fontSize:"17px"}}>English Language
                                Classes</h5>
                            <div className="grey-text txt">22.08.2018</div>

                        </div>
                    <h2 className="mt-5">İnsan kapitalımız</h2>
                    <div className="portre" style={{width:'25%',textAlign:"center", margin:'0 auto'}}>
                    <img style={{width:"150px",height:"150px",borderRadius:"50%",display:"block",textAlign:"center",margin:'40px auto 10px'}} src="https://unibank.az/uploads/articles/o_1cn9gbc6e17q71umb9mp60d4kna.jpg" alt="" />
                    <h4>Anar Allahverdiyev</h4>
                    <p className="grey-text txt">"Qeyri-filial müraciətləri" şöbəsinin müdiri</p>

                    </div>
                    <p style={{marginTop:"20px",marginBottom:"100px"}}>
                    2012-ci ildə Unibankın “Nərimanov” filialında istehlak kreditləri üzrə mütəxəssis kimi işə başlamışam, sonra aparıcı mütəxəssis, baş mütəxəssis, bölmə rəhbəri və şöbə müdiri vəzifələrinə keçdim. Hazırda isə Pərakəndə satış və xidmət departamentinin "Qeyri-filial müraciətləri" şöbəsinin müdiri vəzifəsini icra edirəm. Əldə etdiyim uğurlar bu illər ərzində çəkilən əziyyətin, işimə sevgimin və təbii ki, rəhbərliyin etimadının nəticəsidir. Unibank mənim üçün bir məktəbdir, bizə işin incəliklərini, komanda olmağı, komanda ruhunda işləməyi öyrədib, yeni dostluqlar qazandırıb. Unibank professionallarla işləmə və onlardan təcrübə qazanmaq imkanı yaratmaqla, işçilərinin peşəkar kimi formalaşmasına və vəzifə artımına münasib şərait yaradır. Bundan sonra da daim öz üzərimdə işləyib, yeni biliklər, bacarıqlar qazanmaq, məhsuldarlığımı və professionallığımı artırmaq niyyətindəyəm.
                    </p>

                    </div>
                </div>
                <div className="option" style={{display:"none"}} id="4">
                <div className="head">
                        <div className="left">
                            <img src="https://unibank.az/uploads/menus/o_1cnbvhchh3ro1ksc1ejtu9n14naa.png" alt="photo" />
                        </div>
                        <div className="right">
                            <h1>
                            İşə qəbul prosesi
                            </h1>
                            <p>
                            Müsahibə zamanı özünə əmin olmaq üçün nələri etməlisən?                            
                            </p>
                        </div>
                    </div>
                    <p className="text-start mt-5" style={{marginBottom:"25px"}}>Işə qəbul prosesi:</p>
                    <p className="text-start" style={{marginBottom:"20px"}}>İlk olaraq,  vakansiyalar bölməsindən sizin bacarıq və təcrübənizə ən çox uyğun olan vəzifəni tapmağınız, müraciət et düyməsi ilə öz tərcümeyi-hal/CV-nizi bizim insan resursları departamentinə göndərməyiniz tələb olunur. </p>
                    <p className="text-start" style={{marginBottom:"20px"}}>Növbəti mərhələdə, müraciət etdiyiniz vakansiyanın tələbləri ilə təcrübə və bacarıqlarınızın uyğunluğu insan resursları əməkdaşlarımız tərəfindən yoxlanılır, axtardığımız keyfiyyətlərə sahib olan namizədlər müraciət edilmiş vakansiyadan asılı olaraq bir və yaxud iki mərhələli test mərhələsinə dəvət alır.  Müraciət edilmiş vakansiyanın növündən asılı olaraq test mərhələsində sizin riyazi, analitik düşünmə və yaxud situasiyaları dəyərləndirmə bacarıqlarınız yoxlanılır. </p>
                    <p className="text-start" style={{marginBottom:"20px"}}>Test mərhələsini uğurla tamamlamış namizədlər bankın baş ofisində aparılan iki mərhələli müsahibə prosesinə dəvət edilir. İlk olaraq insan resursları mütəxəssisləri ilə, növbəti mərhələdə isə namizədin müraciət etdiyi vakansiyaya uyğun olaraq aidiyyatı departamentin mütəxəssisləri ilə müsahibə keçirilir.</p>
                    <div className="row my-4 g-3">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="box">
                            <i class="fa-brands fa-nfc-directional"></i>
                            <h5 style={{marginTop:"20px", fontWeight:"400"}}>Vakansiya <br />
                            seçimi <br />
                            və müraciət</h5>
                            <button className="orange" style={{padding:'16px 25px'}}>1-ci mərtəbə</button>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="box">
                        <i class="fa-regular fa-paste"></i>
                            <h5 style={{marginTop:"20px", fontWeight:"400"}}>Test <br />
                            mərhələsi</h5>
                            <button className="orange" style={{padding:'16px 25px'}}>2-ci mərtəbə</button><br /><br />
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="box">
                        <i class="fa-solid fa-users-between-lines"></i>                            
                            <h5 style={{marginTop:"20px", fontWeight:"400"}}>İnsan Kapitalı <br /> Departamenti ilə <br /> müsahibə</h5>
                            <button className="orange" style={{padding:'16px 25px'}}>3-ci mərtəbə</button>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="box" style={{padding:"40px"}}>
                            <i class="fa-regular fa-handshake"></i>
                            <h5 style={{marginTop:"20px", fontWeight:"400"}}>Aidiyyatı struktur <br /> bölmənin <br /> nümayəndəsi ilə görüş</h5>
                            <button className="orange" style={{padding:'16px 25px'}}>4-ci mərtəbə</button>
                            </div>

                        </div>
                        <p className="text-start" style={{margin: "50px 0px 15px"}}>Müsahibə zamanı necə davranmalı:</p>
                        <p className="text-start" style={{margin: "15px 0px"}}>Müsahibə namizədin özünü təqdim etməsi, nələrə nail olması, müraciət etdiyi vakansiyaya uyğunluğunu əsaslandırması baxımından olduqca əhəmiyyətlidir. </p>
                        <p className="text-start" style={{margin: "15px 0px"}}>Müsahibə zamanı sizə yönləndirilən sualları səmimi və rahat şəkildə cavablandırın. Tələsməyin, sualı tam olaraq başa düşməyə çalışın. Cavablarınız və davranışınız sizin vəzifəyə uyğunluğunuzu dəyərləndirməmiz üçün əhəmiyyətli rol oynayacaqdır.</p>
                        <div className="row g-4 my-3">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12  text-start">
                                <img style={{borderRadius:"10px", width:"100%"}} src="https://unibank.az/uploads/articles/o_1cnbvn52p97t6qbdatem5rua.png" alt="" />
                                <h4  style={{marginTop:'30px',fontSize:"22px",fontWeight:'600'}}>Şəxsi təsir</h4>
                                <p>
                                Tərəfimizdən diqqət edilən ən əsas nüanslardan biridir. Namizədin özünü brend olaraq təqdim etmək bacarığı, etik davranışları, xarizması ilə ünsiyyətdə olduğu şəxslərdə müsbət şəxsi təsirlərin yaratması olduqca yüksək qiymətləndirilir. Ünsiyyət zamanı bədən dili və göz kontaktından düzgün istifadə, qamətin düzgün formada saxlanılması, gülümsəmə kimi faktorlar sizi iş intervyusu zamanı digər namizədlərdan fərqləndirəcəkdir. Əlavə olaraq, müsahibə zamanı rəsmi geyim üslubuna riayət olunması namizədin dəyərləndirilməsində müsbət təsir göstərən amillərdən biridir.
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <img style={{borderRadius:"10px", width:"100%"}} src="https://unibank.az/uploads/articles/o_1cnc5lnofu514g06211aaal7ua.png" alt="" />
                                <h4  style={{marginTop:'30px',fontSize:"22px",fontWeight:'600'}}>İnkişaf etmək istəyi</h4>
                                <p>
                                Unibank üçün əməkdaşların şəxsi inkişafı əsas prioritet məsələlərdən biri olduğundan bizimlə çalışacaq əməkdaşların inkişaf etmək istəklərinin yüksək olması arzu olunandır, odur ki, intervyu zamanı gələcək inkişafınızla bağlı planlarınızı bizimlə paylaşmaqdan tərəddüd etməyin.                                 </p>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <img style={{borderRadius:"10px", width:"100%"}} src="https://unibank.az/uploads/articles/o_1cnbvoe291akt13bo1e31sp114c9a.png" alt="" />
                                <h4  style={{marginTop:'30px',fontSize:"22px",fontWeight:'600'}}>Komanda ruhunda çalışmaq</h4>
                                <p>
                                Problemi düzgün şəkildə anlamaq, bu problemlərə aparan səbəbləri müəyyən etmək, səbəblərin aradan qaldırılmasına çalışmaq, mümkün olmadıqda isə alternativləri taparaq onların əvəz edilməsini təmin etmək başa düşülür. Keçmiş təcrübələrinizdən söz açmaqla bizim sizi daha yaxından kəşf etməyimizə şərait yaradın.                                </p>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <img style={{borderRadius:"10px", width:"100%"}} src="https://unibank.az/uploads/articles/o_1cnbvot921i7iv1q1fi6cce1d10a.png" alt="" />
                                <h4  style={{marginTop:'30px',fontSize:"22px",fontWeight:'600'}}>Şəxsi təsir</h4>
                                <p>
                                Komanda işi bir təşkilatın üzvlərinin ümumi məqsəd və ya məqsədlər hədəfində işləmək üçün bir araya gəldiyi bir fəaliyyətdir. Effektli komanda işinin təşkili hər bir biznes üçün vacibdir və bu işi uğurla yerinə yetirmənin sirri komandada işləməyi bacaran əməkdaşların olmasıdır.                                </p>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <img style={{borderRadius:"10px", width:"100%"}} src="https://unibank.az/uploads/articles/o_1cnbvp7041o9cgs68lqvhk1b7qa.png" alt="" />
                                <h4  style={{marginTop:'30px',fontSize:"22px",fontWeight:'600'}}>Liderlik</h4>
                                <p>
                                Namizəddə diqqət yetirdiyimiz başqa bir kriteriya isə liderlik qabiliyyətinin olmasıdır. Liderlik fərdlərin və ya bir qrup şəxslərin bir təşkilatın digər üzvlərinə təsir göstərmə və onlara rəhbərlik etmək bacarıqlarının olmasıdır.                                 </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="option" style={{display:"none"}} id="5">
                <div className="head">
                        <div className="left">
                            <img src="https://unibank.az/uploads/menus/o_1d21rkqpl1l7nde61jne1qh31jcqi.png" alt="photo" />
                        </div>
                        <div className="right">
                            <h1>
                            Təlim və İnkişaf                            </h1>
                            <p>
                            Karyera və iş həyatınız boyu Təlim və İnkişaf Mərkəzi əsas dostunuz və yol yoldaşınız olacaq!                            </p>
                        </div>
                    </div>
                    <p className="mt-5 text-start">Hər bir şirkətin qazancı və əsas kapitalı onun insan kapitalıdır, komandasıdır. Uğurlu şirkət isə savadlı və güclü peşakarların yetişdirilməsində daim maraqlı olmalıdır, məhz bu şirkət öz strategiyasının inkişafına və məqsədlərinə nail olacaq. Qeyd olunanları nəzərə alaraq, Unibank daim öz əməkdaşlarının təlim və inkişafı istiqamətində addımlar atmışdır. Bu istiqamətdə qürur duyacağımız Unibank Training & Development Center (T&D) (Unibank Təlim və İnkişaf Mərkəzi) var. Uniplazada yerləşən T&D müxtəlif təlim və seminarların keçirilməsi üçün mükəmməl şəraitə malikdir. Burada 15 yaxın bankdaxili təlimlər, o cümlədən daxili attestasiyalar, seminarlar keçirlir.  T&D hazırda aşağıdaki istiqamətlər üzrə bankdaxili təlimləri mütəmadi olaraq keçirir:</p>
                <p className=" text-start" style={{marginBottom:"20px",marginTop:"20px"}} >— Bank işi ilə tanışlıq</p>
                <p className=" text-start" style={{marginBottom:"20px",marginTop:"20px"}} >— Müştəri xidməti və davranış</p>
                <p className=" text-start" style={{marginBottom:"20px",marginTop:"20px"}} >— Kreditləşmə işi </p>
                <p className=" text-start" style={{marginBottom:"20px",marginTop:"20px"}} >— Korporativ kreditlər və analitika</p>
                <p className=" text-start" style={{marginBottom:"20px",marginTop:"20px"}} >— Vergi işi və əsasları</p>
                <p className=" text-start" style={{marginBottom:"20px",marginTop:"20px"}} >— Mühasibatlıq</p>
                <p className=" text-start" style={{marginBottom:"50px",marginTop:"20px"}} >— Xarici dil kursları və s.</p>

                    <p className="text-start" style={{marginBottom:"20px"}}>Hər il Unibankın Təlim və İnkişaf Mərkəzində yüzlərlə əməkdaşımız öz peşakar səviyyələrini, o cümlədən “soft” və “hard” kimi tanınan bacarıqlarını artırırlar. Məhz burada post trening analizlər zamanı, keçirilmiş treninglərin faydası və Banka təsiri üzrə analizlər aparılır.</p>
                    <p className="text-start" style={{marginTop:"20px",marginBottom:"60px"}}>Unibank Təlim və İnkişaf Mərkəzi Bankın insan kapitalının peşakarcasına formalaşdırlmasında böyük və önəmli rol oynayır.</p>
                    <h2 className="mt-5">Tədbirlərimiz</h2>
                    <div className="row g-5 mb-5 mt-1">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <img className="human-img" width="100%" src="https://unibank.az/site/uploads/articles/event-listing/o_1cnjgmv8s1gnf14v21btc129t1ef9a.jpg" alt="" />
                            <h5 className="mt-3" style={{marginBottom:"0",fontSize:"17px"}}>Müştəriyə Yönlənmiş Xidmətin Əsasları</h5>
                            <div className="grey-text txt">21.07.2018</div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <img className="human-img" width="100%" src="	https://unibank.az/site/uploads/articles/event-listing/o_1cnjgt9a724t1sq710211l751juaa.jpg" alt="" />
                            <h5 className="mt-3" style={{marginBottom:"0",fontSize:"17px"}}>UniTalent Debate Tournament</h5>
                            <div className="grey-text txt">13.07.2018</div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <img className="human-img" width="100%" src="https://unibank.az/site/uploads/articles/event-listing/o_1cnjh38um18ej1mul10lctja1b6na.jpg" alt="" />
                            <h5 className="mt-3" style={{marginBottom:"0",fontSize:"17px"}}>English Language
                                Classes</h5>
                            <div className="grey-text txt">22.08.2018</div>

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