import { useSelector } from 'react-redux';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);

  return (
    <div className="flex">
      <div className="profile">
        <div className="my-profile">
          <div className="my-missions">
            <h1 className="heading">My Rockets</h1>
            <ul>
              {rockets.filter((rocket) => rocket.reserved)
                .map((rocket) => (
                  <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="my-profile">
          <div className="my-missions">
            <h1 className="heading">My Missions</h1>
            <ul>
              {missions.filter((mission) => mission.reserved)
                .map((mission) => (
                  <li key={mission.mission_id}>{mission.mission_name}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
