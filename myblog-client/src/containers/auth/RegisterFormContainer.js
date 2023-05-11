import { fieldChange, formInitialize, register } from "../../modules/auth";
import { check } from "../../modules/user";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    }
    dispatch(register({ username, password }));
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      fieldChange({
        form: "register",
        key: name,
        value,
      })
    );
  };
  useEffect(() => {
    dispatch(formInitialize("register"));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      console.log("auth");
      dispatch(check());
    }
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정입니다");
      }
      return;
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log(e);
      }
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <AuthForm
      type="register"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
    />
  );
};

export default RegisterFormContainer;
