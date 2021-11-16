/** @jsxImportSource @emotion/react */
import { AgreementField } from '@components/AgreementField';
import { BirthdayField } from '@components/BirthdayField';
import { DataField } from '@components/DataField';
import { FileField } from '@components/FileField';
import { FormBtn } from '@components/FormBtn';
import { SwitchField } from '@components/SwitchField';
import { SelectField } from '@src/components/SelectField';
import { IForm } from '@src/interfaces';
import { Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { validationsSchema } from '@src/utils';
import { fileField, fileWrap, formStyle, optionWrap } from './FormStyles';

const baseState = {
  fileCV: null,
  letter: null,
  task: null,
  portfolio: null,
  name: '',
  surname: '',
  birthday: '',
  experience: 'junior',
  phone: '',
  agreement: false,
};

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1500);
}

export const Form: FC<IForm> = ({ setCards, setMessage, cards }) => {
  const [mode, setMode] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    let messageTimer: ReturnType<typeof setTimeout>;

    if (submit) {
      setMessage(true);
      messageTimer = setTimeout(() => setMessage(false), 1000);
    }

    return function cleanup() {
      clearTimeout(messageTimer);
    };
  }, [setMessage, submit]);

  const handleModeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    transition();
    const { checked } = e.currentTarget as HTMLInputElement;
    if (checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    setMode(checked);
  };

  return (
    <>
      <Formik
        initialValues={baseState}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          setCards([...cards, values]);
          setSubmit(true);
          resetForm();
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="form"
            css={formStyle}
          >
            <div className="form__file file" css={fileField}>
              <div className="file__wrap file__wrap--left" css={fileWrap}>
                <FileField values={values} fieldErrors={errors} name="fileCV" />
                <FileField
                  values={values}
                  fieldErrors={errors}
                  name="portfolio"
                />
              </div>
              <div className="file__wrap file__wrap--right" css={fileWrap}>
                <FileField values={values} fieldErrors={errors} name="letter" />
                <FileField values={values} fieldErrors={errors} name="task" />
              </div>
            </div>
            <DataField
              name="name"
              value={values.name}
              maxLength={11}
              handleChange={handleChange}
              isValid={isValid}
              type="text"
              touched={touched}
              errors={errors}
              handleBlur={handleBlur}
            />
            <DataField
              name="surname"
              value={values.surname}
              maxLength={11}
              handleChange={handleChange}
              isValid={isValid}
              type="text"
              touched={touched}
              errors={errors}
              handleBlur={handleBlur}
            />
            <DataField
              name="phone"
              value={values.phone}
              type="tel"
              maxLength={10}
              minLength={10}
              handleChange={handleChange}
              isValid={isValid}
              touched={touched}
              errors={errors}
              handleBlur={handleBlur}
            />
            <div className="option__wrap" css={optionWrap}>
              <SelectField
                experience={values.experience}
                handleChange={handleChange}
              />
              <BirthdayField
                birthday={values.birthday}
                handleChange={handleChange}
              />
            </div>
            <AgreementField
              agreement={values.agreement}
              handleClick={handleChange}
            />
            <SwitchField mode={mode} handleModeChange={handleModeChange} />
            <FormBtn isValid={isValid} dirty={dirty} />
          </form>
        )}
      </Formik>
    </>
  );
};
