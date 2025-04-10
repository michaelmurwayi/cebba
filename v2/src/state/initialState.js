import Coffee from "../assets/coffee.png";
import mug from "../assets/intro.jpg"
import intro from "../assets/beans.jpg";
import agronomy from "../assets/agronomy.png";
import marketing from "../assets/marketing.png";
import quality from "../assets/quality_control.png";

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
        contact: "+254 7229 190 29",
        website: "www.cebba.ke",
        logo: "",
        slogan: "Experience the Enablers of Elixir Energy",
        vision: "To be the leading coffee brokerage agency globally, renowned for our unwavering dedication to fostering farmer-friendly practices and ensuring the highest quality coffee reaches consumers. We aspire to bridge the gap between coffee growers and the market, empowering farmers to achieve prosperity and recognition for their hard work while delivering unparalleled service and excellence to our partners.",
        mission: "To be the leading coffee brokerage agency globally, renowned for our unwavering dedication to fostering farmer-friendly practices and ensuring the highest quality coffee reaches consumers. we aspire to bridge the gap between coffee growers and the market, empowering farmers to achieve prosperity and recognition for their hard work while delivering unparalleled service and excellence to our partners."

    },
    stats : [
        { value: "100,000+", label: "Number of Bags Received", color: "#4CAF50" },
        { value: "1000+", label: "Network of Coffee Farmers", color: "#00BCD4" },
        { value: "10+", label: "Coffee Grade Variants", color: "#FFFFFF" },
      ],
    fileResources: [
        { name: "Farmer Agreement", link: "/files/file1.pdf" },
        { name: "Sample Stock Summary", link: "/files/file2.pdf" },
        { name: "Sample Sales Summary", link: "/files/file3.pdf" }
        ],
    HomePage: {
        header:{
            bgImage: Coffee
        },
        about: {
            image1: intro,
            image2: mug,
            text : "Coffee Estates Bourgeoisie Brokers Agency Limited stands as a trailblazer in the coffee brokerage industry, driven by a mission to revolutionize coffee trading with an unwavering focus on farmer-friendly practices, sustainability, and unparalleled quality. By prioritizing the welfare of coffee producers, the agency ensures fair compensation and fosters long-term relationships that empower farmers and enrich local communities. Their sustainable operations are designed to minimize environmental impact while promoting eco-friendly farming techniques, thereby safeguarding the future of coffee cultivation. Committed to quality excellence, Coffee Estates Bourgeoisie Brokers Agency Limited meticulously curates and delivers premium coffee, satisfying even the most discerning palates and setting a new standard in the global coffee trade."
        },
        statistics:{
            bags: "",
            farmers: "",
            gradeVariant: "",
        }   
    },
    
    services : [
        { title: "Agronomy", image: agronomy, descriptions: "At CEBBA, we understand that high-quality coffee starts with the best cultivation practices. Our agronomy services are tailored to help coffee farmers optimize their crops and improve their yield quality. We provide expert advice and hands-on support to ensure the long-term health and sustainability of your coffee farm." },
        { title: "Marketing", image: marketing, descriptions: "At CEBBA, we specialize in connecting premium coffee producers with global buyers. Whether you're sourcing single-origin beans, specialty blends, or looking for dependable supply chains, we serve as your trusted intermediary — ensuring transparency, efficiency, and long-term value.We are proudly licensed by the Capital Markets Authority (CMA) for NCE auction participation and authorized by the Agriculture and Food Authority (AFA) for Direct Sales, enabling us to secure the most competitive deals for our farmers across all channels.Beyond brokering, we provide full post-sale services, including:Generation of detailed sale statementsComprehensive stock summaries These tools empower farmers to monitor their coffee stocks and track earnings with confidence and clarity." } ,
        { title: "Quality Control", image: quality, descriptions: ""},
    ]
};


export default initialState;
