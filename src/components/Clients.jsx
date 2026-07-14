import "../assets/styles/clients.css";

import bio from "../assets/images/our-clients/biosculpture.png";
import bunch from "../assets/images/our-clients/bunch.png";
import flipkart from "../assets/images/our-clients/flipkart.png";
import futura from "../assets/images/our-clients/futura.png";
import kade from "../assets/images/our-clients/kadecommunication.png";
import prime from "../assets/images/our-clients/prime.png";
import rahul from "../assets/images/our-clients/rahulplastics.png";
import whiteDoor from "../assets/images/our-clients/thewhitedoor.png";
import unerase from "../assets/images/our-clients/unerasepoetry.png";
import fss from "../assets/images/our-clients/flying-squad-studios.png";
function Clients() {

const rowOne = [

    {
        name: "Flipkart",
        logo: flipkart,
    },

    {
        name: "Prime Video",
        logo: prime,
    },

    {
        name: "Rahul Plastics",
        logo: rahul,
    },

    {
        name: "Bio Sculpture",
        logo: bio,
    },

    {
        name: "The White Door",
        logo: whiteDoor,
    },

];

const rowTwo = [

    {
        name: "Unerase Poetry",
        logo: unerase,
    },

    {
        name: "Kade Communication",
        logo: kade,
    },

    {
        name: "Bunch",
        logo: bunch,
    },

    {
        name: "Futura",
        logo: futura,
    },

    {
        name: "Flying Squad Studios",
        logo: fss,
    },

];

return (

<section className="clients-section">

    <div className="clients-container">

        <div className="clients-heading">

            <h2>Our Clients</h2>

        </div>
                <div className="clients-marquee">

            <div className="marquee-track marquee-left">

                {[...rowOne, ...rowOne].map((client, index) => (

                    <div
                        className="client-card"
                        key={index}
                    >

                        <img
                            src={client.logo}
                            alt={client.name}
                        />

                    </div>

                ))}

            </div>

        </div>

        <div className="clients-marquee">

            <div className="marquee-track marquee-right">

                {[...rowTwo, ...rowTwo].map((client, index) => (

                    <div
                        className="client-card"
                        key={index}
                    >

                        <img
                            src={client.logo}
                            alt={client.name}
                        />

                    </div>

                ))}

            </div>

        </div>

    </div>

</section>

);

}

export default Clients;