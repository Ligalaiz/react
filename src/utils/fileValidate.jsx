export default function isFileValid(e) {
  const extensions = ['doc', 'xls', 'pdf', 'jpg', 'zip', 'rar'];

  const target = e.currentTarget;
  const filesize = (target.files[0].size / 1024 / 1024).toFixed(4);
  const filesExtension = target.files[0].name.match(/[^.]+$/g)[0];

  if (
    filesize >= 25 ||
    extensions.findIndex((item) => item === filesExtension) === -1
  ) {
    return false;
  }

  return true;
}
