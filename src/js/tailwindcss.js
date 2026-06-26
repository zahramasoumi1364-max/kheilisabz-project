import "../css/tailwind.css";
import Swiper from "swiper";
import {Navigation , Pagination , Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
new Swiper (".myswiper", {
    modules: [Navigation , Pagination , Autoplay] ,
    loop :true,
   
    autoplay :{
        delay: 3000
    },
    pagination :{
        el: ".swiper-pagination" ,
        clickable: true ,
    },
    navigation : {
        nextEI : ".swiper-button-next",
        prevEI : ".swiper-button-prev",
    },
    });