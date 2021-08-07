export default function isNumberValid(value) {
  return {
    name: value.length === 10,
    message: value.length < 10 && value.length > 0,
  };
}
