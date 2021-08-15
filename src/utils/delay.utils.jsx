export default async function delayUtils(response) {
  return new Promise((res) => {
    setTimeout(() => res(response), 1500);
  });
}
