export default function getDateUtils() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const currentDate = `${date.getFullYear()}-${
    month < 10 ? `0${month}` : month
  }-${day < 10 ? `0${day}` : day}`;
  return currentDate;
}
