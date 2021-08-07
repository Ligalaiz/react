export default function SelectField(props) {
  const { experience, handleChange } = props;

  return (
    <div className="experience">
      <label htmlFor="experience__label">
        * work experience:&nbsp;
        <select
          className="experience__select"
          name="experience"
          value={experience}
          onChange={handleChange}
        >
          <option className="experiance__item" value="junior">
            junior
          </option>
          <option className="experiance__item" value="middle">
            middle
          </option>
          <option className="experiance__item" value="senior">
            senior
          </option>
        </select>
      </label>
    </div>
  );
}
