import CustomTag from "components/CustomTag"
import { useMemo } from "react"
import { useTable } from "react-table"
import ActionType from "types/IAction"
import ActivityType from "types/IActivity"
import renderTime from "utils/renderTime"

interface Activity {
  id: string
  user: string
  type: ActivityType
  action: ActionType
  updatedAt: Date
}

export default function useRecentlyActivity() {
  const data = useMemo(
    (): Activity[] => [
      {
        id: "1",
        user: "Dao Nam",
        type: "ORDER",
        action: "CREATE",
        updatedAt: new Date(),
      },
      {
        id: "1",
        user: "Dao Nam",
        type: "TRADE",
        action: "CREATE",
        updatedAt: new Date(),
      },
      {
        id: "1",
        user: "Dao Nam",
        type: "TRADE",
        action: "UPDATE",
        updatedAt: new Date(),
      },
      {
        id: "1",
        user: "Dao Nam",
        type: "PRODUCT",
        action: "DELETE",
        updatedAt: new Date(),
      },
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: "User",
        accessor: "user",
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ value }: any) => <CustomTag type="feature" value={value} />,
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ value }: any) => <CustomTag type="action" value={value} />,
      },
      {
        Header: "Update at",
        accessor: "updatedAt",
        Cell: ({ value }: any) => renderTime(value),
      },
    ],
    []
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      //@ts-ignore
      { columns, data }
    )

  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }
}
