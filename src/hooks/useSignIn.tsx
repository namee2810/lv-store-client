import { useMutation } from "@apollo/client"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import SIGN_IN from "services/apollo/mutations/signIn"
import sha256 from "sha256"

export interface SignInArgs {
  email: string
  password: string
}

export default function useSignIn() {
  const [signInMutation, { loading }] = useMutation(SIGN_IN)
  const { t } = useTranslation()

  const signIn = ({ email, password }: SignInArgs) => {
    signInMutation({
      variables: {
        email,
        password: sha256(password),
      },
    })
      .then(({ data }) => {
        const user = data.signIn
        if (user) {
          toast.success(t("signIn.success"))
        } else {
          toast.error(t("signIn.fail"))
        }
      })
      .catch((error) => {
        toast.error(t("common.error"))
        console.log(error)
      })
  }

  return { signIn, loading }
}
