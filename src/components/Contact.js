import React from "react";
import "../style/Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact() {

    const copyToClipboard = (element) => {
        debugger;
        console.log(element.target);
        var str = element.target.innerHTML;
        document.getElementById("inputCopy").style.display = "block";
        document.getElementById("inputCopy").value = str;
        var copyTextInput = document.getElementById("inputCopy");
        copyTextInput.select();
        document.execCommand("copy");
        document.getElementById("inputCopy").style.display = "none";
        alert("Text copied to clipboard");
      };

  return (
    <section id="contact" className="Contact">
      <div className="Contact_div">
        <h2>Contact Me</h2>
        <div className="Contact_div_articles">
        <article className="Contact_articles" onClick={copyToClipboard}>
          <h4>
            <PhoneIcon sx={{ fontSize: "2rem", color: "var(--title-color)", marginRight: "0.2em"  }} />
            Phone Number{" "}
          </h4>
          <p>+351 915-204-569</p>
        </article>
        <article  className="Contact_articles" onClick={copyToClipboard}>
          <h4>
            <MailOutlineIcon sx={{ fontSize: "2rem", color: "var(--title-color)", marginRight: "0.2em" }}/>
            Email
          </h4>
          <p>dev.gabigontijo@gmail.com</p>
        </article>
        </div>
        <input
              id="inputCopy"
              type="text"
              style={{ display: "none" }}
            ></input>
      </div>
    </section>
  );
}

export default Contact;
