import Coffee from "../assets/coffee.png";
const initialState = {
    navItems: [
        "Home",
        "About",
        "Services",
        "Contact",
    ],
    companyInfo: {
        name: "COFFEE ESTATE BOURGEOISIE BROKERS AGENCY",
        location: "Coffee Plaza,Exchange lane-Off haile Selassie Avenue",
        contact: "+254 7229 190 29",
        website: "www.cebba.ke",
        logo: "",
        slogan: "Experience the Enablers of Elixir Energy"

    },
    statistics: {
        bags: 100000,
        farmers: 1000,
        grades: 10,
    },
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
            image1: "",
            image2: "",
            text : "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        statistics:{
            bags: "",
            farmers: "",
            gradeVariant: "",
        }   
    },
    services: {
        agronomy: {
            title: "Agronomy",
            image: "",
            description: ""
        },
        marketing: {
            title: "Marketing",
            image: "",
            description: ""
        },
        qualityControl: {
            title: "Quality Control",
            image: "",
            description: ""
        },
    }
};


export default initialState;
