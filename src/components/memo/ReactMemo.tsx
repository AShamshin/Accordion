import React from 'react';
import { useState } from 'react';

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('hi');

  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      {counter}
      <Users users={users} />
    </>
  );
};
