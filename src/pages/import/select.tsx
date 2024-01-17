import { useEffect, useState } from 'react'
import { RptLayout, getRaasLayouts } from '../../api'
import { APPLICATION, SCHEMA } from '../../constants'
import { useNavigate } from 'react-router-dom'

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

  if (!layouts) return <></>

  return (
    <>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelectLayout(Number(e.target.value))}
        style={{ width: '300px', margin: '8px' }}
      >
        <option></option>
        {layouts.map((layout) => (
          <option key={layout.id} value={layout.id}>
            {layout.name}
          </option>
        ))}
      </select>
    </>
  )
}

export default Page
