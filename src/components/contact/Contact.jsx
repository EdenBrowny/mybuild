import "./Contact.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const [message, setMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_57ap5sg",
        "template_ofe2vht",
        e.target,
        "cYAxG6CX96hbFmYEQ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Contact" id="Contact">
      <div className="left">
        <img src="assets/business.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail} ref={form}>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <textarea type="text" name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply Soon :)</span>}
        </form>
      </div>
    </div>
  );
}
