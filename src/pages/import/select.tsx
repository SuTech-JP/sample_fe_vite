import { useEffect, useState } from 'react'
import { RptLayout, getRaasLayouts } from '../../api'
import { APPLICATION, SCHEMA } from '../../constants'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'

const Page = () => {
  const navigate = useNavigate()
  const [layouts, setLayouts] = useState<RptLayout[]>()

  useEffect(() => {
    getRaasLayouts(APPLICATION, SCHEMA).then(setLayouts)
  }, [])

  const onSelectLayout = (layoutId: number | undefined) => {
    if (!layoutId) return
    navigate(`../${layoutId}`)
  }

  if (!layouts) return <Loading />

  return (
    <main className="layout-select">
      <label htmlFor="layout-select">インポートに使用するレイアウトを選択してください</label>
      <select
        id="layout-select"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelectLayout(Number(e.target.value))}
      >
        <option value="">-- レイアウトを選択 --</option>
        {layouts.map((layout) => (
          <option key={layout.id} value={layout.id}>
            {layout.name}
          </option>
        ))}
      </select>
    </main>
  )
}

export default Page
