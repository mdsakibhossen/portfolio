import Ab1 from "../../public/images/alpha-blog-1.png"
import Ab2 from "../../public/images/alpha-blog-2.png"
import Ab3 from "../../public/images/alpha-blog-3.png"
import Ap1 from "../../public/images/animated-portfolio.png"
import Ap2 from "../../public/images/animated-portfolio-2.png"
import Ap3 from "../../public/images/animated-portfolio-3.png"
import Ap4 from "../../public/images/animated-portfolio-4.png"
import Ap5 from "../../public/images/animated-portfolio-5.png"
import AnalogClock from "../../public/images/screen-4.jpeg"
import CarServicing from "../../public/images/screen-5.jpeg"
import PricingCards from "../../public/images/screen-6.jpeg"
import DigitalClock from "../../public/images/screen-7.jpeg"
import ImgGallery from "../../public/images/screen-11.jpeg"
import EShop1 from "../../public/images/e-shop-1.png"
import EShop2 from "../../public/images/e-shop-2.png"
import EShop3 from "../../public/images/e-shop-3.png"
import EShop4 from "../../public/images/e-shop-4.png"
import EShop5 from "../../public/images/e-shop-5.png"
import HexColorGen from "../../public/images/hex-color-gen.png"



export const categories = [
    {
        id: 1,
        title: "Blog Website"
    },
    {
        id: 2,
        title: "Portfolio Website"
    },
    {
        id: 3,
        title: "E-commerce Website"
    },
    {
        id: 4,
        title: "Landing Page"
    },
    {
        id: 5,
        title: "Project"
    },
]


export const portfolios = [

    {
        id: 1,
        images: [AnalogClock],
        title: "Analog Clock",
        description: "A functional analog clock built with HTML, CSS, and JavaScript to display real-time updates.",
        skills: ["HTML", "CSS", "JS"],
        category: 5,
        liveLink: "https://sakib-analog-clock.netlify.app/",
        sourceCodeLink: "https://github.com/mdsakibhossen/html-css-js-projects/tree/main/01-analog-clock"
    },
    {
        id: 2,
        images: [PricingCards],
        title: "Responsive Pricing Cards",
        description: "Custom-designed, responsive pricing cards showcasing product plans with flexible layout.",
        skills: ["HTML", "CSS"],
        category: 5,
        liveLink: "https://sakib-pricing-cards.netlify.app/",
        sourceCodeLink: "https://github.com/mdsakibhossen/pricing-card"
    },
    {
        id: 3,
        images: [CarServicing],
        title: "Car Servicing Landing Page",
        description: "A clean and modern landing page template for car servicing businesses, fully responsive.",
        skills: ["HTML", "CSS", "Bootstrap", "JS"],
        category: 4,
        liveLink: "https://sakib-car-servicing.netlify.app/",
        sourceCodeLink: "https://github.com/mdsakibhossen/html-css-bs-tc-js-websites/tree/main/car-servicing"
    },
    {
        id: 4,
        images: [DigitalClock],
        title: "Digital Clock",
        description: "A digital clock displaying current time in a clear, modern format using JavaScript.",
        skills: ["HTML", "CSS", "JS"],
        category: 5,
        liveLink: "https://sakib-digital-clock.netlify.app/",
        sourceCodeLink: "https://github.com/mdsakibhossen/html-css-js-projects/tree/main/02-digital-clock"
    },
    {
        id: 5,
        images: [ImgGallery],
        title: "Image Gallery",
        description: "An interactive image gallery with a sleek layout, built for easy browsing and viewing.",
        skills: ["HTML", "CSS", "JS"],
        category: 5,
        liveLink: "https://sakib-modern-image-gallery.netlify.app/",
        sourceCodeLink: "https://github.com/mdsakibhossen/html-css-js-projects/tree/main/04-image-gallery"
    },
    {
        id: 6,
        images: [EShop1, EShop2, EShop3, EShop4, EShop5],
        title: "EShop (E-commerce Website)",
        description: "A responsive e-commerce platform with a modern design and shopping cart functionality.",
        skills: ["HTML", "CSS", "JS"],
        category: 3,
        liveLink: "https://sakib-e-shop.netlify.app/",
        sourceCodeLink: "https://github.com/mdsakibhossen/html-css-bs-tc-js-websites/tree/main/e-shop"
    },
    {
        id: 7,
        images: [HexColorGen],
        title: "Hex Color Generator",
        description: "A simple tool to generate random hex color codes, built for designers needing quick color code.",
        skills: ["HTML", "CSS", "JS"],
        category: 5,
        liveLink: "https://sakib-color-code-generator.netlify.app/",
        sourceCodeLink: "https://github.com/mdsakibhossen/html-css-js-projects/tree/main/03-hex-color-code-generator"
    },

    // {
    //     id: 2222,
    //     images: [Ap1, Ap2, Ap3, Ap4, Ap5],
    //     title: "Animated Portfolio Website",
    //     description: "I specialize in creating dynamic, responsive websites and web applications with a passion for clean code and seamless user experiences. Let's build something amazing together! I specialize in creating dynamic, responsive websites and web applications with a passion for clean code and",
    //     skills: ["HTML", "CSS", "Tailwind CSS", "JS", "GSAP", "React JS", "Next JS"],
    //     category: 2,
    //     liveLink: "https://sakib-portfolio-01.netlify.app/",
    //     sourceCodeLink: "https://github.com/mdsakibhossen/next-js-frontend-portfolio-01"
    // },
    // {
    //     id: 1111,
    //     images: [Ab1, Ab2, Ab3],
    //     title: "FullStack Blog Website",
    //     description: "I specialize in creating dynamic, responsive websites and web applications with a passion for clean code and seamless user experiences. Let's build something amazing together!",
    //     skills: ["HTML", "CSS", "Tailwind CSS", "JS", "React JS", "Redux", "Next JS", "MongoDB"],
    //     category: 1,
    //     liveLink: "https://alpha-blog-next-js-fs.vercel.app/",
    //     sourceCodeLink: "https://github.com/mdsakibhossen/alpha-blog-next-js-fs"
    // },

].reverse()