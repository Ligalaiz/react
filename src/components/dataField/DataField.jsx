const show = {
  visibility: 'visible',
  color: 'red',
};

const title = {
  name: 'Name *',
  surname: 'Surname *',
  phone: '+7(___)___ ____ *',
};

export default function DataField(props) {
  const { value, handleChange, isValid, name, maxLength, minLength, type } =
    props;

  return (
    <div className="form__{name} {name}">
      <input
        name={name}
        value={value}
        maxLength={maxLength}
        minLength={minLength || ''}
        type={type || ''}
        className="form__field form__field--{name}"
        onChange={handleChange}
        placeholder={title[name]}
      />
      <p>
        <span
          className="form__notice"
          style={isValid(value).message ? show : { visibility: 'hidden' }}
        >
          please input {name} {name === 'phone' ? '' : 'more'}{' '}
          {name === 'phone' ? 10 : 6} characters
        </span>
      </p>
    </div>
  );
}
