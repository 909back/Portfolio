import React from "react";
import emailjs from "@emailjs/browser";

import style from "../assets/scss/Contact.module.scss";
import Modal from "../components/Modal";
import RegexHelper from "../util/Regex";


const Contact = () => {
  const Form = React.useRef();
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const [name, setName] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const regex = new RegexHelper();

    if (!regex.value("formEmail", "이메일을 입력해주세요.")) {
      return
    }
    if (!regex.email("formEmail", "이메일 형식으로 입력해주세요.")) {
      return
    }


    if (!regex.value("formName", "이름을 입력해주세요.")) {
      return
    }
    if (!regex.value("formSubject", "제목을 입력해주세요.")) {
      return
    }
    if (!regex.value("formText", "내용을 입력해주세요.")) {
      return
    }



    emailjs
      .sendForm(
        "service_7a3ppqi",
        "template_icsj0pq",
        Form.current,
        "UuDreQWLFtAeQHvBg"
      )
      .then(
        (result) => {
          setResult(true);
        },
        (error) => {
          console.log(error);
          setResult(false);
        }
      )
      .finally(setOpen(true));
  };

  const onClick = () => {
    setOpen(false);
  };

  return (
    <section className={style.contact} onSubmit={sendEmail}>
      <h2 className={style.title}>CONTACT ME</h2>
      <form ref={Form} className={style.form} action="">
        <div className={style.emailAddr}>
          <label className={style.label} htmlFor="">
            EMAIL
          </label>
          <input
            className={style.input}
            type="text"
            placeholder="INPUT YOUR EMAIL"
            name="email"
            id="formEmail"
          />
        </div>
        <div className={style.name}>
          <label className={style.label} htmlFor="">
            NAME
          </label>
          <input
            className={style.input}
            type="text"
            name="name"
            id="formName"
            placeholder="INPUT YOUR NAME"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className={style.emailTitle}>
          <label className={style.label} htmlFor="">
            TITLE
          </label>
          <input
            className={style.input}
            type="text"
            placeholder="INPUT TITLE"
            name="subject"
            id="formSubject"
          />
        </div>

        <textarea id="formText" name="message" cols="30" rows="10"></textarea>
        <button type="submit">SEND</button>
      </form>

      {open && (
        <Modal
          styleName={style.modal}
          status={result}
          onClick={onClick}
          name={name}
        />
      )}
    </section>
  );
};

export default Contact;
