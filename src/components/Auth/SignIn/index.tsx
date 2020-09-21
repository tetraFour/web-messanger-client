import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Input } from 'antd';

import { userStore } from 'Store/User';
import { useNotification } from 'hooks';
import { FormControl } from 'types';

import './style.scss';

const SignIn = observer(() => {
  const makeNotification = useNotification();
  const history = useHistory();

  const { loadUser } = userStore;

  const [form, setForm] = useState<FormControl>({
    login: '',
    password: '',
  });

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signInHandler = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    try {
      await loadUser(form);
      makeNotification('Ура!', 'вы успешно вошли!', 'success');
      history.push('/home');
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
          <Button type="primary" block htmlType="submit">
            Войти в аккаунт
          </Button>
        </form>
        <Link to="/sign-up">Зарегистриваться</Link>
      </div>
    </div>
  );
});

export default SignIn;
