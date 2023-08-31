import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  background-color: #ec93bf;
`;

const TableHead = styled.thead`
  background-color: #a949ee;
`;

const TableHeadRow = styled.tr`
  th {
    padding: 10px;
    font-weight: bold;
    text-align: left;
    color: #362145;
  }
`;

const TableRow = styled.tr`
  background-color: #eddee5;

  td {
    padding: 10px;
  }
`;

const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <TableHead>
        <TableHeadRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHeadRow>
      </TableHead>
      <tbody>
        {items.map(transaction => (
          <TableRow key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
