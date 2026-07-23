import { Link, Outlet } from 'react-router-dom'
import { HEIGHT_OFFSET } from '../constants'

// ヘッダーの高さは HEIGHT_OFFSET と一致させ、各ページの SDK コンポーネントが画面内に収まるようにする
const Layout = () => {
  return (
    <>
      <header className="app-header" style={{ height: HEIGHT_OFFSET }}>
        <Link to="/" className="app-header-brand">
          Vite + React + TS RaaS Sample
        </Link>
      </header>
      <Outlet />
    </>
  )
}

export default Layout
