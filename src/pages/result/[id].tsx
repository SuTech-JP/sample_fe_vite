import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { getResult, Result } from '../../api'

const Page = () => {
  const [result, setResult] = useState<Result>()
  const [counter, setCounter] = useState<number>(0)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      getResult(params.id).then((r) => {
        setResult(r)
      })
    }
  }, [params.id, counter])

  if (!result?.id) return <></>
  return (
    <>
      <>id:</>
      <>{result.id}</>
      <br />
      <>status:</>
      <>{result.status}</>
      <br />
      {result.details?.map((d) => (
        <Fragment key={d.dataId}>
          <a href={d.pdfUrl} type="application/pdf">
            {d.dataId}
          </a>
          <br />
        </Fragment>
      ))}
      <input
        type={'button'}
        onClick={() => {
          setResult(undefined)
          setCounter(counter + 1)
        }}
        value={'更新'}
      />
    </>
  )
}
export default Page
