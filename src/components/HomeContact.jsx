import "../assets/styles/homecontact.css";

const HomeContact = () => {
  return (
    <section className="home-contact">
      <div className="container">

        {/* Left Side */}
        <div className="contact-left">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>
            Let's Work <br />
            Together.
          </h2>

          <p>
            Looking for cinematic video production, photography,
            creative production?
            We'd love to hear about your project.
          </p>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="79b004d1-64f4-4551-bcbe-e81ce5135621"
            />

            <input
              type="hidden"
              name="subject"
              value="New Inquiry from Homepage"
            />

            <input
              type="hidden"
              name="from_name"
              value="Dazzler Films Website"
            />

            {/* Anti Spam */}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit">
              Send Inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default HomeContact;