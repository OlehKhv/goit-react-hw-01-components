import PropTypes from 'prop-types';
import {
    TableBody,
    TableRow,
    TableTransactionHistory,
} from './Transactionhistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TableTransactionHistory>
            <thead>
                <TableRow>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </TableRow>
            </thead>

            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableRow key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TableRow>
                ))}
            </TableBody>
        </TableTransactionHistory>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
