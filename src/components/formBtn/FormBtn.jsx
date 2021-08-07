export default function FromBtn(props) {
  const { formBtn, handleFormBtnClick } = props;

  return (
    <button
      className="form__btn"
      style={formBtn ? {} : { backgroundColor: '#e11931', color: '#ffffff' }}
      disabled={formBtn}
      type="submit"
      onClick={handleFormBtnClick}
    >
      Apply for this job
    </button>
  );
}
