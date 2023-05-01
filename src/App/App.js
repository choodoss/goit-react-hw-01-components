import { Container } from './Comtainer.styled'
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics'
import userData from 'data/user.json'
import statisticData from 'data/data.json'
import friends from 'data/friends.json'
import FriendList from 'components/FriendList/FriendList'
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'
import transactions from 'data/transactions.json'


const nameStatisticsProfile = 'upload stts'; // ця змінна для імітації, що з бекенду може не прийти значення + для тестування, чи буде рендеритись розмітка.

function App() {
  return (
    <Container>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title={nameStatisticsProfile} stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
}

export default App;
