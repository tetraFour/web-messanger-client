import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { useHttp } from "../../../hooks/http.hooks";
import { useNotification } from "../../../hooks/notification.hooks";

import { SignProps, FormControl } from "../../../types";

import "./style.sass";

const SignUp = ({ setAuthState }: SignProps) => {
  const changeStateHandler = () => {
    setAuthState("sign-in");
  };

  const [isSignUp, setIsSignUp] = useState(true);

  const makeNotification = useNotification();

  const { loading, error, request } = useHttp();

  const [form, setForm] = useState<FormControl>({
    login: "",
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    try {
      const data: any = await request(
        "http://localhost:5000/api/auth/register",
        "POST",
        { ...form }
      );
      console.log("data:", data);
      makeNotification("Ура!", data.message, "success");
      // setAuthState("sign-in");
      setIsSignUp(false);
    } catch (error) {
      // console.log(error.response.data.message);
      makeNotification("Упс!", error.response.data.message, "error");
    }
  };

  useEffect(() => {
    console.log(form);
  });

  return (
    <div className="auth">
      <h1 className="auth__title">Регистрация</h1>
      <p className="auth__sub-title">
        Для входа в чат, вам нужно зарегистрироваться
      </p>
      <div className="form-wrapper">
        {isSignUp ? (
          <>
            <form className="form" onSubmit={submitHandler}>
              <div className="form__input">
                <Input
                  className="form__input"
                  size="large"
                  type="text"
                  placeholder="Логин"
                  name="login"
                  onChange={changeInputHandler}
                />
              </div>
              <div className="form__input">
                <Input
                  className="form__input"
                  size="large"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={changeInputHandler}
                />
              </div>
              <div className="form__input">
                <Input
                  className="form__input"
                  size="large"
                  type="name"
                  placeholder="Ваше имя"
                  name="name"
                  onChange={changeInputHandler}
                />
              </div>
              <div className="form__input">
                <Input
                  className="form__input"
                  size="large"
                  type="password"
                  placeholder="Пароль"
                  name="password"
                  onChange={changeInputHandler}
                />
              </div>
              <div className="form__input">
                <Input
                  className="form__input"
                  size="large"
                  type="password"
                  placeholder="Повторить пароль"
                  name="repeatPassword"
                  onChange={changeInputHandler}
                />
              </div>
              <Button
                type="primary"
                block
                size="large"
                htmlType="submit"
                loading={loading}
              >
                Зарегистрироваться
              </Button>
            </form>
            <Button type="link" onClick={changeStateHandler}>
              Войти в аккаунт
            </Button>
          </>
        ) : (
          <>
            <InfoCircleTwoTone className="confirm-icon" />
            <h3 className="confirm-title">Подтвердите свой аккаунт</h3>
            <p className="confirm-sub-title">
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
