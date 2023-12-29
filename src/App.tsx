import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Vite + React + TS Raas Sample</h1>
      <ul>
        <li>
          <Link to="/import/gallery">インポート</Link>
        </li>
        <li>
          <Link to="/designer/gallery">レイアウト設定</Link>
        </li>
        <li>
          <Link to="/dictionary">ユーザー辞書</Link>
        </li>
        <li>
          <Link to="/logo">ロゴ・社印</Link>
        </li>
      </ul>
    </>
  )
}

export default App
