export default function Card(props) {
  const { card, index } = props;
  const fields = [
    'birthday',
    'experience',
    'fileCV',
    'name',
    'surname',
    'phone',
    'letter',
    'task',
    'portfolio',
  ];

  const filtredCardFields = [...Object.keys(card)].filter((item) => {
    return fields.findIndex((i) => i === item) !== -1 && card[item];
  });

  return (
    <div>
      <p>#{index + 1}</p>
      <ul className="reset-list card__list">
        {filtredCardFields.map((item) => {
          return (
            <li key={item} className="card__item">
              {item}: {card[item]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
