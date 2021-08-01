import { useMutation } from "@apollo/client"
import useAppDispatch from "hooks/useAppDispatch"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { SIGN_IN as SIGN_IN_MUTATION } from "services/apollo/mutations/signIn"
import sha256 from "sha256"
import { SIGN_IN as SIGN_IN_ACTION } from "store/slices/userSlice"

export interface SignInArgs {
  email: string
  password: string
}

export default function useSignIn() {
  const [signInMutation, { loading }] = useMutation(SIGN_IN_MUTATION)
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const signIn = ({ email, password }: SignInArgs) => {
    signInMutation({
      variables: {
        email,
        password: sha256(password),
      },
    })
      .then(({ data: { signIn: data } }) => {
        if (data) {
          const { user, token } = data
          toast.success(t("signIn.success", { name: user.name }))
          localStorage.setItem("token", token)

          dispatch(SIGN_IN_ACTION({ user, token }))
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
