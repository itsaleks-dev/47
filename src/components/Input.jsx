import { Field, ErrorMessage } from "formik";

export default function Input({ label, name, type = "text", placeholder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <label htmlFor={name} style={{ fontWeight: "500" }}>
        {label}
      </label>

      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <ErrorMessage
        name={name}
        component="div"
        style={{ color: "red", fontSize: "14px" }}
      />
    </div>
  );
}