import Coffee from "../assets/coffee.jpg";
import mug from "../assets/intro.jpg"
import intro from "../assets/beans.jpg";
import agronomy from "../assets/agronomy.png";
import marketing from "../assets/marketing.png";
import quality from "../assets/quality_control.png";
import about from "../assets/about.jpg";
import advocacy from "../assets/advocacy.jpg";
import contact from "../assets/contact.jpg";


const initialState = {
    navItems: [
        "Home",
        "About",
        "Services",
        "Contact",
    ],
    companyInfo: {
        name: "COFFEE ESTATE BOURGEOISIE BROKERS AGENCY",
        abv: "CEBBA",
        location: "Coffee Plaza,Exchange lane-Off haile Selassie Avenue",
        contact: "0113555333 | 0113555222 | 0722919029",
        website: "www.cebba.ke",
        logo: "",
        slogan: "Experience the Enablers of Elixir Energy",
        vision: "To be the leading coffee brokerage agency globally, renowned for our total dedication to quality excellence by putting the producer at the centre of production, processing, marketing, and consumption of coffee globally.",
        mission: "A coffee brokerage agency dedicated to the promotion of environmental sustainability, sustainable regenerative farmer-friendly practices to produce the highest quality cup to coffee lovers and enthusiasts."

    },
    missionVision:[
        {title: "Vision", text: "To be the leading coffee brokerage agency globally, renowned for our total dedication to quality excellence by putting the producer at the centre of production, processing, marketing, and consumption of coffee globally."}, 
        {title: "Mission", text: "A coffee brokerage agency dedicated to the promotion of environmental sustainability, sustainable regenerative farmer-friendly practices to produce the highest quality cup to coffee lovers and enthusiasts."},
    ],
    stats : [
        { value: "100,000+", label: "Number of Bags Received", color: "#4CAF50" },
        { value: "1000+", label: "Network of Coffee Farmers", color: "#00BCD4" },
        { value: "10+", label: "Coffee Grade Variants", color: "#FFFFFF" },
      ],
    fileResources: [
        { name: "Farmer Agreement", link: "/files/file1.pdf" },
        { name: "Sample Stock Summary", link: "/files/stock_summary.xlsx" },
        { name: "Sample Sales Summary", link: "/files/file3.pdf" }
        ],
    HomePage: {
        header:{
            bgImage: Coffee,
            text: "The Coffee Estates' Bourgeoisie Brokers Agency Limited (CEBBA) was established by coffee producers to champion the clamour for fair returns from the 'farm  to coffee cup' by all players in the Kenya coffee value chain.Top on the list in this journey is climate resilience, sustainable production practices, sourcing, supply chain, and market access. CEBBA draws its membership from Kenya small and medium-sized coffee estates and emerging Coffee Cooperative Societies from new coffee growing regions across all 33 coffee-producing counties in Kenya."
        },
        about: {
            title: "ABOUT CEBBA",
            image1: intro,
            image2: mug,
            text : "At CEBBA we are  driven by the welfare of coffee producers, ensuring fair compensation and fostering sustainable practices that empower farmers and creating wealth for local communities. Our  sustainable operations are designed to drive positive climate outcomes by integrating eco-friendly farming techniques that not only support healthier ecosystems but also ensure the long-term viability of coffee cultivation. Through this commitment, they actively contribute to climate resilience while strengthening local communities and securing a sustainable future for coffee growers worldwide.. Committed to quality excellence, Coffee Estates Bourgeoisie Brokers Agency Limited meticulously curates and delivers premium coffee, satisfying even the most discerning palates and setting a new standard in the global coffee trade.",            regions: []
        },
        about2: {
            image1: intro,
            image2: mug,
            title: "SOURCED FROM ALL REGIONS",
            text : "CEBBA offers the full spectrum of Kenya’s unique coffee profiles by sourcing directly from all major coffee-growing regions across the country. Each region imparts distinct flavors shaped by altitude, climate, and soil composition.",
            regions: [

            ]
        },
        statistics:{
            bags: "",
            farmers: "",
            gradeVariant: "",
        }   
    },
    AboutPage: {
            header:{
                title: "ABOUT CEBBA",
                bgImage: about,
                text: "CEBBA aspires to bridge the gap between coffee growers and the market, empowering farmers to achieve prosperity and recognition for their work through fairest returns while delivering unparalleled service and excellence to coffee lovers through our partners."
            }
    },
    
    services : [
        
        { title: "Agronomy", subTitile:"Training growers on sustainable coffee production and processing technologies.", image: agronomy, descriptions: "At CEBBA, we understand that high-quality coffee starts with the best cultivation practices. Our agronomy services are tailored to help coffee farmers optimize their crops and improve their yield quality. We provide expert advice and hands-on support to ensure the long-term health and sustainability of your coffee farm." },
        { title: "Policy Advocacy", subTitile:"Advocacy towards a facilitative regulatory framework for coffee business", image: advocacy, descriptions: "We are committed to ensuring that every batch of coffee meets the highest standards of quality. Our comprehensive quality control services are designed to support coffee farmers at every stage of the production process, from cultivation to harvest and post-harvest handling. We provide expert guidance and advanced solutions to ensure that your coffee beans stand out in the competitive market."},
        { title: "Market Access ", subTitile:" Facilitation of market access through brokerage services at the Nairobi Coffee Exchange and Direct Sales", image: marketing, descriptions: "At CEBBA, we specialize in connecting premium coffee producers with global buyers. Whether you're sourcing single-origin beans, specialty blends, or looking for dependable supply chains, we serve as your trusted intermediary — ensuring transparency, efficiency, and long-term value.We are proudly licensed by the Capital Markets Authority (CMA) for NCE auction participation and authorized by the Agriculture and Food Authority (AFA) for Direct Sales, enabling us to secure the most competitive deals for our farmers across all channels.Beyond brokering, we provide full post-sale services, including:Generation of detailed sale statementsComprehensive stock summaries These tools empower farmers to monitor their coffee stocks and track earnings with confidence and clarity." } ,
        { title: "Quality Control ", subTitile:"Stringent coffee quality control system to ensure consumer protection and market access", image: quality, descriptions: "At CEBBA, we specialize in connecting premium coffee producers with global buyers. Whether you're sourcing single-origin beans, specialty blends, or looking for dependable supply chains, we serve as your trusted intermediary — ensuring transparency, efficiency, and long-term value.We are proudly licensed by the Capital Markets Authority (CMA) for NCE auction participation and authorized by the Agriculture and Food Authority (AFA) for Direct Sales, enabling us to secure the most competitive deals for our farmers across all channels.Beyond brokering, we provide full post-sale services, including:Generation of detailed sale statementsComprehensive stock summaries These tools empower farmers to monitor their coffee stocks and track earnings with confidence and clarity." } ,
    ],
    ServicePage: {
        header:{
            title: "Our Services",
            bgImage: about,
            text: "At CEBBA, we are dedicated to empowering coffee producers and businesses through a comprehensive suite of services designed to unlock growth and guarantee quality at every stage of the coffee value chain.From agronomy support that nurtures sustainable farming practices, to policy advocacy that champions a favorable regulatory environment — we walk alongside farmers, cooperatives, and buyers to ensure success in a competitive market."
        }
    },
    ContactPage: {
        header:{
            title: "Contact Us",
            bgImage: contact,
            text: "Whether you're a coffee producer, buyer, partner, or simply curious about our services — we’re here to help! At CEBBA, we believe strong connections are the foundation of successful collaborations.Reach out to our team for expert guidance, partnership opportunities, or support on your coffee journey. We're always ready to provide personalized assistance, ensuring your questions are answered and your needs are met.Let’s start the conversation — your next great coffee solution begins here."
        },
        
    },
    regions:{
        central: {
            name: "Nyeri",
            description: "Nyeri is known for its high-altitude coffee farms, producing beans with bright acidity and complex flavors. The region's volcanic soil and favorable climate contribute to the unique taste profiles of its coffee.",
            image: "",
        },
        western: {
            name: "Western and Nyanza Kenya",
            description: "with its lower altitudes and wetter climate, yields coffees with softer acidity and more delicate floral and citrus notes. ",
            image: "",
        },
        rift: {
            name: "North Rift Region",
            description: "has a wide range of medium to high altitudes, which translates to coffee profiles ranging from Citrus lime, grapefruit, and light strawberry",
            image: "",
        },
        eastern: {
            name: "Eastern Region",
            description: "is known for its high-quality Arabica coffee, characterized by bright acidity and fruity flavors. The region's unique microclimates and rich volcanic soils contribute to the distinct taste profiles of its coffee.",
            image: "",
        },
    }
};


export default initialState;
