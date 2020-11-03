import React from 'react';

interface Props {
  handleLogin(): void;
}

export const Login = (props: Props) => {
  return <button onClick={props.handleLogin}>ログイン</button>;
};
