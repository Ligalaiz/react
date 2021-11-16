import { ICardApp, IFileField, IShow, ITitleFile } from '@src/interfaces';
import { FieldArray } from 'formik';
import React, { FC } from 'react';
import { fileLabel, formNotice, fileField } from './FileFieldStyle';

const show: IShow = {
  visibility: 'visible',
  color: 'red',
};

const title: ITitleFile = {
  fileCV: 'CV',
  portfolio: 'Portfolio',
  letter: 'Cover Letter',
  task: 'Test Task',
};

const getFileSchema = (file: File | null | undefined) =>
  file && {
    file,
    type: file.type,
    name: file.name,
  };

export const FileField: FC<IFileField> = ({ fieldErrors, name, values }) => {
  return (
    <div>
      <label className="file__label" css={fileLabel}>
        {title[name]} *
        <FieldArray name={name}>
          {(arrayHelper) => (
            <>
              <input
                name={name}
                css={fileField}
                type="file"
                accept=".pdf"
                data-testid={name}
                onChange={(e) => {
                  const { files } = e.target;
                  const file = getFileSchema(files?.['0']);

                  if (!file) {
                    arrayHelper.remove(0);
                  }

                  if (Array.isArray(values[name as keyof ICardApp])) {
                    arrayHelper.replace(0, file);
                  } else {
                    arrayHelper.push(file);
                  }
                }}
              />
            </>
          )}
        </FieldArray>
      </label>
      <p>
        <span
          className="form__notice"
          css={formNotice}
          style={fieldErrors[name]?.[0] ? show : { visibility: 'hidden' }}
        >
          {fieldErrors[name]?.[0]?.file
            ? fieldErrors[name]?.[0]?.file
            : fieldErrors[name]?.[0]?.type}
        </span>
      </p>
    </div>
  );
};
