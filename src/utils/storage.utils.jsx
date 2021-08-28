export function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export function get(name, dafault = null) {
  return JSON.parse(window.localStorage.getItem(name) || dafault);
}

export function del(name) {
  localStorage.removeItem(name);
}
