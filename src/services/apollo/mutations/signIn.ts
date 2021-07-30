import { gql } from "@apollo/client"

const SIGN_IN = gql`
  mutation ($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      email
      image
      name
    }
  }
`
export default SIGN_IN
