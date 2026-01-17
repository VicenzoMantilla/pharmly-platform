import type { ReactNode } from 'react'
import Sidebar from '../../components/layout/Sidebar'

export default function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: 24, flex: 1 }}>{children}</main>
    </div>
  )
}
