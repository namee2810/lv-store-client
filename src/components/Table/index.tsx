import styled from "styled-components"

const Table = styled.table`
  width: 100%;
  th,
  td {
    padding: 12px 0;
    background-color: ${({ theme }) => theme.table + "!important"};
    border-bottom: ${({ theme }) => `1px solid ${theme.tableBorder}`};
    color: ${({ theme }) => theme.text + "!important"};
    text-align: center;

    &:last-of-type {
      text-align: right;
    }
    &:first-of-type {
      text-align: left;
    }
  }
`

export default Table
