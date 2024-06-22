// src/components/DataTable.js
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;
const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const DataTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <Th>Date</Th>
        <Th>Open</Th>
        <Th>High</Th>
        <Th>Low</Th>
        <Th>Close</Th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <Td>{item.date}</Td>
          <Td>{item.open}</Td>
          <Td>{item.high}</Td>
          <Td>{item.low}</Td>
          <Td>{item.close}</Td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default DataTable;
