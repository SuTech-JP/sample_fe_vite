import { DataTravelerImport, DataTravelerResult, Session } from '@sutech_jp/datatraveler-react-client'
import { useEffect, useState } from 'react'
import { MockCompany, MockPartner, createImportSession, loadMockCompany, loadMockPartners } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../constants'
import { useWindowSize } from '../../hooks/useWindowSize'
import { sampleCompanyMapperDef, samplePartnersMapperDef } from '../../masters'
import { customStyles } from '../../themes/customTheme'
import Loading from '../../components/Loading'

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
  if (!session || !partners || !company) return <Loading />
  return (
    <DataTravelerImport
      session={session}
      report={{ layoutId: Number(params.layoutId), application: APPLICATION, schema: SCHEMA, reportStep: 'preview' }}
      application={APPLICATION}
      schema={SCHEMA}
      mapper={{ sample_partners: partners }}
      binder={{ sample_company: company }}
      mapperDefs={[samplePartnersMapperDef]}
      binderDefs={[sampleCompanyMapperDef]}
      onImport={onImport}
      onCancel={onCancel}
      height={height - HEIGHT_OFFSET}
      customStyles={customStyles}
    />
  )
}

export default Page
