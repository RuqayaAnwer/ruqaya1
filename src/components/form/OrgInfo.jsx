import React from 'react'
import '../style.css/orginfo.css'

function OrgInfo() {
  return (
    <div className="contact-container">
    <div className="contact-item">
      <div className="label">رقم الهاتف:</div>
      <div className="value">0123456789</div>
    </div>
    <div className="contact-item">
      <div className="label">البريد الإلكتروني:</div>
      <div className="value">example@example.com</div>
    </div>
  </div>
  )
}

export default OrgInfo
