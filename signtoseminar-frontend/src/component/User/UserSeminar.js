import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Seminar from '../Seminar/Seminar';
import SeminarList from '../Seminar/SeminarList';

function UserSeminar() {
  const user = useSelector((state) => state.user.user);
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:44320/api/userSeminar/getuser/${user.userId}`)
      .then((response) => response.json())
      .then((json) => setSeminars(json))
      // .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    // <SeminarList
    //   title={`${user.firstName} Seminars`}
    //   url={`https://localhost:44320/api/userSeminar/getuser/${user.userId}`}
    // />
    <div className='seminarie'>
      <h1>{`${user.firstName} Seminars`}</h1>
      {seminars.length > 0 &&
        seminars.map((seminar) => (
          <Seminar
            key={seminar.userId}
            id={seminar.seminarId}
            title={seminar.title}
            date={seminar.date.substring(0, 10)}
            location={seminar.location}
          />
        ))}
    </div>
  );
}

export default UserSeminar;
