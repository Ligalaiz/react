export default function AgreementField(props) {
  const { agreement, handleChange } = props;

  return (
    <div className="agreement">
      <label className="agreement__checkbox">
        <input
          name="agreement"
          type="checkbox"
          checked={agreement}
          onChange={handleChange}
        />
        <span>
          <a
            className="agreement__link"
            target="_blank="
            href="http://www.it-lex.ru/usloviya_ispolzovaniya_servisa/obrazec-politiki-konfidencialnosti-2017/"
          >
            I accept the agreement *
          </a>
        </span>
      </label>
    </div>
  );
}
