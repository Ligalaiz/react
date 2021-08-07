const show = {
  visibility: 'visible',
  color: 'red',
};

const title = {
  fileCV: 'CV',
  portfolio: 'Portfolio',
  letter: 'Cover Letter',
  task: 'Test Task',
};

export default function FileField(props) {
  const { handleChange, error, name } = props;

  return (
    <div>
      <label className="file__label">
        {title[name]} *
        <input type="file" name={name} onChange={handleChange} />
      </label>
      <p>
        <span
          className="form__notice"
          style={
            error !== null && error[name] ? show : { visibility: 'hidden' }
          }
        >
          unsupported format or large file size
        </span>
      </p>
    </div>
  );
}
