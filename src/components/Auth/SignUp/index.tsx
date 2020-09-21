import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Input } from 'antd';

import { FormControl } from 'types';
import { userStore } from 'Store/User';
import { useNotification } from 'hooks';

import './style.scss';

const SignUp = observer(() => {
  const makeNotification = useNotification();

  const history = useHistory();

  const { createUser } = userStore;

  const [form, setForm] = useState<FormControl>({
    login: '',
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    try {
      const data = await createUser(form);
      makeNotification('Ура!', data.data.message, 'success');
      history.push('/confirmation');
    } catch (error) {
      makeNotification('Упс!', error.response.data.message, 'error');
    }
  };

  return (
    <div className="auth">
      <h1 className="auth__title">Регистрация</h1>
      <p className="auth__sub-title">
        Для входа в чат, вам нужно зарегистрироваться
      </p>
      <div className="form-wrapper">
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
          <Button type="primary" block size="large" htmlType="submit">
            Зарегистрироваться
          </Button>
        </form>
        <Link to="/sign-in">Войти в аккаунт</Link>
      </div>
    </div>
  );
});

export default SignUp;
