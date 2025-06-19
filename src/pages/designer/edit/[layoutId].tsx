import { ReportDesigner, Session } from '@sutech_jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createDesignerEditSession } from '../../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { HEIGHT_OFFSET } from '../../../constants'
import { customStyles } from '../../../themes/customTheme'

const Page = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    if (!params.layoutId) return
    createDesignerEditSession(params.layoutId).then(setSession)
  }, [params.layoutId])

  const onBack = () => navigate('../../gallery')
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
