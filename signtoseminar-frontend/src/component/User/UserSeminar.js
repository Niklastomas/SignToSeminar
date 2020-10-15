import React from 'react';
import { useSelector } from 'react-redux';
import SeminarList from '../Seminar/SeminarList';

function UserSeminar() {
  const user = useSelector((state) => state.user.user);

  return (
    <SeminarList
      title={`${user.firstName} Seminars`}
      url={`https://localhost:44320/api/userSeminar/getuser/${user.userId}`}
    />
  );
}

export default UserSeminar;
