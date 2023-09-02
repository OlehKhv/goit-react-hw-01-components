import styled from 'styled-components';

export const TableTransactionHistory = styled.table`
    width: 600px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
`;

export const TableBody = styled.tbody`
    & tr {
        background-color: #3498db;
    }
    & tr:nth-child(2n) {
        background-color: #f7dc6f;
    }
`;

export const TableRow = styled.tr`
    height: 60px;
    font-size: 16px;
    & th {
        background-color: #5499c7;
        color: #fbfcfc;
        font-weight: 600;
        text-transform: uppercase;
        border: 1px solid #aeb6bf;
    }
    & td {
        color: #1c2833;
        text-align: center;
        border: 1px solid #aeb6bf;
        text-transform: capitalize;
    }
`;
