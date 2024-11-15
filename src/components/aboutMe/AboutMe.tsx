// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"
import "./aboutMe.css"

// import Person from "../assets/1.jpg"
// import img2 from "../assets/2.jpg"
// import img5 from "../assets/5.jpg"
// import pdf from "../assets/details.pdf"
import raghavendra from "../../Assets/sliderImgs/B44A7954.jpg"

// import slide2 from "../assets/slide2.jpg"

// import Header from "../header/header"
import Footer from "../footer/Footer"
// import HeaderAbout from "../headerAbout/headerAbout"

// import bbb from "../assets/bbb (1).jpg"
// import yuvaChaithanyaYathra from "../assets/yuvachaithanya-yathra (7).jpg"

// import kolluRavindra1 from "../assets/kollu-ravindra1.jpeg"

// import specialStatus from "../assets/speshal-status1.jpeg"

// import yuvaNestham1 from "./aboutImgs/yuvanestham1.jpeg"
// import yuvaNestham2 from "./aboutImgs/yuvanestham2.jpeg"
// import yuvaNestham3 from "./aboutImgs/yuvanestham3.jpeg"

// import specialStatus1 from "./aboutImgs/speshal-status1.jpeg"
// import specialStatus2 from "./aboutImgs/speshal-status2.jpeg"
// import specialStatus3 from "./aboutImgs/speshal-status3.jpeg"

// import bbb1 from "./aboutImgs/bbb (1).jpg"
// import bbb2 from "./aboutImgs/bbb (3).JPG"
// import bbb3 from "./aboutImgs/bbb (8).JPG"
// import bbb4 from "./aboutImgs/bbb (14).JPG"
// import bbb5 from "./aboutImgs/bbb (24).jpg"

// import ppyy1 from "./aboutImgs/yuvachaithanya-yathra (1).jpg"
// import ppyy2 from "./aboutImgs/yuvachaithanya-yathra (2).jpg"
// import ppyy3 from "./aboutImgs/yuvachaithanya-yathra (8).jpg"
// import ppyy4 from "./aboutImgs/yuvachaithanya-yathra (28).jpg"

import soloImg from "../../Assets/sliderImgs/B44A7970.jpg"

// import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MaxWidthWrapper } from "../../utils/maxWidthWrapper"
import UserNavbar from "../navbar/userNavbar"

