import { LockOutlined, UserOutlined } from "@ant-design/icons"
import Box from "components/Box"
import Button from "components/Button"
import Input from "components/Input"
import React from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

export default function SignInForm() {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()

  const onValid = (values: any) => {
    console.log(values)
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
          <Button htmlType="submit" color="success" width="100%" size="large">
            {t("signIn.signIn")}
          </Button>
        </Box>
      </form>
    </Box>
  )
}
