import React from 'react';

function ContactForm() {
  // هنا يمكنك تنفيذ مكون نموذج الاتصال
  return (
    <form>
      <label htmlFor="name">الاسم:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">البريد الإلكتروني:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">الرسالة:</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">إرسال</button>
    </form>
  );
}

export default ContactForm;
