import { DataTravelerImport, DataTravelerResult, Session } from '@sutech-jp/datatraveler-react-client'
import { useEffect, useState } from 'react'
import { createImportSession } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../constants'
import { useWindowSize } from '../../hooks/useWindowSize'

const Page = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [, height] = useWindowSize()
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createImportSession().then(setSession)
  }, [])

  const onImport = (result: DataTravelerResult) => {
    // TODO result.dataImportLogIdを保存し、任意の画面に遷移する
    console.log(result)
    navigate(`../result/${result.dataImportLogId}`)
  }

  const onCancel = () => navigate('../gallery')

  if (!params.layoutId) return <></>
  return (
    <DataTravelerImport
      session={session}
      report={{ layoutId: Number(params.layoutId), application: APPLICATION, schema: SCHEMA, reportStep: 'preview' }}
      application={APPLICATION}
      schema={SCHEMA}
      onImport={onImport}
      onCancel={onCancel}
      height={height - HEIGHT_OFFSET}
    />
  )
}

export default Page
