import React, { useState } from "react";
import "./Contact.css";


<ion-icon name="heart"></ion-icon>;
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("DEV1 ERROR: -", error));
  };

  return (
    <div>
     <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          {/* <p>
            lorem ipusm, dolor sit amet consectetur adipisicing elit.
            Exercitationem numquam id reprehendenit, sunt laudantium enim
            possimus repellat debits et quist!
          </p> */}
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Vishnupuram,Bhimavarm,
                  <br />
                  West Godavari Dist,Andhra Pradesh
                  <br />
                  534202
                </p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>000-000-0000</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>Eg:abc@gmail.com</p>
              </div>
            </div>

            <div>
              <h2 className="txt">Contact with us</h2>
              <ul className="sci">
                <li>
                  <a href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contactForm">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                required="required"
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                required="required"
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required="required"
              ></textarea>
              <span>type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="send" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