function AboutMe() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   fade: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // }
  return (
    <div>
      {/* <HeaderAbout /> */}
      {/* <Header /> */}
      <UserNavbar />
      <h3 className="heading-primary u-text-center">About Kollu Ravindra</h3>
      {/* <div className="colored-heading">
        <h1>About Raghavendra</h1>
      </div> */}
      <section className="about-me-main">
        <MaxWidthWrapper>
          <div className="about-me-main_cont">
            <div className="about-me-main__hero-info">
              <h3>Welcome To My World</h3>
              <h1>Hai I'm Kollu Ravindra</h1>
              <div className="sm-img-hero">
                <img src={raghavendra} alt="ravindra" />
                <div className="rotate-text"></div>
              </div>
              <div className="about-me-main_hero-info_text-animate">
                <h2>Telugu Desam Party Mines, Geology & Excise Minister</h2>
              </div>
              <p>
                Raghavendra Ghanjam was born on 04 Feb at Kavali, Nellore
                district, Andhra Pradesh. He is working as "TDP Official
                Spokesperson & Social Media convener for State B.C Cell Andhra
                Pradesh". He have 15year's Experiencs in TDP party as a Senior
                Member.
              </p>
              <div className="about-me-main__btn-box">
                <a href="mailto:tdprghanjam@gmail.com" className="btn">
                  Send Me a Mail
                </a>
                <a
                  //  href={pdf} target="_blank"
                  href="#s"
                  className="d-cv"
                >
                  Know More
                </a>
              </div>
              <div className="social-media">
                <div className="bg-icon">
                  <a href="#s">
                    <FaInstagram />
                  </a>
                  <span></span>
                </div>
                <div className="bg-icon">
                  <a href="#s" target="_blank">
                    <FaFacebook />
                  </a>
                  <span></span>
                </div>
                <div className="bg-icon">
                  <a href="#s">
                    <FaLinkedin />
                  </a>
                  <span></span>
                </div>
                <div className="bg-icon">
                  <a href="#s">
                    <FaTwitter />
                  </a>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="img-hero">
              <img src={raghavendra} alt="ravindra" />
              <div className="rotate-text"></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <div className="row">
        <MaxWidthWrapper>
          <div className="about-me">
            <img className="about-me__img" src={soloImg} alt="ravindra" />
            <h1>
              విద్యావేత్త గంజాం రాఘవేంద్ర... రజక సామాజికవర్గానికి ఆదర్శం …. రజక
              జాతికి మార్గదర్శి….{" "}
            </h1>
            <p className="">
              గంజాం రాఘవేంద్ర .. BTECH, MBA చదువుకున్న విద్యావంతుడు…
              విద్యావేత్తగా, సామాజిక సంస్కరణాభిలాషిగా నెల్లూరు జిల్లా తో పాటు ,
              ఆంధ్ర ప్రదేశ్ రాష్ట్రం లో మంచి పేరున్న వ్యక్తి. మాటలు కాదు ఏది
              చెప్పినా చేతల్లో చూపాలి, సమాజం మనకేం ఇచ్చినా.. మనం సమాజానికి
              చేయాల్సింది ఎంతో ఉందని నమ్మే మనిషి. హైదరాబాద్ మరియు ఆస్ట్రేలియా ,
              నెదర్లాండ్స్ , స్విట్జర్లాండ్ , జర్మనీ , వియత్నాం , సింగపూర్ లాంటి
              దేశాల్లో ఉన్నతమయిన స్థాయిలో పనిచేశారు. ఈ తరం యువత అంతా విదేశాల్లో
              ఉన్నత ఉద్యోగాలు చేస్తూ, చేతినిండా సంపాదిస్తూ, అక్కడే ఉండిపోవాలని
              భావిస్తారు. కానీ రాఘవేంద్ర ఆలోచన అందరికీ భిన్నంగా ఉంది.
            </p>
            <p>
              గంజాం రాఘవేంద్ర ది నెల్లూరు జిల్లా, ఉదయగిరి నియోజకవర్గం. సామాన్య
              రజక కుటుంబంలో పుట్టి విద్యార్ధి దశలోనే శ్రీ నారా చంద్రబాబు నాయుడు
              గారి విజన్‌, కార్యదక్షతకు ఆకర్షితుడై 2002లోనే అనేక రాజకీయ
              కార్యక్రమాల్లో పాల్గొన్నారు. 2004 ఎన్నికకు గ్రామ గ్రామాన తిరిగి
              పార్టీ కరపత్రాలు పంపిణీ చేశారు. 2009లో కొండాపురం మండల తెలుగు యువత
              నాయకునిగా క్రియాశీలకంగా పని చేశారు. 2013లో ‘పల్లెపల్లెకు యువ
              చైతన్య యాత్ర’ కార్యక్రమాన్ని సొంతంగా రూపొందించి నిర్వహించాను. అదే
              సమయంలో పార్టీ పిలుపు మేరకు ‘బ్రింగ్ బ్యాక్ బాబు’ కార్యక్రమానికి
              కో-ఆర్డినేటర్ ఉదయగిరి నియోజకవర్గం వ్యాప్తంగా పర్యటించారు. TNSV
              నియోజకవర్గ కోఆర్డినేటర్‌గా 2014 ఎన్నికల్లో క్రియాశీలకంగా పని
              చేశారు. 2016-18 మధ్య జిల్లా తెలుగు యువత ప్రధాన కార్యదర్శిగా,
              2018-20 జిల్లా తెలుగు యువత అధ్యక్షునిగా పార్టీ పిలుపునిచ్చిన ప్రతి
              కార్యక్రమాన్ని దగ్గరుండి నడిపించారు. 2020-22 వరకు బీసీ సెల్
              రాష్ట్ర అధికార ప్రతినిధిగా తెలుగుదేశం పార్టీ వాణిని రాష్ట్ర
              స్థాయిలో వినిపించారు. 2022లో బీసీ సెల్ సోషల్ మీడియా రాష్ట్ర
              కన్వీనర్‌గా అదనపు భాధ్యతలు స్వీకరించి బీసీ కార్యక్రమాల్లో
              క్రియాశీలకంగా పాల్గొన్నారు.
            </p>
            <p>
              బీసీల భరోసా బాట, జయహో బీసీ నిర్వహణలో కీలకంగా వ్యవహరించారు.
              నియోజకవర్గం, పార్లమెంటు, జోనల్ స్థాయిలో చేపట్టిన బీసీ రౌండ్ టేబుల్
              సమావేశాలను సమర్ధంగా నిర్వహించారు. కేంద్ర కార్యాలయంలో నిర్వహించిన
              బీసీ శిక్షణా కార్యక్రమాల్లో సోషల్ మీడియా వినియోగం గురించి సాధికార
              సమితి శ్రేణులకు ప్రతి రోజూ శిక్షణ ఇచ్చారు. తెలుగునాడు రజక ఫెడరేషన్
              (Reg.No:126/2022) రాష్ట్ర అధ్యక్షులు గా ఉంటూ రాష్ట్రం లో రజక
              సామాజికవర్గాన్ని తెలుగుదేశం పార్టీ వైపు ఆకర్షితులు అయ్యేలా చైతన్య
              పరుస్తూ కార్యక్రమాలను చేయుచున్నారు. ఎన్నికల సమయంలో ఉమ్మడి నెల్లూరు
              జిల్లాలోని రజకులందరినీ ఐక్యం చేసేలా రూ.15 లక్షల సొంత ఖర్చులతో 'రజక
              చైతన్య సభ' నిర్వహించారు. రజక ఓటర్ల చైతన్యమే లక్ష్యంగా ఎన్నికలకు
              ముందు 'రజక చైతన్య యాత్ర' పేరుతో ఉమ్మడి నెల్లూరు జిల్లా వ్యాప్తంగా
              వందలాది గ్రామాల్లో తిరిగి పార్టీ మేనిఫెస్టో, బీసీ డిక్లరేషన్
              కరపత్రాలను రజక కుటుంబాలకు చేరవేశారు. రజక సామాజిక వర్గాన్ని
              ప్రభావితం చేసి, సామాజిక వర్గాన్ని పార్టీకి దగ్గర చేయాలనే తపనతోనే
              అడుగులు వేశారు. సొంత ఖర్చులతో రాష్ట్రం మొత్తం పర్యటించి బీసీ మరియు
              రజకుల సమస్యలపై పోరాటం చేశారు.
            </p>
            <p>
              రజక సామాజికవర్గాన్ని తెలుగుదేశం పార్టీ వైపు నడిపించటానికి, రజకుల
              కోసం చేపట్టిన కార్యక్రమాలపై ప్రజల్లో అవగాహన కల్పించడమే ధ్యేయంగా
              పని చేస్తున్నారు. ప్రతి చోట రజక నాయకులను, ప్రజలను పార్టీవైపు
              నడిపించేందుకు రాష్ట్రం లో వుండే బిసి నాయకులు అందరితో కలిసి పని
              చేశారు. పార్టీపై ఉన్న అభిమానం, శ్రీ నారా చంద్రబాబు నాయుడు గారి
              పాలనా దక్షతపై ఉన్న నమ్మకం తో ప్రతి రోజు, ప్రతి క్షణం పార్టీ కోసమే
              ఆలోచిస్తూ పని చేస్తున్నారు. తిరుపతి ఉప ఎన్నికలు, నెల్లూరు
              కార్పొరేషన్ ఎన్నికల పరిశీలకులుగా పని చేశారు. గుంటూరు తూర్పు
              నియోజకవర్గ పరిశీలకునిగా నిత్యం ప్రజల్లో ఉంటూ, స్థానికంగా ఎదురయ్యే
              సమస్యల్ని పరిష్కరించే దిశగా కేంద్ర పార్టీ కార్యాలయాన్ని అప్రమత్తం
              చేస్తూ ముందుకు వెళ్లారు. 2024 సార్వత్రిక ఎన్నికల్లో ఉదయగిరి సహా
              ఉమ్మడి నెల్లూరు జిల్లాలోని పలు అసెంబ్లీ నియోజకవర్గాల గెలుపు కొరకు
              కృషి చేశాను.
            </p>
            <p>
              రాగం ఫౌండేషన్ ని వ్యవస్థాపించి ఆంధ్రప్రదేశ్ రాష్ట్రంలో , ముఖ్యంగా
              గ్రామీణ ప్రాంతాల్లో ఉండే బడుగు బలహీన వర్గాల కోసం , అణగారిన రజక
              సామాజిక వర్గం కోసం సేవా కార్యక్రమాలు చేయడం జరుగుతుంది . సమాజం మీద
              ఉన్న అభిమానం తో నా వంతు భాగం గా సామాజిక సేవ కార్యక్రమలను
              నిర్వహిస్తున్నాను . దీనిలో భాగం గా చదువుకునే విద్యార్థులకు అవసరమైన
              పుస్తకాలు , పరీక్ష కిట్‌లు ప్రతి సంవత్సరం ఇవ్వటం జరుగుతుంది .
              అదేవిధం గా చలివేంద్రాలు ఏర్పటు చేయడం , పేద విద్యార్దులకి ఆర్దికం
              గా సహాయం చేయడం , దేవాలయాలు , పాఠశాలల కి విరాళాలు ఇవ్వటం జరుగుతుంది
              .
            </p>
            <p>
              ఈ ఫౌండేషన్ ద్వారా ముఖ్యంగా రజక జాతిని ఆర్థికంగా సామాజికంగా
              వెనుకబడిన రజక కుటుంబాలను వారి అవసరాలకు అనుగుణంగా ప్రతి రజక
              విద్యార్థికి ఉచిత విద్య , వృత్తిదారునికి ఉచిత వైద్యం , చదువుకున్న
              రజక బిడ్డలకు తగిన ఉద్యోగ ఉపాధి అవకాశాలు వుండేలా చేయడం కోసం తగిన
              కార్యాచరణ ప్రణాళికను అమలు చేస్తున్నము. ప్రతి రజక కుటుంబం లో
              అర్హులైన ప్రతిఒక్కరికీ , ఉచిత విద్య, ఉచిత వైద్యం , చదువుకున్న రజక
              బిడ్డలకు తగిన ఉద్యోగం అందించాలి అనేదే గంజాం రాఘవేంద్ర ధ్యేయం ఈ
              ఫౌండేషన్ యొక్క ఆశయం .
            </p>
            <h1 style={{ textAlign: "center", fontSize: "30px" }}>
              జై రజక... జై టీడీపీ... జై హింద్…
            </h1>
          </div>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </div>
  )
}

export default AboutMe
