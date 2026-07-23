import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getResult, Result } from '../../api'
import Loading from '../../components/Loading'

const POLLING_INTERVAL_MS = 3000

const Page = () => {
  const [result, setResult] = useState<Result>()
  const params = useParams()

  // ステータスが FINISH になるまで一定間隔で自動再取得する（作成中は ONGOING）
  const completed = result?.status === 'FINISH'

  useEffect(() => {
    const id = params.id
    if (!id || completed) return
    const refresh = () => getResult(id).then(setResult)
    refresh()
    const timer = setInterval(refresh, POLLING_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [params.id, completed])

  if (!result?.id) return <Loading />
  return (
    <main className="result">
      <h1>インポート結果</h1>
      <dl className="result-summary">
        <dt>ID</dt>
        <dd>{result.id}</dd>
        <dt>ステータス</dt>
        <dd>{result.status}</dd>
      </dl>
      {completed ? (
        <ul className="result-pdf-list">
          {result.details?.map((d) => (
            <li key={d.dataId}>
              <a href={d.pdfUrl} type="application/pdf">
                {d.dataId}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="result-polling">
          <span className="loading-spinner" />
          帳票を作成しています。完了すると自動で表示されます。
        </p>
      )}
    </main>
  )
}
export default Page
