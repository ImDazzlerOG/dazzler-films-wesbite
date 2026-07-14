import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "../assets/styles/legal.css";

function Terms() {

const sections = [

{
number:"01",
title:"Booking and Advance Payment",
content:"A 50% advance payment is required to confirm the booking for any photography or cinematography service. The remaining balance must be cleared before the shoot or on the day of the event."
},

{
number:"02",
title:"Cancellation Policy",
content:`Cancellations made within 48 hours of the scheduled shoot will not receive any refund.
        Cancellations made more than 48 hours in advance will be eligible for a refund of the advance payment, minus any processing or administrative fees.
        Any changes to the schedule or location after booking may incur additional charges.`
},

{
number:"03",
title:"Non-Cancellation After Commencement",
content:`Once the shoot or post-production work has commenced, the project is considered active and non-cancellable. In such cases, the client is liable to pay the full agreed amount, regardless of any changes in plan or circumstances. No refunds or adjustments will be made after commencement.`
},

{
number:"04",
title:"Creative Direction",
content:`Dazzler Films/Dazzler Collectix Media reserves the right to make creative and artistic decisions during filming and editing to maintain professional quality and brand standards.`
},

{
number:"05",
title:"Delivery of Work",
content:`Final edited videos or photographs will be provided to the client only after full payment is received. Delivery will be made within the stipulated timeline, which will be shared after the project’s completion. 
All deliverables will be shared via Google Drive or a cloud platform. Clients must download the files within 10 days of being shared, as files will be deleted afterward.
Clients are required to finalize any edits within 10 days of receiving the initial draft. Additional edits beyond this period may incur extra charges.`
},

{
number:"06",
title:"Copyright & Usage Rights",
content: `All copyrights and intellectual property rights to the photos, videos, and other media produced remain with Dazzler Films. Clients are granted a license for both personal and commercial use of the content; however, any reproduction, resale, or redistribution beyond the agreed purpose requires prior written permission. Additionally, Dazzler Films/Dazzler Collectix Media retains the right to post and showcase the content on its social media, website, and portfolio unless otherwise agreed in writing.`
},

{
number:"07",
title:"Client Responsibilities",
content:`The client must ensure that the venue(s) for the shoot is ready and accessible at the scheduled time.
Dazzler Films/Dazzler Collectix Media is not responsible for any delays caused by third parties, including but not limited to event organizers, venue management, or any unforeseen circumstances.`
},

{
number:"08",
title:"Liability and Force Majeure",
content:`Dazzler Films/Dazzler Collectix Media will not be held liable for any damage, loss, or injury occurring during the shoot unless caused by direct negligence on our part. In case of unforeseen circumstances (e.g., natural disasters, power outages, etc.), Dazzler Films reserves the right to reschedule the shoot or provide a refund.`
},

{
number:"09",
title:"Alterations and Editing",
content:`The client may request a certain number of revisions or edits on the delivered content, which will be outlined in the agreement. Additional edits beyond the agreed number will incur additional fees.`
},

{
number:"10",
title:"Use of Footage",
content:`Dazzler Films/Dazzler Collectix Media reserves the right to use the footage, photos, and other media produced during the shoot for promotional purposes, portfolio display, and social media (with client approval for any identifiable persons or sensitive material).`
},

{
number:"11",
title:"Payment Terms",
content:`All payments should be made through the agreed-upon methods (bank transfer, cheque, or online payment).
Late payments will incur a 5% interest charge for every 7 days the payment is delayed.
`
},

{
number:"12",
title:"Legal Rights",
content:`Upon agreeing to these terms and conditions, both parties acknowledge and accept that Dazzler Films/Dazzler Collectix Media reserves full rights to seek legal consultation or take legal action in the event of non-compliance, breach of agreement, or non-payment.`
},

{
number:"13",
title:"Dispute Resolution",
content:`In the event of any dispute, both parties agree to attempt to resolve the matter amicably. If an agreement cannot be reached, the dispute will be settled in the courts of Mumbai, India.`
},


];

return(

<>

<Header/>

<section className="legal-hero">

<div className="legal-container">


<h1>

Terms & Conditions

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