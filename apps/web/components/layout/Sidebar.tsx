import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        height: '100vh',
        background: '#0f172a',
        color: 'white',
        padding: 20
      }}
    >
      <h2 style={{ marginBottom: 24 }}>Pharmly 💊</h2>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/stock">Stock</Link>
        <Link href="/dashboard/recetas">Recetas</Link>
        <Link href="/dashboard/usuarios">Usuarios</Link>
      </nav>
    </aside>
  )
}
