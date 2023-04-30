import PropTypes from 'prop-types';
import Transaction from './Transaction/Transaction'
import { Table, Thead, Line, Cell, Tbody } from './TransactionHistory.styled'
export default function TransactionHistory({ transactions }) {
    const transactionHistory =
        <Table>
            <Thead>
                <Line>
                    <Cell>Type</Cell>
                    <Cell>Amount</Cell>
                    <Cell>Currency</Cell>
                </Line>
            </Thead>
            <Tbody>
                {transactions.map((transaction, index) => {
                    return <Transaction key={transaction.id} transaction={transaction} index={index} />
                })}
            </Tbody>
        </Table>;
    return transactionHistory;
}
TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired
}