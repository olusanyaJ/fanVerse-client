import "./Input.scss";

function Input({ label, name, type, value, onChange, error }) {
  return (
    <div className="field">
      {/* <label htmlFor={name} className="field__label">
        {label}
        </label> */}
      <input
        type={type}
        id={name}
        name={name}
        className={`field__input ${error ? "field__invalid" : ""}`}
        placeholder={name}
        autoComplete="given-name"
        value={value}
        onChange={onChange}
      />
      {error && <p className="field__error-message">{error}</p>}
    </div>
  );
}
export default Input;
