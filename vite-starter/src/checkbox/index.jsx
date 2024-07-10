import "./index.css";

export const CheckBox = ({ checked = false, onChange }) => {
  return (
    <div className="checkbox">
      <label htmlFor="checkbox">checkbox</label>
      <input
        id="checkbox"
        checked={checked}
        type="checkbox"
        defaultChecked={false}
        onChange={(e) => {
          onChange?.(e.target.checked);
        }}
      />
    </div>
  );
};
