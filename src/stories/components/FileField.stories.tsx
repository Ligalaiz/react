import { Meta, Story } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyle } from '../../styles';
import { FileField } from '../../components/FileField';
import React from 'react';
import { IFileField } from '../../interfaces';
import { Formik } from 'formik';
import { validationsSchema } from '../../utils';

const meta: Meta = {
  title: 'FileField',
  component: FileField,
};

export default meta;
const Template: Story<IFileField> = (args) => (
  <>
    <Global styles={globalStyle} />
    <Formik
      initialValues={{}}
      validateOnBlur
      onSubmit={() => {}}
      validationSchema={validationsSchema}
    >
      {({}) => <FileField {...args} />}
    </Formik>
  </>
);

export const fileCV = Template.bind({});
fileCV.args = {
  name: 'fileCV',
  values: {},
  fieldErrors: {},
};

export const fileCVWithError = Template.bind({});
fileCVWithError.args = {
  name: 'fileCV',
  values: {},
  fieldErrors: { fileCV: { '0': { file: 'Размер файла больше 25 Мбайт' } } },
};
