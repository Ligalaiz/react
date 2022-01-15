export function set(name, value) {
  if (global.localStorage) {
    global.localStorage?.setItem(name, JSON.stringify(value));
  }
}

export function get(name, dafault = null) {
  return JSON.parse(global.localStorage.getItem(name) || dafault);
}

export function del(name) {
  if (global.localStorage) {
    localStorage.removeItem(name);
  }
}
