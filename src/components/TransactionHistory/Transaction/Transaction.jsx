import PropTypes from 'prop-types';

import { Line, Cell } from './Transaction.styled'
export default function Transaction({ transaction: { amount, currency, type }, index }) {
    const transaction =
        <Line index={index}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
        </Line>;
    return transaction;
}

Transaction.propTypes = {
    transaction: PropTypes.shape(
        {
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        }.isRequired
    ),
    index: PropTypes.number.isRequired,
}


