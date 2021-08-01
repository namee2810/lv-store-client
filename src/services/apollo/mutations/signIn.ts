import { gql } from "@apollo/client"

const SIGN_IN = gql`
  mutation ($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      user {
        _id
        email
        image
        name
      }
      token
    }
  }
`
export { SIGN_IN }
