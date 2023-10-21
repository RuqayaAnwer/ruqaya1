 import "./formcontact.css"
import React from "react"

const Form = () => {
  return <div className="form">
    <h1 className="h" style={{textAlign:"center"}}>تواصل معنا</h1>
    <form>
      <label>اسمك</label>
      <input type="text"></input>
      <label>البريد الألكتروني</label>
      <input type="email"></input>
      <label>الموضوع</label>
      <input type="text"></input>
      <label>رسالتك</label>
      <textarea rows="6" placeholder="اكتب رسالتك هنا" />
      <button className="btn" style={{alignItems:"center",background:"#698474",color:"white"}}>ارسال</button>
    </form>
  </div>
};
export default Form;