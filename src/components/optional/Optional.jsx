export default function Optional(props) {
  const { apartment } = props;
  const optionals = [
    'guests',
    'bedroom',
    'bed',
    'bath',
    'wifi',
    'condition',
    'kitchen',
    'heating',
  ];
  const result = [];

  const keys = Object.keys(apartment);

  for (const key of keys) {
    if (optionals.indexOf(key) !== -1 && apartment[key]) {
      result.push(
        <li className="optional__item" key={key}>
          {apartment[key]} {key}
          {key === optionals[optionals.length - 1] ? '' : ' · '}
        </li>,
      );
    }
  }

  return result;
}
