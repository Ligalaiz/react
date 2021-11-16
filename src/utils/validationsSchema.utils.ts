import * as yup from 'yup';

export const validationsSchema = yup.object().shape({
  fileCV: yup
    .array()
    .of(
      yup.object().shape({
        file: yup
          .mixed()
          .test('fileSize', 'Размер файла больше 25 Мбайт', (value) => {
            if (!value) return false;
            return value.size / 1024 <= 26000;
          })
          .required(),
        type: yup
          .string()
          .oneOf(
            ['application/pdf', 'image/png', 'image/jpg'],
            'Добавьте фаил с правильным форматом',
          )
          .required(),
        name: yup.string().required(),
      }),
    )
    .typeError('Добавьте файл')
    .required(),
  portfolio: yup
    .array()
    .of(
      yup.object().shape({
        file: yup
          .mixed()
          .test('fileSize', 'Размер файла больше 25 Мбайт', (value) => {
            if (!value) return false;
            return value.size / 1024 <= 26000;
          })
          .required(),
        type: yup
          .string()
          .oneOf(['application/pdf'], 'Добавьте фаил с правильным форматом')
          .required(),
        name: yup.string().required(),
      }),
    )
    .typeError('Добавьте файл')
    .required(),
  letter: yup
    .array()
    .of(
      yup.object().shape({
        file: yup
          .mixed()
          .test('fileSize', 'Размер файла больше 25 Мбайт', (value) => {
            if (!value) return false;
            return value.size / 1024 <= 26000;
          })
          .required(),
        type: yup
          .string()
          .oneOf(['application/pdf'], 'Добавьте фаил с правильным форматом')
          .required(),
        name: yup.string().required(),
      }),
    )
    .typeError('Добавьте файл')
    .required(),
  task: yup
    .array()
    .of(
      yup.object().shape({
        file: yup
          .mixed()
          .test('fileSize', 'Размер файла больше 25 Мбайт', (value) => {
            if (!value) return false;
            return value.size / 1024 <= 26000;
          })
          .required(),
        type: yup
          .string()
          .oneOf(['application/pdf'], 'Добавьте фаил с правильным форматом')
          .required(),
        name: yup.string().required(),
      }),
    )
    .typeError('Добавьте файл')
    .required(),
  name: yup
    .string()
    .min(3, 'Too Short')
    .typeError('Most be string')
    .required('Required'),
  surname: yup
    .string()
    .min(3, 'Too Short')
    .typeError('Most be string')
    .strict()
    .required('Required'),
  phone: yup
    .number()
    .min(11, 'Too Long!')
    .typeError('Most be number')
    .required('Required')
    .positive()
    .integer()
    .min(10, 'Too Short')
    .required('Required'),
  agreement: yup.boolean().oneOf([true]).required('Required'),
  experience: yup
    .string()
    .typeError('Choice your experiance')
    .required('Required'),
  birthday: yup.string().typeError('Choice your birthday').required('Required'),
});
