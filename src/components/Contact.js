import { useState } from "react";
import { Col } from "react-bootstrap";

export const Contact = () => {
  const formInputDetails = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInputDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInputDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Thank you for your submission" });
    } else {
      setStatus({ success: false, message: "Error, please try again" });
    }
  };

  return (
    <section className="section-contact" id="contact" netlify>
      <div className="container">
        <div className="contact">
          <div className="contact-textbox">
            <h2>Lets get in touch!</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={formDetails.fullName}
                  onChange={(e) => onFormUpdate("fullName", e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="me@example.com"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Phone No.</label>
                <input
                  type="tel"
                  value={formDetails.phone}
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                  placeholder="+1 (XXX) XXX-XXXX"
                />
              </div>
              <div>
                <label>Leave a message</label>
                <textarea
                  placeholder="message..."
                  value={formDetails.message}
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn">
                {buttonText}
              </button>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
