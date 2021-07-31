import { gql } from "@apollo/client"

const SIGN_IN = gql`
  mutation ($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      user {
        email
        image
        name
      }
      token
    }
  }
`
export { SIGN_IN }
