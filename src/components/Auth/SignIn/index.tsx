import React, { useState, useContext } from 'react';
import { Button, Input } from 'antd';

import { AuthContext } from 'context/AuthContext';

import { useHttp, useNotification } from 'hooks';

import { FormControl } from 'types';

import './style.scss';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const auth = useContext(AuthContext);

  const makeNotification = useNotification();

  const { loading, request } = useHttp();

  const [form, setForm] = useState<FormControl>({
    login: '',
    password: '',
  });

  const changeInputHandler =
    // useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
  // },
  //   [form]
  // );
  const signInHandler = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    try {
      const result = await request(
        `${process.env.REACT_APP_BASE_URL}/api/auth/signin`,
        'POST',
        { ...form },
      );
      auth.login(result.token, result.userId);

      makeNotification('Ура!', 'вы успешно вошли!', 'success');
    } catch (error) {
      makeNotification('Упс!', error.response.data.message, 'error');
    }
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
        <Link to="/sign-up">Зарегистриваться</Link>
      </div>
    </div>
  );
};

export default SignIn;
