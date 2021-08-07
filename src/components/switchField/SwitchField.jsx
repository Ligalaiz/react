export default function SwitchField(props) {
  const { mode, handleModeChange } = props;

  return (
    <label className="switch">
      <input
        name="mode"
        id="checkbox"
        type="checkbox"
        data-control="checkbox"
        checked={mode}
        onChange={handleModeChange}
      />
      <span className="slider round" />
    </label>
  );
}
