import Box from "components/Box"
import Logo from "components/Logo"
import Background from "./components/Background"
import SignInForm from "./components/SignInForm"

export default function SignIn() {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#eaf8ff"
    >
      <Logo />
      <SignInForm />
      <Background />
    </Box>
  )
}
