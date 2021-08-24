export default interface Trade {
  id: string
  customer: {
    id: string
    name: string
  }
  products: TradeProduct[]
  status: TradeStatus
  note?: string
  createdAt: Date
  updatedAt: Date
}
export interface TradeProduct {
  id: string
  name: string
  quantity: number
  sellPrice: number
}
export type TradeStatus = "PAID" | "PARTICALPAID" | "UNPAID" | "PENDING"
