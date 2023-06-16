import { fieldChange, formInitialize, login } from "../../modules/auth";
import { check } from "../../modules/user";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      fieldChange({
        form: "login",
        key: name,
        value,
      })
    );
  };

  useEffect(() => {
    dispatch(formInitialize("login"));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      console.log(auth);
      dispatch(check());
    }
    if (authError) {
      setError("로그인 실패");
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
      navigate(`/`);
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
    />
  );
};

export default LoginFormContainer;
