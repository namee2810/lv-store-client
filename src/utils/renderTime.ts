import moment from "moment"

export default function renderTime(value: Date): string {
  return moment(value).format("HH:mm DD/MM/YY ")
}
