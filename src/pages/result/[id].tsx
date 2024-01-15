import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getResult, Result } from '../../api'

const Page = () => {
  const [result , setResult] = useState<Result>()
  const params = useParams()

  useEffect(()=>{
    if(params.id){
      getResult(params.id).then(r =>{
        setResult(r)
      })
    }
  },[params.id])

  if (!result?.id) return <></>
  console.log(result)
  return (
    <>
      <>id:</><>{result.id}</><br/>
      <>status:</><>{result.status}</><br/>
      {result.details.map((d)=>(
          <><a key={d.dataId} href={d.pdfUrl} type="application/pdf" >{d.dataId}</a><br/></>
      ))}
    </>
  )

}
export default Page
