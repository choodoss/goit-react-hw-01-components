import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics'
import userData from 'data/user.json'
import statisticData from 'data/data.json'
// import friends from 'data/friends.json'
// import transactions from 'data/transactions.json'

const nameStatisticsProfile = 'upload stats';

function App() {
  return (
    <div>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title={nameStatisticsProfile} stats={statisticData} />
    </div>
  );
}

export default App;
