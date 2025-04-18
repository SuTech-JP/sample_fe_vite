import { Link } from 'react-router-dom'
import { deleteTenant } from './api'

function App() {
  return (
    <>
      <h1>Vite + React + TS Raas Sample</h1>
      <ul>
        <li>
          <Link to="/import/gallery">インポート(ギャラリー)</Link>
        </li>
        <li>
          <Link to="/import/select">インポート(Select)</Link>
        </li>
        <li>
          <Link to="/designer/gallery">レイアウト設定</Link>
        </li>
        <li>
          <Link to="/organizer">PDF分割</Link>
        </li>
        <li>
          <Link to="/dictionary">ユーザー辞書</Link>
        </li>
        <li>
          <Link to="/logo">ロゴ・社印</Link>
        </li>
        <li>
          <button onClick={deleteTenant}>テナント削除</button>
        </li>
      </ul>
    </>
  )
}

export default App
