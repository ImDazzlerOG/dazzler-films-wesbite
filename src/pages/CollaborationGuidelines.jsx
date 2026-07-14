import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "../assets/styles/legal.css";

function Terms() {

const sections = [

{
number:"01",
title:"Posting Rights",
content:" All videos and pictures created during the collaboration will be posted exclusively by Dazzler Films’ official Instagram account or other social media platforms."
},

{
number:"02",
title:"Approval and Final Decisions",
content:"The final decision to post any video or photos rests solely with Dazzler Films."
},

{
number:"03",
title:"Copyright Ownership",
content:"Dazzler Films retains full copyright ownership of all videos and photos created during the collaboration."
},

{
number:"04",
title:"Content Usage Rights",
content:"Collaborators may not use or repost the videos or photos without prior written consent from Dazzler Films."
},

{
number:"05",
title:"File Download",
content:`All deliverables will be shared via Google Drive or a cloud platform, and collaborators must download the files within 10 days. Files will be deleted afterward.`
},

{
number:"06",
title:"Attribution",
content: `If reposting is approved, proper credit must be given to Dazzler Films in captions or descriptions.`
},

{
number:"07",
title:"Timing and Schedule",
content:`The shoot schedule and timelines will be mutually agreed upon in advance, but Dazzler Films reserves the right to make adjustments if necessary.`
},

{
number:"08",
title:"Creative Direction",
content:`Dazzler Films will have the primary say in creative direction, including concepts, edits, and final outputs.`
},

{
number:"09",
title:"Cancellation Policy",
content:`Any cancellations or rescheduling must be communicated at least 48 hours in advance.`
},

{
number:"10",
title:"No Financial Obligation",
content:`Collaborations are unpaid unless otherwise explicitly agreed upon before the shoot.`
},

{
number:"11",
title:"Professional Conduct",
content:`Both parties are expected to maintain professionalism and respect throughout the collaboration.`

},


];

return(

<>

<Header/>

<section className="legal-hero">

<div className="legal-container">


<h1>

Collaboration Guidelines

</h1>

<p>

Our policies are designed to ensure every project runs smoothly, transparently, and professionally.

</p>

</div>

</section>

<section className="legal-content">

<div className="legal-container">
{sections.map((item) => (

<div className="legal-card" key={item.number}>

<div className="card-number">

{item.number}

</div>

<div className="card-content">

<h2>

{item.title}

</h2>

<div className="card-line"></div>

<p>

{item.content}

</p>

</div>

</div>

))}

<div className="legal-contact">

<h2>

Still have questions?

</h2>

<p>

If you have any questions regarding these Terms & Conditions,
feel free to contact us.

</p>

<a
href="mailto:businesswithdazzler@gmail.com"
className="contact-btn"
>

businesswithdazzler@gmail.com

</a>

</div>

</div>

</section>

<Footer/>

</>

);

}

export default Terms;