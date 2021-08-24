import Box from "components/Box"
import Table from "components/Table"
import Text from "components/Text"
import useRecentlyActivity from "features/home/hooks/useRecentlyActivity"
import React from "react"
import { useTranslation } from "react-i18next"

export default function RecentlyActivity() {
  const { t } = useTranslation()
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useRecentlyActivity()

  return (
    <Box p={2} backgroundColor="box">
      <Text size="16" weight="600">
        {t("home.recentlyActivity")}
      </Text>
      <Box mt={2}>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Box>
    </Box>
  )
}
