import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friendlist/Friendlist';
import { TransactionHistory } from './Transactionhistory/Transactionhistory';

export const App = () => {
    return (
        <>
            <Profile user={user} />
            <Statistics data={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
};
