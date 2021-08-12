import { Table as AntTable } from "antd"
import styled from "styled-components"

const Table = styled(AntTable)`
  th,
  td {
    background-color: ${({ theme }) => theme.table + "!important"};
    border-color: ${({ theme }) => theme.tableBorder + "!important"};
    color: ${({ theme }) => theme.text + "!important"};
  }
`

export default Table
