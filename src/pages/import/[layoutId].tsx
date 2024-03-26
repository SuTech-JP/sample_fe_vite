import { DataTravelerImport, DataTravelerResult, Session } from '@sutech-jp/datatraveler-react-client'
import { useEffect, useState } from 'react'
import { MockCompany, MockPartner, createImportSession, loadMockCompany, loadMockPartners } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../constants'
import { useWindowSize } from '../../hooks/useWindowSize'
import { customStyles } from '../../themes/customTheme'

const Page = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [, height] = useWindowSize()
  const [session, setSession] = useState<Session>()

  const [partners, setPartners] = useState<MockPartner[]>()
  const [company, setCompany] = useState<MockCompany>()

  useEffect(() => {
    createImportSession().then(setSession)
    loadMockPartners().then(setPartners)
    loadMockCompany().then(setCompany)
  }, [])

  const onImport = (result: DataTravelerResult) => {
    // TODO result.dataImportLogIdを保存し、任意の画面に遷移する
    console.log(result)
    navigate(`../../result/${result.dataImportLogId}`)
  }

  const onCancel = () => navigate('../gallery')

  if (!params.layoutId) return <></>
  if (!partners) return <></>
  if (!company) return <></>
  return (
    <DataTravelerImport
      session={session}
      report={{ layoutId: Number(params.layoutId), application: APPLICATION, schema: SCHEMA, reportStep: 'preview' }}
      application={APPLICATION}
      schema={SCHEMA}
      mapper={{ sample_partners: partners }}
      binder={{ sample_company: company }}
      extensionSchemaDef={{
        container: { property: 'exntesionFields', caption: '請求書拡張項目' },
        properties: [
          { type: 'text', property: 'extText01', caption: '拡張文字01' },
          { type: 'number', property: 'extNumber01', caption: '拡張数値01' },
          { type: 'date', property: 'extDate01', caption: '拡張日付01' },
        ],
      }}
      onImport={onImport}
      onCancel={onCancel}
      height={height - HEIGHT_OFFSET}
      customStyles={customStyles}
    />
  )
}

export default Page
