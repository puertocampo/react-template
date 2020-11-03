import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const TestUserComponent = (
  props: RouteComponentProps<{ userId: string }>
) => {
  return <div>userId: {props.match.params.userId}</div>;
};
