import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "./Input";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Ім’я обов’язкове"),
  email: Yup.string()
    .email("Некоректна електронна пошта")
    .required("Електронна пошта обов’язкова"),
  password: Yup.string()
    .min(6, "Мінімум 6 символів")
    .required("Пароль обов’язковий"),
});

export default function MyForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted:", values);
        alert(`Welcome, ${values.name}!`);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "40px auto",
            gap: "15px",
            fontFamily: "sans-serif",
          }}
        >
          <h2>Реєстраційна форма</h2>

          <Input
            label="Ім’я"
            name="name"
            placeholder="Введіть ім’я"
          />

          <Input
            label="Електронна пошта"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />

          <Input
            label="Пароль"
            name="password"
            type="password"
            placeholder="Введіть пароль"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Надіслати
          </button>
        </Form>
      )}
    </Formik>
  );
}
