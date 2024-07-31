/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Input({ label, type, name, id, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}:
      </label>
      <input type={type} name={id} className="form-input" />
    </div>
  );
}
