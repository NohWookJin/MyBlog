import RegisterFormContainer from "../containers/auth/RegisterFormContainer";
import AuthTemplate from "../components/auth/AuthTemplate";

const Register = () => {
  return (
    <AuthTemplate>
      <RegisterFormContainer />
    </AuthTemplate>
  );
};

export default Register;
