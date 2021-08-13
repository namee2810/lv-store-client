import { useMutation } from "@apollo/client"
import useAppDispatch from "hooks/useAppDispatch"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { SIGN_IN as SIGN_IN_MUTATION } from "services/apollo/mutations/signIn"
import sha256 from "sha256"
import {
  SIGN_IN as SIGN_IN_ACTION,
  SIGN_OUT as SIGN_OUT_ACTION,
} from "store/slices/user"

export interface SignInArgs {
  email: string
  password: string
}

export default function useAuth() {
  const [signInMutation, { loading: signInLoading }] =
    useMutation(SIGN_IN_MUTATION)
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

  const signOut = () => {
    dispatch(SIGN_OUT_ACTION())
  }

  return { signIn, signOut, signInLoading }
}
