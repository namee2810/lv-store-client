import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useMutation } from "@apollo/client"
import threeDotsSVG from "assets/images/three-dots.svg"
import Box from "components/Box"
import Button from "components/Button"
import Input from "components/Input"
import React from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import SIGN_IN from "services/apollo/mutations/signIn"
import sha256 from "sha256"

export default function SignInForm() {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const [signIn, { loading }] = useMutation(SIGN_IN)
  const history = useHistory()

  const onValid = (values: any) => {
    const { email, password } = values
    signIn({
      variables: {
        email,
        password: sha256(password),
      },
    })
      .then((res) => {
        const user = res.data.signIn
        if (user) {
          toast.success(t("signIn.success"))
          history.replace("/")
        } else {
          toast.error(t("signIn.fail"))
        }
      })
      .catch((err) => {
        toast.error(t("common.error"))
        console.log(err)
      })
  }
  const onInvalid = (errors: any) => {
    for (let error in errors) toast.error(errors[error].message)
  }

  return (
    <Box
      py={3}
      px={2}
      mt={2}
      elevation={5}
      borderRadius={8}
      width="350px"
      style={{ zIndex: 999 }}
    >
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <Box>
          <Input
            {...register("email", {
              required: { value: true, message: t("signIn.emailRequired") },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Email không hợp lệ",
              },
            })}
            type="email"
            placeholder="Email"
            prefix={<UserOutlined />}
            size="large"
          />
        </Box>
        <Box mt={1}>
          <Input
            {...register("password", {
              required: { value: true, message: t("signIn.passwordRequired") },
              minLength: {
                value: 6,
                message: "Mật khẩu có độ dài tối thiểu 6 kí tự",
              },
            })}
            placeholder={t("signIn.password")}
            type="password"
            prefix={<LockOutlined />}
            size="large"
          />
        </Box>
        <Box mt={2}>
          <Button
            htmlType="submit"
            color="success"
            width="100%"
            size="large"
            disabled={loading}
          >
            {loading ? (
              <img
                src={threeDotsSVG}
                style={{ maxWidth: "50px" }}
                alt="loading"
              />
            ) : (
              t("signIn.signIn")
            )}
          </Button>
        </Box>
      </form>
    </Box>
  )
}
