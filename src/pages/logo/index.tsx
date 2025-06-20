import { ReportConfig, Session } from '@sutech_jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createLogoSession } from '../../api'
import { HEIGHT_OFFSET } from '../../constants'
import { customStyles } from '../../themes/customTheme'

const Page = () => {
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createLogoSession().then(setSession)
  }, [])

  return (
    <ReportConfig
      session={session}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      hideTenantInfoConfig
      customStyles={customStyles}
    />
  )
}

export default Page
