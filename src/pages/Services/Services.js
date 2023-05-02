import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./Services.css"
import { useMemo,useRef } from "react"
import { useLoadScript,GoogleMap,Marker } from "@react-google-maps/api"


export default function Services(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      });
      const center = useMemo(() => ({ lat: 40.4093, lng: 49.8671 }), []);    

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


    let terminals=[
        {
            title:"Merkezi ofis",
            address:"Mərkəzi ofis"
        },
        {
            title:"“Bərdə” filialı",
            address:"Bərdə şəhəri, Nizami küçəsi 72 (İcra Hakimiyyətinə yaxın) Tel.: 117"
        },
        {
            title:"“Xırdalan” filialı",
            address:"Xırdalan şəhəri, M.Hüseynzadə küçəsi, 6 , (Yeni bazarın qarşısı) Tel.: 117"
        },        {
            title:"11 saylı (Dərnəgül) filialı",
            address:"Bakı ş., Ə.Rəcəbli kuçəsi 1, (“Royal” otel, “Şəki” restoranına yaxın) bina 15 Tel.: 117"
        },        {
            title:"17 saylı (Sahil) filialı",
            address:"Bülbül pr., 10 , (Sahil metrosunun yanı) Bakı ş., Səbail r-nu, AZ 1022 Tel.: 117"
        },        {
            title:"“İsmayıllı” filialı",
            address:"İsmayıllı şəh., M.F. Axundov küç, 18A , (Təhsil şöbəsinə yaxın) Tel.: 117"
        },        {
            title:"“Mərdəkan” filialı",
            address:"Xəzər rayonu, Mərdəkan qəsəbəsi, Sergey Yesenin küçəsi, 100 Tel.: 117"
        },        {
            title:"Quba filialı",
            address:"Heydər Əliyev prosp. 225, ( Bakı-Quba yolunun sağı, köhnə avtovağzala çatmamış) Quba ş., AZ 4002, Tel.: 117"
        },        {
            title:"“Kəpəz” filialı",
            address:"Gəncə şəhəri, (Texnologiya Universitetinin qarşısı) AZ 2011 Kəpəz rayonu, Ş.Hüseynov küç.,2 Tel.: 117"
        },        {
            title:"“Mingəçevir” filialı",
            address:"Heydər Əliyev pr 36 saylı binanın qarşısı (2 saylı Notariat Kontorunun yanı) Mingəçevir ş., AZ 4500 Tel.: 117"
        },        {
            title:"“Şəmkir” filialı",
            address:"20 Yanvar küç., 1 , (İcra hakimiyyətinə yaxın) Şəmkir ş., AZ5700 Tel.: 117"
        },        {
            title:"“Bravo” Yeni Yasamal",
            address:"Yeni Yasamal yaşayış massivi, Əsəd Əhmədov küç."
        },
        {
            title:"“Bravo” hipermarket Əhmədli",
            address:"Ramiz Quliyev küç. 4"
        },{
            title:"“Araz” market",
            address:"Binə qəsəbəsi, Əli İsazadə küç. 5"
        },{
            title:"BOA (Gəncə)",
            address:"Gəncə şəh. Əttarlar küç. 10A"
        },{
            title:"Rəqəmsal filial",
            address:"S.S. Axundov küç., 42 Tel: 117"
        },{
            title:"“Yasamal” filialı",
            address:"Bəsti Bağırova küç., 2, (Statistika Komitəsinin yan) Bakı ş., AZ1065 Tel.: 117"
        },{
            title:"Tovuz” fililalı",
            address:"Tovuz şəhəri, Sabir küçəsi 21 (Mərkəzi poçtla üzbəüz) Tel.: 117"
        },{
            title:"“Neftçilər” filialı",
            address:"Qara Qarayev pr., 66, (“Çudo peçka” nın arxası) Bakı, Nizami r-nu., AZ1096, Tel.: 117"
        },{
            title:"“Gəncə” filialı",
            address:"Atatürk pr., 249, (Şəhərin mərkəzi, “Moskva” mağazaları ilə üzbəüz) Gəncə ş.,AZ2003, Tel.: 117"
        },{
            title:"“Nərimanov” filialı",
            address:"Təbriz küç.,94 , (Nərimanov metrosuı, Arçelik və Roddy mood mağazalarının yaxınlığı) Bakı ş., AZ 1072 Tel.: 117"
        },
        {
            title:"“Əcəmi” filialı",
            address:"A. Məhərrəmov 21 B (Neptun supermarketinin yanı) Bakı ş., 5-ci mkr, AZ 1102, Tel.: 117"
        },{
            title:"10 saylı filial",
            address:"M.Hadi küç., 33, (Əhmədli metrosunun Çudo Peçka tərəfdəki çıxışında) Bakı ş., AZ1129, Tel.: 117"
        },{
            title:"13 saylı filial  (“İnşaatçılar”)",
            address:"Bakı ş., Yasamal r-nu, Şərifzadə küç., 174, AZ 1138"
        },{
            title:"15 saylı filial",
            address:"D.Əliyeva küç., ev. 243 , (Səməd Vurğun bağının yanı) Bakı ş., Nəsimi r-nu AZ 1010 Tel.: 117"
        },{
            title:"“Şəki” filialı",
            address:"M.Ə.Rəsulzadə prospekti, 160A, (Avtovağzala yaxın) Şəki ş., AZ 5500 Tel.: 117"
        },{
            title:"16 saylı filial",
            address:"M.Müşviq küç. 15/17 ( N.Nərimanovun heykəlindən üzü keçmiş 20 saylı məktəbə gedən yolun sağı). Bak ş.Yasamal r-nu, AZ 1138 Tel.: 117"
        },{
            title:"“Unibank - Biznes Mərkəzi”",
            address:"Xocalı prospekti 44 (Xətai metrostansiyasının yaxınlığı) Tеl.: 117"
        },{
            title:"“Sumqayıt” filialı",
            address:"N.Nərimanov küç, ev.2/59, AZ5007 Tel.: 117"
        },{
            title:"“Xaçmaz” filialı",
            address:"“Xaçmaz” filialı Xaçmaz şəhəri, N. Nərimanov küçəsi, 19A (Mərkəzi poçtun yaxınlığı) Tel.: 117"
        },{
            title:"“Salyan” filialı",
            address:"Y. Qasımov , 2 (Avtovağzala yaxın) Tel.: 117"
        },{
            title:"19 saylı (Bakıxanov) filial",
            address:"Sülh küç., 14/2 , (Sabunçu rayon icra hakimiyyətinin yanı) Bakı ş.,Bakıxanov qəs., AZ 1132, Tel.: 117"
        },{
            title:"“Lənkəran” filialı",
            address:"Z.Əliyeva küç., ev 12, (H.Əliyev adına parkın yaxınlığında) Lənkəran ş., AZ4200 Tel.: 117"
        },
    ]

    let utms=[
        {
            title:"“Bolmart” (9-cu mikrorayon)",
            address:"Bakı, Mir Cəlal küç. 103",
            usd: true
        },
        {
            title:"“Garage” parking",
            address:"Səbail rayonu. Azərbaycan pr 2",
            usd: true
        },
        {
            title:"“Aptek Dokta”",
            address:"Gəncə ş, Nizami / N.Nərimanov küç.kəsişməsi.",
            usd: false
        },
        {
            title:"“Aptek Dokta”",
            address:"Gəncə ş, Nizami / N.Nərimanov küç.kəsişməsi.",
            usd: false
        },      {
            title:"“Nizami Mall”",
            address:"Bakı ş, Yasamal r-nu. Salatın Əsgərova küç.",
            usd: false
        },      {
            title:"“Araz Superstore”",
            address:"Sumqayıt, 9 mkr, Ü.Hacıbəyov 23",
            usd: false
        },      {
            title:"“Quru Təmizləmə”",
            address:"Badamdar şos. 105 (“Quru Təmizləmə”)",
            usd: false
        },      {
            title:"“Baku Store”",
            address:"Maştağa qəsəbəsi, H.Heybətov küç.,13",
            usd: false
        },      {
            title:"“Bolmart” Nəsimi",
            address:"Bakı,Nəsimi rayonu, Səməd Vurğun küç. 60",
            usd: false
        },      {
            title:"“Bravo”",
            address:"Bakı ş, Binəqədi r, Ş.Məmmədova küç.5",
            usd: false
        },      {
            title:"Atatürk prospekti 41",
            address:"Nərimanov rayonu, Atatürk prospekti 41",
            usd: false
        },      {
            title:"“Araz” market",
            address:"Binə qəsəbəsi, Əli İsazadə küçəsi 5 (“Araz” market)",
            usd: false
        },      {
            title:"Bayıl qəs. 20-ci sahə (“Araz” market)",
            address:"Bayıl qəs. 20-ci sahə (“Araz” market)",
            usd: false
        },      {
            title:"“Bravo” hipermarket",
            address:"Ramiz Quliyev küç. 4",
            usd: true
        }, {
            title:"“Bravo” hipermarket",
            address:"Heydər Əliyev pr. 172",
            usd: true
        },     {
            title:"“Azure” biznes mərkəzi",
            address:"Nobel pr. 15",
            usd: true
        },      {
            title:"“Gold Mobile”",
            address:"Lökbatan ŞTQ, 28 may küç., ev 7",
            usd: false
        },      {
            title:"Elmlər Akademiyası m/s",
            address:"Hüseyn Cavid pr.",
            usd: false
        },      {
            title:"Qurtuluş 93",
            address:"Masazır (Qurtuluş 93)",
            usd: false
        },      {
            title:"Bakı-Sumqayıt yolu (“Araz” market, Saray)",
            address:"Abşeron rayonu, Saray qəsəbəsi",
            usd: false
        },      {
            title:"Sumqayıt ş. 2-ci mkr Sülh küç. (“None stop” telecom)",
            address:"Sumqayıt ş. 2-ci mkr Sülh küç",
            usd: false
        },      {
            title:"“Garage parking”",
            address:"Səbail rayonu, Ü.Hacıbəyov küç. 6/8",
            usd: false
        },      {
            title:"“Bravo” hipermarket",
            address:"Nəsimi rayonu, Tbilisi prospekti, 3007-ci məhəllə, (Bravo)",
            usd: false
        },{
            title:"“Bakcell”",
            address:"Nəsimi rayonu, Azadlıq prospekti 33 (“Bakcell”)",
            usd: false
        },  {
            title:"“Neftçilər m/s”",
            address:"Qara Qarayev prospekti",
            usd: false
        },  {
            title:"“Rahat” market",
            address:"Bakı, Zabrat şossesinin üzərində",
            usd: false
        },  {
            title:"“Bravo Univerium”",
            address:"Bakı ş. Nəsimi rayonu, Bakıxanov küç. 35-37",
            usd: false
        },  {
            title:"“Araz” market (Suraxanı)",
            address:"Suraxanı rayonu, Hövsan ŞTQ E. Məmmədov küç., ev.5K m.",
            usd: false
        },  {
            title:"“Bravo” (Hava limanı)",
            address:"Binə qəs. 151 h ( Hava limanı yolu )",
            usd: true
        },  {
            title:"“Rahat” market(Qala-Mərdəkan yolu)",
            address:"Bakı ş. Qala küç. 15",
            usd: false
        },  {
            title:"Rasim İmanov ev 22A (“Zagulba Mall”)",
            address:"Xəzər rayonu, Buzovna ŞTQ, Rasim İmanov küç.,ev 22A (“Zagulba Mall”)",
            usd: false
        },  {
            title:"S.S.Axundov küç., 42 (Rəqəmsal filial)",
            address:"S.S.Axundov küç., 42",
            usd: true
        },  {
            title:"Qazax-Bakı magistral yolu (“Bravo” hipermarket)",
            address:"Şəmkir ş. Qazax-Bakı magistral yolunun 406 km-nin cənubu (“Bravo” hipermarket)",
            usd: false
        },  {
            title:"Neftçilər prospekti 26a / “Dəniz Mall”",
            address:"Səbail ray, Neftçilər prospekti 26a (“Dəniz Mall”)",
            usd: true
        },   {
            title:"“Bizim market”, Xırdalan şəh.",
            address:"Xırdalan şəh., H. Aslanov küç.",
            usd: false
        },  {
            title:"Ş. Allahverdiyev küçəsi 6B - “Bravo” (20-ci sahə)",
            address:"Ş. Allahverdiyev küç. 6B",
            usd: false
        },  {
            title:"Qarabağ küç., 26, N.Nərimanov ray. (“Araz market”)",
            address:"Qarabağ küç., 26, N.Nərimanov ray.",
            usd: false
        },  {
            title:"“Ballı market”",
            address:"Suraxanı rayonu, Əmircan ŞTQ M.Mustafayev ev.21",
            usd: false
        }, {
            title:"4-cü Mikrorayon",
            address:"4-cü Mikrorayon, Mir Cəlal küçəsi 36",
            usd: true
        }, {
            title:"16 saylı filial (İçərişəhər)",
            address:"M.Müşviq küç., 15/17",
            usd: true
        }, {
            title:"“Bravo” 8 Noyabr",
            address:"Bakı şəhəri, 8 Noyabr prospekti",
            usd: false
        }, {
            title:"“Amburan” Ticarət mərkəzi",
            address:"Bakı ş, Bilgəh qəs, Zuğulba pr. 337, “Amburan” Ticarət mərkəzi",
            usd: true
        }, {
            title:"Yeni Yasamal yaşayış massivi, Əsəd Əhmədov küç (“Bravo”)",
            address:"Bakı ş. Yeni Yasamal yaşayış massivi, Əsəd Əhmədov küç. (“Bravo”)",
            usd: false
        }, {
            title:"Nəsimi küç., 42 (“Bravo”, İnterturan)",
            address:"Nəsimi küç., 42",
            usd: false
        }, {
            title:"“Favorit”  market (Biləcəri)",
            address:"Rəsulzadə qəs, Binəqədi şossesi 244C",
            usd: true
        }, {
            title:"“Bravo”",
            address:"Suraxanı rayonu, Yeni Günəşli, AB massivinin şimalı(“Bravo”)",
            usd: true
        }, {
            title:"“Rahat market” (Biləcəri)",
            address:"“Bravo”",
            usd: false
        }, {
            title:"Qara Qarayev pr.",
            address:"Qara Qarayev pr.",
            usd: false
        }, {
            title:"Memar Əcəmi m/s",
            address:"H. Əliyev küç.",
            usd: false
        },{
            title:"“Bravo Center”",
            address:"Bakıxanov qəsəbəsi, Ramiz Qəmbərov 2566-cı məhəllə “Bravo Center”",
            usd: false
        },{
            title:"“Bravo” Sumqayıt",
            address:"9-cu mkr., Ü.Hacıbəyov küç., 2",
            usd: true
        },{
            title:"Lökbatan, 28 may küç. 5H (“Bravo”)",
            address:"9-cu mkr., Ü.Hacıbəyov küç., 2",
            usd: false
        },{
            title:"Uniplaza",
            address:"Bakı ş, R Behbudov 55 (Uniplaza ) Baş ofis",
            usd: true
        },{
            title:"N.Nərimanov 19/A (Xaçmaz filialı)",
            address:"Xaçmaz ş. N.Nərimanov 19/A (Xaçmaz filialı)",
            usd: true
        },{
            title:"H. Əliyev pr. 72 (Bərdə filialı)",
            address:"N.Nərimanov 19/A (Xaçmaz filialı)",
            usd: false
        },{
            title:"Y.Qasımov küç. 2 (Salyan filialı)",
            address:"Salyan ş, Y.Qasımov küç. 2 (Salyan filialı)",
            usd: false
        },{
            title:"M.Ə.Sabir küç. 21 (Tovuz filialı)",
            address:"Y.Qasımov küç. 2 (Salyan filialı)",
            usd: true
        },{
            title:"B.Bağırova küç. 2 (Yasamal filialı)",
            address:"Baki ş, B.Bağırova küç. 2 (Yasamal filialı)",
            usd: true
        },{
            title:"Nizami 42 (“Nərgiz Mall”)",
            address:"Bakı ş, Nizami 42 (“Nərgiz Mall”)",
            usd: true
        }, {
            title:"Azadlıq prospekti 116 (Aptek)",
            address:"Baki ş, Azadlıq prospekti 116 (Aptek, Həsən Əliyev küçəsi ilə kəsişməsində)",
            usd: false
        }, {
            title:"Mərdəkan filialı",
            address:"Bakı ş,Mərdəkan qəsəbəsi, S.Yesenin küç.100",
            usd: true
        }, {
            title:"Bakıxanov qəs., Sülh küçəsi 14/2 (19 saylı)",
            address:"Bakı ş, Bakıxanov qəs., Sülh küçəsi 14/2(19 saylı filial)",
            usd: true
        }, {
            title:"A. Məhərrəmov. 22A (Əcəmi filialı)",
            address:"Bakı ş, A. Məhərrəmov. 22A (Əcəmi filialı, Neptun supermarketinin yanı)",
            usd: false
        }, {
            title:"Təbriz küçəsi 94 (Nərimanov filial)",
            address:"Baki ş., Təbriz küçəsi 94 (Nərimanov filial)",
            usd: true
        }, {
            title:"M Hadi 33 (10 saylı filial)",
            address:"Bakı ş, M Hadi 33 (10 saylı filial, Əhmədli metrosunun Çudo Peçka tərəfindəki çıxışında)",
            usd: true
        }, {
            title:"Bakı ş, Bülbül prospekti 10 (Sahil filialı)",
            address:"Bakı ş, Bülbül prospekti 10 (Sahil filialı)",
            usd: true
        }, {
            title:"13 saylı filial (İnşaatçılar)",
            address:"Bakı ş., Yasamal r-nu, Şərifzadə küç., 174, AZ 1138",
            usd: true
        }, {
            title:"Nizami 66 (\“İmAir\” kassa)",
            address:"Bakı ş, Nizami 66 (\“İmAir\” kassa)",
            usd: true
        }, {
            title:"STB filialı",
            address:"Bakı ş., D.Əliyeva küç. 243 (STB filialı)",
            usd: true
        }, {
            title:"“İçəri şəhər” metro stansiyası",
            address:"Bakı ş. İçəri şəhər metro stansiyasının içində",
            usd: false
        }, {
            title:"Ə. Rəcəbli küçəsi 1/15 (Dərnəgül filialı)",
            address:"Bakı ş, Ə. Rəcəbli küçəsi 1/15 (Dərnəgül filialı)",
            usd: true
        }, {
            title:"M. Hadi 2944 (“Soliton” )",
            address:"Baki ş, M. Hadi 2944 (“Soliton” )",
            usd: false
        }, {
            title:"Şahmat klubu",
            address:"Baki ş, Azərbaycan prospekti 42A (Şahmat məktəbi)",
            usd: false
        }, {
            title:"Baki ş, “28 Mall” (Azadlıq pr.)",
            address:"Baki ş, “28 Mall” (Azadlıq pr.)",
            usd: true
        }, {
            title:"Xırdalan filialı",
            address:"Xırdalan ş, M.Hüseynzadə küçəsi, 6",
            usd: true
        }, {
            title:"Ş.Hüseynov küç.,2, (Kəpəz filialı)",
            address:"Gəncə ş, Ş.Hüseynov küç.,2, (Kəpəz filialı )",
            usd: true
        }, {
            title:"Z.Əliyeva küç., ev 12 (Lənkaran filialı)",
            address:"Lənkəran ş., Z.Əliyeva küç., ev 12 (Lənkaran filialı)",
            usd: true
        }, {
            title:"M.Rəsulzadə 160 A (Şəki filialı)",
            address:"Şəki ş, M.Rəsulzadə 160 A (Şəki filialı)",
            usd: true
        }, {
            title:"Ataturk prospekti 249 (Gəncə filialı)",
            address:"Gəncə ş., Ataturk prospekti 249 (Gəncə filialı)",
            usd: true
        }, {
            title:"20 Yanvar küç., 1 (Şəmkir filialı)",
            address:"Şəmkir ş., 20 Yanvar küç., 1 (Şəmkir filialı)",
            usd: false
        }, {
            title:"Mingəçevir filialı",
            address:"Mingəçevir şəhəri, H.Əliyev pr. 36",
            usd: true
        }, {
            title:"N.Nərimanov küç. 39",
            address:"Sumqayıt ş. N.Nərimanov küç. 39",
            usd: true
        }, {
            title:"Quba ş, Heydar Əliyev pr-ti. 225",
            address:"Quba ş, Heydar Əliyev pr-ti. 225, ( Bakı-Quba yolunun sağı, köhnə avtovağzala çatmamış, Quba filialı)",
            usd: true
        }, {
            title:"Q.Qarayev küç 66 (Neftçilər filialı)",
            address:"Bakı ş. Q.Qarayev küç 66 (Neftçilər filialı)",
            usd: true
        }, {
            title:"“Araz” market (Haqverdiyev)",
            address:"Bakı ş. Haqverdiyev küçəsi 574",
            usd: true
        }, {
            title:"Təbriz küçəsi 106 a (“Metropark”)",
            address:"Bakı ş, Təbriz küçəsi 106 a (“Metropark”)",
            usd: true
        }, {
            title:"Tbilisi pr-ti, “Araz” market",
            address:"Bakı ş, Nəsimi r, Tbilisi pr-ti ilə Abdulvahab Salamzadə küç kəsişməsi (“Araz” market)",
            usd: false
        }, {
            title:"Köhnə Günəşli, İnqilab İsmayılov küç., 5/C",
            address:"Bakı ş, Köhnə Günəşli, İnqilab İsmayılov küç., 5/C (“Bizim market”)",
            usd: true
        }, {
            title:"Neftçilər pr. 151",
            address:"Bakı ş, Neftçilər pr. 151 (“Port Baku”)",
            usd: true
        }, {
            title:"Sahil qəs., M. Seyidov küç",
            address:"Bakı ş, Sahil qəs., M. Seyidov küç (“Optimal” M/T)",
            usd: false
        }, {
            title:"Unibank - Biznes Mərkəzi",
            address:"Bakı ş., Xocalı prospekti, 44",
            usd: true
        },{
            title:"S.Yesenin küç. 80",
            address:"Bakı ş, Mərdəkan qəsəbəsi, S.Yesenin küç. 80",
            usd: false
        },{
            title:"M.F.Axundov 18/A (İsmayıllı filialı)",
            address:"İsmayıllı ş. M.F.Axundov 18/A (İsmayıllı filialı)",
            usd: false
        },{
            title:"Azadlıq pr. 23",
            address:"Bakı ş, Azadlıq pr. 23",
            usd: false
        },{
            title:"Azadlıq prospekti (“Lukoil” YDM)",
            address:"Baki ş, Azadlıq prospekti (“Lukoil” YDM, C.Xandan küçəsi ilə kəsişməsində)",
            usd: false
        },{
            title:"“Gənclik Mall” Parkinq və 3-cü mərtəbə",
            address:"Bakı ş., F.X.Xoyski 830-835 məhəllə",
            usd: true
        },
    ]

    return (
        <>
        <Header/>
        <main>
            <div className="container">
                <div className="services my-3">
                <h1 className="text-start">Xidmət şəbəkəsi</h1>
                <div className="text-start btns">
                    <button id="1" className="menu-btn active" onClick={Click}>Bütün filiallar</button>
                    <button id="2" className="menu-btn" onClick={Click}>Şənbə filiallrı</button>
                    <button id="3" className="menu-btn" onClick={Click}>Biznes filiallar</button>
                    <button id="4" className="menu-btn" onClick={Click}>UTM</button>
                    <button id="5" className="menu-btn" onClick={Click}>Terminallar</button>
                </div>
                {!isLoaded ? (
                    <h1>Loading...</h1>
                ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={13}
        />
                )}
                <div className="option"  id="1">
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Mərkəzi ofis</h4>
                            <p>Bakı ş., R.Behbudov küç. 55, AZ1014</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri. VİP-bankçılıq.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Rəqəmsal filial</h4>
                            <p>S.S.Axundov küç., 42</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Tovuz filialı</h4>
                            <p>Tovuz ş., Sabir küç., 21</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Bərdə filialı</h4>
                            <p>Bərdə ş., H. Əliyev pr., 72</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Quba filialı</h4>
                            <p>Quba ş., Heydər Əliyev pr., 225, AZ4002</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Şəki filialı</h4>
                            <p>Şəki ş., M.Ə.Rəsulzadə pr., 160A, AZ5500</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Lənkəran filialı</h4>
                            <p>Lənkəran ş., Z.Əliyeva küç., ev 12, AZ4200</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Şəmkir filialı</h4>
                            <p>Şəmkir ş., 20 Yanvar küç., 1, AZ5700</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Mingəçevir filialı</h4>
                            <p>Mingəçevir ş., Heydər Əliyev pr., 36, AZ4500</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Yasamal filialı</h4>
                            <p>Bakı ş., Bəsti Bağırova küç., 2, AZ1065</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Gəncə filialı</h4>
                            <p>Gəncə ş., Atatürk pr., 249, AZ2003</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Kəpəz filialı</h4>
                            <p>Gəncə şəhəri, Kəpəz r-nu, Ş.Hüseynov küç., 2, AZ2011</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>İsmayıllı filialı</h4>
                            <p>İsmayıllı şəh., M.F. Axundov küç., 18A</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Neftçilər filialı</h4>
                            <p>Bakı, Nizami r-nu., Qara Qarayev pr., 66, AZ1096</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Nərimanov filialı</h4>
                            <p>Bakı ş., Təbriz küç., 94, AZ1072</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Sumqayıt filialı</h4>
                            <p>N.Nərimanov küç, ev.2/59, AZ5007</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Əcəmi filialı</h4>
                            <p>Bakı ş., 5-ci mkr, A. Məhərrəmov 21B, AZ1102</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>10 saylı filial (Əhmədli)</h4>
                            <p>Bakı ş., M.Hadi küç., 33, AZ1129</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>15 saylı filial (28 May)</h4>
                            <p>Bakı ş., Nəsimi r-nu, D. Əliyeva küç., 243 , AZ1010</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>13 saylı filial (İnşaatçılar)</h4>
                            <p>Bakı ş., Yasamal r-nu, Şərifzadə küç., 174, AZ 1138</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>16 saylı filial (İçərişəhər)</h4>
                            <p>Bak ş., Yasamal r-nu, M.Müşviq küç., 15/17 AZ 1138</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>17 saylı (Sahil) filial</h4>
                            <p>Bakı ş., Səbail r-nu, Bülbül pr., 10, AZ1022</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>19 saylı (Bakıxanov) filial</h4>
                            <p>Bakı ş., Bakıxanov qəs., Sülh küç., 14/2, AZ1132</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>11 saylı (Dərnəgül) filialı</h4>
                            <p>Bakı ş., Ə.Rəcəbli küç., 1/15</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Mərdəkan filialı</h4>
                            <p>Xəzər r-nu., Mərdəkan qəs., Sergey Yesenin küç., 100</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Salyan filialı</h4>
                            <p>Salyan r-nu, Y. Qasımov, 2</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Xaçmaz filialı</h4>
                            <p>Xaçmaz ş., N. Nərimanov küç., 19A</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Qara Qarayev filialı</h4>
                            <p>A.Manafov küçəsi 9 (“Sevinc” kinoteatrın yanı)</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Unibank - Biznes Mərkəzi</h4>
                            <p>Xocalı prospekti 44 (Xətai metrostansiyasının yaxınlığı)</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>

                </div>
                <div className="option" style={{display:"none"}} id="2">
                <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Rəqəmsal filial</h4>
                            <p>S.S.Axundov küç., 42</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box z  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Neftçilər filialı</h4>
                            <p>Bakı, Nizami r-nu., Qara Qarayev pr., 66, AZ1096</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Sumqayıt filialı</h4>
                            <p>N.Nərimanov küç, ev.2/59, AZ5007</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Əcəmi filialı</h4>
                            <p>Bakı ş., 5-ci mkr, A. Məhərrəmov 21B, AZ1102</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>15 saylı filial (28 May)</h4>
                            <p>Bakı ş., Nəsimi r-nu, D. Əliyeva küç., 243 , AZ1010</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>13 saylı filial (İnşaatçılar)</h4>
                            <p>Bakı ş., Yasamal r-nu, Şərifzadə küç., 174, AZ 1138</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>19 saylı (Bakıxanov) filial</h4>
                            <p>Bakı ş., Bakıxanov qəs., Sülh küç., 14/2, AZ1132</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Mərdəkan filialı</h4>
                            <p>Xəzər r-nu., Mərdəkan qəs., Sergey Yesenin küç., 100</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                </div>
                <div className="option" style={{display:"none"}} id="3">
                <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Mərkəzi ofis</h4>
                            <p>Bakı ş., R.Behbudov küç. 55, AZ1014</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri. VİP-bankçılıq.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Tovuz filialı</h4>
                            <p>Tovuz ş., Sabir küç., 21</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Bərdə filialı</h4>
                            <p>Bərdə ş., H. Əliyev pr., 72</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Quba filialı</h4>
                            <p>Quba ş., Heydər Əliyev pr., 225, AZ4002</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Şəki filialı</h4>
                            <p>Şəki ş., M.Ə.Rəsulzadə pr., 160A, AZ5500</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Lənkəran filialı</h4>
                            <p>Lənkəran ş., Z.Əliyeva küç., ev 12, AZ4200</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Şəmkir filialı</h4>
                            <p>Şəmkir ş., 20 Yanvar küç., 1, AZ5700</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Mingəçevir filialı</h4>
                            <p>Mingəçevir ş., Heydər Əliyev pr., 36, AZ4500</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Yasamal filialı</h4>
                            <p>Bakı ş., Bəsti Bağırova küç., 2, AZ1065</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Kəpəz filialı</h4>
                            <p>Gəncə şəhəri, Kəpəz r-nu, Ş.Hüseynov küç., 2, AZ2011</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>İsmayıllı filialı</h4>
                            <p>İsmayıllı şəh., M.F. Axundov küç., 18A</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Neftçilər filialı</h4>
                            <p>Bakı, Nizami r-nu., Qara Qarayev pr., 66, AZ1096</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Nərimanov filialı</h4>
                            <p>Bakı ş., Təbriz küç., 94, AZ1072</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Sumqayıt filialı</h4>
                            <p>N.Nərimanov küç, ev.2/59, AZ5007</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Əcəmi filialı</h4>
                            <p>Bakı ş., 5-ci mkr, A. Məhərrəmov 21B, AZ1102</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>10 saylı filial (Əhmədli)</h4>
                            <p>Bakı ş., M.Hadi küç., 33, AZ1129</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>15 saylı filial (28 May)</h4>
                            <p>Bakı ş., Nəsimi r-nu, D. Əliyeva küç., 243 , AZ1010</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>13 saylı filial (İnşaatçılar)</h4>
                            <p>Bakı ş., Yasamal r-nu, Şərifzadə küç., 174, AZ 1138</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>16 saylı filial (İçərişəhər)</h4>
                            <p>Bak ş., Yasamal r-nu, M.Müşviq küç., 15/17 AZ 1138</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>17 saylı (Sahil) filial</h4>
                            <p>Bakı ş., Səbail r-nu, Bülbül pr., 10, AZ1022</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>19 saylı (Bakıxanov) filial</h4>
                            <p>Bakı ş., Bakıxanov qəs., Sülh küç., 14/2, AZ1132</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>11 saylı (Dərnəgül) filialı</h4>
                            <p>Bakı ş., Ə.Rəcəbli küç., 1/15</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Mərdəkan filialı</h4>
                            <p>Xəzər r-nu., Mərdəkan qəs., Sergey Yesenin küç., 100</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə: 10:00 –15:00</p>
                        <p>Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Salyan filialı</h4>
                            <p>Salyan r-nu, Y. Qasımov, 2</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Xaçmaz filialı</h4>
                            <p>Xaçmaz ş., N. Nərimanov küç., 19A</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Fiziki və hüquqi şəxslər üçün bank xidmətləri</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Qara Qarayev filialı</h4>
                            <p>A.Manafov küçəsi 9 (“Sevinc” kinoteatrın yanı)</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>
                    <div className="box  row mt-4 g-3">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-start">
                            <h4>Unibank - Biznes Mərkəzi</h4>
                            <p>Xocalı prospekti 44 (Xətai metrostansiyasının yaxınlığı)</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        schedule
                        </span>                        
                        <div>
                        <p>Bazar ertəsi - Cümə 9:00 – 18:00*</p>
                        <p>Şənbə/Bazar: fəaliyyət göstərmir.</p>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 text-start d-flex align-items-center">
                        <span class="material-symbols-outlined">
                        error
                        </span>
                        <p className="light">Hüquqi şəxslər üçün bank xidmətləri.</p>
                        </div>
                    </div>

                </div>
                <div className="option" style={{display:"none"}} id="4">
                    {
                        utms.map((element)=>{
                            return                     <div className="box mt-3 d-flex flex-wrap justify-content-between">
                            <div className="term text-start ">
                                <h4>{element.title}</h4>
                                <p>{element.address}</p>
                            </div>
                            <div style={{width:"35%"}} className="text-start d-flex align-items-center info">
                            <span class="material-symbols-outlined">
                            error
                            </span>
                            <p style={{display: "inline-block",fontWeight:'300'}}>{element.usd===false ? "":"(AZN, USD)"}</p>
                            </div>
                        </div>
                        })
                    }
                </div>
                <div className="option" style={{display:"none"}} id="5">
                {
                    terminals.map((element)=>{
                        return                     <div className="box mt-3">
                        <div className="term text-start">
                            <h4>{element.title}</h4>
                            <p>{element.address}</p>
                        </div>
                    </div>

                    })
                }
                </div>
                <div className="alert text-start d-flex">
                    <i class="fa-solid fa-circle-info"></i>
                        <p>Qeyd: 17:00-dan sonra kart və kredit üzrə xidmətlər göstərilir.</p>
                    </div>

                </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

