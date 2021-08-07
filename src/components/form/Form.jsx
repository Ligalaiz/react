import { useState, useEffect } from 'react';
import { isNameValid, isNumberValid, isFileValid } from '../../utils';
import FileField from '../fileField/FileField';
import DataField from '../dataField/DataField';

const baseState = {
  fileCV: '',
  letter: '',
  task: '',
  portfolio: '',
  name: '',
  surname: '',
  birthday: '',
  experience: 'junior',
  phone: '',
  agreement: false,
};

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function () {
    document.documentElement.classList.remove('transition');
  }, 1500);
}

export default function Form(props) {
  const [data, setData] = useState(baseState);
  const [mode, setMode] = useState(false);
  const [formBtn, setFormBtn] = useState(true);
  const [error, setError] = useState(null);
  const [submit, setSubmit] = useState(false);
  const { setCards, setMessage } = props;

  const {
    fileCV,
    name,
    surname,
    birthday,
    agreement,
    experience,
    phone,
    letter,
    task,
    portfolio,
  } = data;

  function handleSubmit(e) {
    e.preventDefault();
    setCards((state) => [...state, data]);
    setData(baseState);
    setError(null);
    setSubmit(true);
  }

  useEffect(() => {
    let messageTimer;
    let submitTimer;

    if (submit) {
      setMessage(true);
      messageTimer = setTimeout(() => setMessage(false), 1000);
      submitTimer = setTimeout(() => setSubmit(false), 2000);
    }

    return function cleanup() {
      clearTimeout(messageTimer);
      clearTimeout(submitTimer);
    };
  }, [setMessage, submit]);

  useEffect(() => {
    function validation() {
      let result = {};

      if (
        isNameValid(name).name ||
        isNameValid(surname).name ||
        !fileCV ||
        !letter ||
        !task ||
        !portfolio ||
        !isNumberValid(phone).name ||
        !birthday ||
        !agreement
      ) {
        result.name = name.length;
        result.surname = surname.length;
        result.fileCV = false;
        result.letter = false;
        result.task = false;
        result.portfolio = false;
        result.phone = false;
        result.birthday = false;
      } else {
        result = null;
      }
      setFormBtn(!!result);
    }
    validation();
  }, [
    name,
    surname,
    fileCV,
    agreement,
    letter,
    task,
    portfolio,
    phone,
    birthday,
  ]);

  function handleFormBtnClick(e) {
    setFormBtn(e.target.disabled);
  }

  const handleChange = (e) => {
    const { target } = e;
    const { type, checked } = target;
    let { value } = target;

    if (type === 'file') {
      if (isFileValid(e)) {
        value = e.currentTarget.files[0].name;
        e.target.value = null;
        setError((state) => ({ ...state, [target.name]: false }));
      } else {
        setError((state) => ({ ...state, [target.name]: true }));
        return;
      }
    }

    if (type === 'checkbox') {
      value = checked;
    }

    if (target.name === 'phone') {
      if (isNaN(Number(value))) {
        return;
      }
    }
    if (target.name === 'name' || target.name === 'surname') {
      if (value.match(/[\d\s]/g)) {
        return;
      }
    }
    setData((state) => ({ ...state, [target.name]: value }));
  };

  const handleModeChange = (e) => {
    transition();
    const { checked } = e.target;
    if (checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    setMode(checked);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form">
      <div className="form__file file">
        <div className="file__wrap file__wrap--left">
          <FileField handleChange={handleChange} error={error} name="fileCV" />
          <FileField
            handleChange={handleChange}
            error={error}
            name="portfolio"
          />
        </div>
        <div className="file__wrap file__wrap--right">
          <FileField handleChange={handleChange} error={error} name="letter" />
          <FileField handleChange={handleChange} error={error} name="task" />
        </div>
      </div>
      <DataField
        name="name"
        value={name}
        maxLength="11"
        handleChange={handleChange}
        isValid={isNameValid}
      />
      <DataField
        name="surname"
        value={surname}
        maxLength="11"
        handleChange={handleChange}
        isValid={isNameValid}
      />

    </form>
  );
}
