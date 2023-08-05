// import loginImg from "../assets/Images/login.webp"
import Template from "../components/Auth/Template"
import  images9 from "../assets/images10.png"
function Login() {
  return (
    <Template
      title="Welcome Back"

      formType="login"
      image={images9}
    />
  )
}

export default Login