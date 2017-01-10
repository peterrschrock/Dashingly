export const signup = (username, password) => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: {user: {username: username, password: password}}
  })
);

export const login = (username, password) => (
  $.ajax({
    method: "POST",
    url: "api/sessions",
    data: {user: {username: username, password: password}}
  })
);

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "api/sessions"
  })
);
