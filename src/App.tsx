import { Link } from 'react-router-dom'
import { deleteTenant } from './api'

const menus = [
  { to: '/import/gallery', title: 'インポート（ギャラリー）', description: 'ギャラリーからレイアウトを選択してデータをインポートします' },
  { to: '/import/select', title: 'インポート（Select）', description: 'セレクトボックスでレイアウトを選択してデータをインポートします' },
  { to: '/designer/gallery', title: 'レイアウト設定', description: '帳票レイアウトの作成・編集・削除を行います' },
  { to: '/organizer', title: 'PDF分割', description: 'PDFの分割設定を行います' },
  { to: '/dictionary', title: 'ユーザー辞書', description: 'ユーザー辞書を管理します' },
  { to: '/logo', title: 'ロゴ・社印', description: 'ロゴ・社印の画像を設定します' },
]

function App() {
  return (
    <main className="home">
      <h1>RaaS Frontend Sample</h1>
      <ul className="home-menu">
        {menus.map((menu) => (
          <li key={menu.to}>
            <Link to={menu.to} className="home-card">
              <span className="home-card-title">{menu.title}</span>
              <span className="home-card-description">{menu.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className="button-danger" onClick={deleteTenant}>
        テナント削除
      </button>
    </main>
  )
}

export default App
