import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style.css/forma.css";

function Forma() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      comment: "",
      eventDate: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("حقل الاسم مطلوب"),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, "يجب أن يحتوي رقم الهاتف على أرقام فقط")
        .required("حقل رقم الهاتف مطلوب"),
      comment: Yup.string().required("حقل التعليق مطلوب"),
      eventDate: Yup.date().required("حقل تاريخ المناسبة مطلوب"),
    }),
    onSubmit: (values) => {
      console.log("تم إرسال البيانات:", values);
    },
  });

  return (
    <form  className="form" onSubmit={formik.handleSubmit}>
      <div>
        <h3> قدم استفسارك هنا</h3>
        <label htmlFor="name">الاسم:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="phoneNumber">رقم الهاتف:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="eventDate">تاريخ المناسبة:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.eventDate}
        />
        {formik.touched.eventDate && formik.errors.eventDate ? (
          <div>{formik.errors.eventDate}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="comment">التعليق:</label>
        <textarea
          id="comment"
          name="comment"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
        />
        {formik.touched.comment && formik.errors.comment ? (
          <div>{formik.errors.comment}</div>
        ) : null}
      </div>
      <button type="submit">إرسال</button>
    </form>
  );
}

export default Forma;
