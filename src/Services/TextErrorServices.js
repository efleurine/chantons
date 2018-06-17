const again = "Essayer à nouveau";

/**
 * This function takes an error object and return
 * a message based on the error code
 * @param  error Object
 */
export default function textErrorServices(error) {
  switch (error.code) {
    // User account Error
    case "NotAuthorizedException":
      return "Email incorrect";
    case "UsernameExistsException":
      return [
        "Un compte existe déjà avec cet email/username",
        "Essayer avec un autre email/username ou répurer votre mot de passe"
      ];

    case "UserNotFoundException":
      return "Email ou nom d'utilisateur invalide";
    case "ExpiredCodeException":
      return "Votre code de sécurité à expirer - Demander un nouveau code";
    case "InvalidPasswordException":
      return "Assurez-vous que votre password respecte le niveau de sécurité";

    // General Error
    case "NetworkError":
      return "Erreur de connection";
    case "InvalidParameterException":
      return "Vérifiez - les informations que vous avez entrer";
    default:
      return "Une erreur s'est produite - Réessayer";
  }
}
