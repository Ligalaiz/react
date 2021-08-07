export default function isNameValid(value) {
  return {
    name: value.length < 6,
    message: value.length < 6 && value.length > 0,
  };
}
