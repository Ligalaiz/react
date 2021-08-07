import Form from './form/Form';
import '../styles/index.scss';

const App = () => {

  return (
    <>
      <div className="form__wrap">
        <h2 className="form__title">Application Form</h2>
        <p className="form__subtitle">
          Complete the form below, telling us why you’d be a great fit at
          Wargaming, and you could be part of our awesome family.
        </p>
        <Form />
      </div>
    </>
  );
};

export default App;
