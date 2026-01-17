import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow">
      <div className="p-4 font-bold text-lg">Pharmly</div>

      <nav className="flex flex-col gap-2 p-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/stock">Stock</Link>
        <Link href="/dashboard/recetas">Recetas</Link>
        <Link href="/dashboard/usuarios">Usuarios</Link>
      </nav>
    </aside>
  )
}
