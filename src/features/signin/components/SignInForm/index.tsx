import { LockOutlined, UserOutlined } from "@ant-design/icons"
import Box from "components/Box"
import Button from "components/Button"
import Input from "components/Input"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export default function SignInForm() {
  const { register, handleSubmit } = useForm()

  const onValid = (values: any) => {
    console.log(values)
  }
  const onInvalid = (errors: any) => {
    for (let error in errors) toast.warning(errors[error].message)
  }

  return (
    <Box
      p={2}
      mt={2}
      elevation={5}
      borderRadius={8}
      width="350px"
      style={{ zIndex: 999 }}
    >
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <Box>
          <Input
            {...register("username", {
              required: { value: true, message: "Hãy nhập tên tài khoản" },
            })}
            placeholder="Tài khoản"
            prefix={<UserOutlined />}
          />
        </Box>
        <Box mt={1}>
          <Input
            {...register("password", {
              required: { value: true, message: "Hãy nhập mật khẩu" },
              minLength: {
                value: 8,
                message: "Mật khẩu có độ dài tối thiểu 8 kí tự",
              },
            })}
            placeholder="Mật khẩu"
            type="password"
            prefix={<LockOutlined />}
          />
        </Box>
        <Box mt={2}>
          <Button htmlType="submit" color="success" fullWidth>
            Đăng nhập
          </Button>
        </Box>
      </form>
    </Box>
  )
}
