export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "api/charts",
    data: {user: {username: user.username, password: user.password}}
  })
);

export const login = (user) => (
  $.ajax({
    method: "POST",
    url: "api/sessions",
    data: {user: {username: user.username, password: user.password}}
  })
);

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "api/sessions"
  })
);

export const guestLogin = () => (
  $.ajax({
    method: "POST",
    url: "api/sessions",
    data: {user: {username: "guest", password: "hire_me"}}
  })
);
