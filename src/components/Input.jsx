/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Input({ label, type, name, htmlFor, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}:
      </label>
      <input type={type} name={name} className="form-input" />
    </div>
  );
}
