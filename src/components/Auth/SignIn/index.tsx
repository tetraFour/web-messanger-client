import React, { useState, useCallback, useContext } from "react";
import { Button } from "antd";
import { Input } from "antd";

import { AuthContext } from "../../../context/AuthContext";

import { useHttp } from "../../../hooks/http.hooks";
import { useNotification } from "../../../hooks/notification.hooks";

import { SignProps, FormControl } from "../../../types";

import "./style.sass";

const SignIn = ({ setAuthState }: SignProps) => {
  const changeStateHandler = () => {
    setAuthState("sign-up");
  };

  const auth = useContext(AuthContext);

  const makeNotification = useNotification();

  const { loading, error, request } = useHttp();

  const [form, setForm] = useState<FormControl>({
    login: "",
    password: "",
  });

  const changeInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    },
    [form]
  );
  const signInHandler = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    try {
      const result: any = await request(
        "http://localhost:5000/api/auth/login",
        "POST",
        { ...form }
      );
      auth.login(result.token, result.userId);

      console.log("result:", result);

      makeNotification("Ура!", "вы успешно вошли!", "success");
    } catch (error) {}
  };

  return (
    <div className="auth">
      <h1 className="auth__title">Войти в аккаунт</h1>
      <p className="auth__sub-title">Пожалуйста, войдите в свой аккаунт</p>
      <div className="form-wrapper">
        <form className="form" onSubmit={signInHandler}>
          <div className="form__input">
            <Input
              size="large"
              type="text"
              placeholder="Логин"
              name="login"
              onChange={changeInputHandler}
            />
          </div>

          <div className="form__input">
            <Input
              size="large"
              type="password"
              placeholder="Пароль"
              name="password"
              onChange={changeInputHandler}
            />
          </div>
          <Button type="primary" block htmlType="submit" loading={loading}>
            Войти в аккаунт
          </Button>
        </form>
        <Button type="link" onClick={changeStateHandler}>
          зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
