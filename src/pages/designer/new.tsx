import { ReportDesigner, Session } from '@sutech_jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createDesignerNewSession } from '../../api'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { customStyles } from '../../themes/customTheme'

const Page = () => {
  const navigate = useNavigate()
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createDesignerNewSession(APPLICATION, SCHEMA).then(setSession)
  }, [])

  const onBack = () => navigate('../gallery')
  return (
    <ReportDesigner
      session={session}
      onBack={onBack}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      customStyles={customStyles}
    />
  )
}

export default Page
