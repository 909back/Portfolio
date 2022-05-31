import React from "react";
import style from '../assets/scss/Contact.module.scss'



const Contact = () => {
  return (
    <section className={style.contact}>
      <h2 className={style.title}>CONTACT ME</h2>
      <form className={style.form} action="">
          <div className={style.name}>
        <label className={style.label} htmlFor="">NAME</label>
        <input className={style.input} type="text" placeholder="INPUT YOUR NAME"/>
          </div>
          <div className={style.emailTitle}>
        <label className={style.label} htmlFor="">TITLE</label>
        <input className={style.input} type="text" placeholder="INPUT TITLE" />
          </div>
        <textarea className={style.textarea} type="text" placeholder="TEXT" />
        <button type='submit'>SEND</button>
      </form>
    </section>
  );
};

export default Contact;
