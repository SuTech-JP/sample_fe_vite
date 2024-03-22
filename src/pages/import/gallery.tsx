import { ReportLayoutGallery, Session } from '@sutech-jp/raas-react-client'
import { useEffect, useState } from 'react'
import { createGallerySession } from '../../api'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { customStyles } from '../../themes/customTheme'

const Page = () => {
  const navigate = useNavigate()
  const [session, setSession] = useState<Session>()

  useEffect(() => {
    createGallerySession(APPLICATION, SCHEMA).then(setSession)
  }, [])

  const onSelectLayout = (layoutId: number | undefined) => {
    if (!layoutId) return
    navigate(`../${layoutId}`)
  }

  return (
    <ReportLayoutGallery
      session={session}
      onSelectLayout={onSelectLayout}
      height={`calc(100vh - ${HEIGHT_OFFSET}px)`}
      customStyles={customStyles}
    />
  )
}

export default Page
