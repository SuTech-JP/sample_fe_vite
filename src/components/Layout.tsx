import { Link, Outlet } from 'react-router-dom'
import { HEADER_HEIGHT, PAGE_MARGIN } from '../constants'

// ヘッダー高さと余白は HEIGHT_OFFSET の計算（constants.ts）と連動しており、
// 各ページの SDK コンポーネントが画面内に収まるようになっている
const Layout = () => {
  return (
    <>
      <header className="app-header" style={{ height: HEADER_HEIGHT }}>
        <Link to="/" className="app-header-brand">
          RaaS Frontend Sample
        </Link>
      </header>
      <div style={{ padding: PAGE_MARGIN }}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
