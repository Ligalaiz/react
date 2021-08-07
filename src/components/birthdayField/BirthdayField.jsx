export default function BirthdayField(props) {
  const { birthday, handleChange } = props;

  return (
    <div className="birthday">
      <label className="birthday__label">
        * birthday:
        <input
          type="date"
          name="birthday"
          value={birthday}
          className="birthday__field"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
