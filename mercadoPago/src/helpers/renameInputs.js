export const renameInputs = (val) => {
  switch (val) {
    case "Correo electrónico":
      return "email";
    case "Contraseña":
      return "password";
    case "Usuario":
      return "fullname";
    case "Alias":
      return "alias";
    case "Teléfono":
      return "phone";
    default:
      break;
  }
};
