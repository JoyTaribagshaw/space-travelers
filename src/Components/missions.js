/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, joiningMission, leavingMission } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();
  const { missions, status, error } = useSelector((state) => state.missions);

  useEffect(() => {
    if (status === 'Data not loaded') {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  if (error) {
    return (
      <div className="error">Error loading rocket list, please try again!</div>
    );
  }

  return (
    <table className="w-11/12 my-5 mx-auto border-collapse p-2 ">
      <thead className="border border-gray-300">
        <tr className="p-2">
          <th className="p-2 text-left border border-gray-300 ">Mission</th>
          <th className="p-2 text-left border border-gray-300">Description</th>
          <th className="p-2 text-left border border-gray-300">Status</th>
        </tr>
      </thead>
      <tbody className="border border-gray-300">
        {missions.map((mission, index) => (
          <tr
            key={mission.mission_id}
            className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
          >
            <td className="font-bold px-1 border border-gray-300">{mission.mission_name}</td>
            <td className="pb-4 pt-1 px-2 border border-gray-300">{mission.description}</td>
            <td className="px-2 border border-gray-300"><p style={{ backgroundColor: mission.reserved ? '#419bf9' : '#6d757d' }} className="p-2 rounded-md w-max text-white cursor-pointer">{mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</p></td>
            <td className="px-4">
              {mission.reserved && (
              <button
                type="button"
                className="w-max px-4 py-2 border border-gray-400 rounded"
                style={{ color: mission.reserved ? 'red' : '', border: mission.reserved ? '1px solid red' : '' }}
                onClick={() => dispatch(leavingMission(mission.mission_id))}
              >
                Leave Mission
              </button>
              )}
              {!mission.reserved && (
              <button
                type="button"
                className="w-max px-4 py-2 border border-gray-400 rounded"
                style={{ color: mission.reserved ? 'red' : '', border: mission.reserved ? '1px solid red' : '' }}
                onClick={() => dispatch(joiningMission(mission.mission_id))}
              >
                Join Mission
              </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Missions;
