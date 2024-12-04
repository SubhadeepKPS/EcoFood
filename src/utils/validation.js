export const validateSignUp = (name, email, passwd) => {
  const validateName = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);

  const validateEmail = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/.test(
    email
  );
  const validatePassword =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwd);

  if (!validateName) {
    return "Please provide a valid name..";
  } else if (!validateEmail) {
    return "Please provide a valid email.";
  } else if (!validatePassword) {
    return "Please provide a valid password.";
  } else {
    return null;
  }
};

export const validateSignIn = (email, passwd) => {
  const validateEmail = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/.test(
    email
  );
  const validatePassword =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwd);

  if (!validateEmail) {
    return "Please provide a valid email.";
  } else if (!validatePassword) {
    return "Please provide a valid password.";
  } else {
    return null;
  }
};
