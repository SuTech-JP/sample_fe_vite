import {
  DataTravelerMapping,
  MappingSampleData,
  MapperMatchingSettingDef,
  SavedMappingDefinition,
  Session,
} from '@sutech_jp/datatraveler-react-client'
import { useEffect, useState } from 'react'
import { MockCompany, MockPartner, createMappingSession, loadMockCompany, loadMockPartners } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { APPLICATION, HEIGHT_OFFSET, SCHEMA } from '../../constants'
import { useWindowSize } from '../../hooks/useWindowSize'
import { sampleCompanyMapperDef, samplePartnersMapperDef } from '../../masters'
import { customStyles } from '../../themes/customTheme'
import Loading from '../../components/Loading'

// マッピング元の列と、画面に表示する値の例。
// 取込 API（POST /datatraveler/import/api）に JSON（fileType: 'json'）で渡す業務データと同じ形にする。
// 列は 1 行目のキーで決まるので、すべての行に全列のキーを入れる（値が無い列は空文字）
const sampleData: MappingSampleData = [
  {
    請求番号: 'INV-0001',
    取引先コード: 'sample_code',
    取引先名: 'sample_name',
    請求日: '2026/10/31',
    支払期日: '2026/11/30',
    品目名: '保守費用',
    数量: '1',
    単価: '100000',
    金額: '100000',
    備考: '10月分',
  },
  {
    請求番号: 'INV-0001',
    取引先コード: 'sample_code',
    取引先名: 'sample_name',
    請求日: '2026/10/31',
    支払期日: '2026/11/30',
    品目名: '書籍',
    数量: '2',
    単価: '2500',
    金額: '5000',
    備考: '',
  },
]

// マスタ照合の設定。取引先マスタの取引先コードを、サンプルデータの「取引先コード」列で照合する
const mapperMatchingSettingDefs: MapperMatchingSettingDef[] = [
  { name: samplePartnersMapperDef.name, path: 'code', settings: [{ column: '取引先コード' }] },
]

const Page = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [, height] = useWindowSize()
  const [session, setSession] = useState<Session>()
  // プレビューの変換に使うマスタの値（取込ページと同じ mapper / binder）
  const [partners, setPartners] = useState<MockPartner[]>()
  const [company, setCompany] = useState<MockCompany>()

  useEffect(() => {
    createMappingSession().then(setSession)
    loadMockPartners().then(setPartners)
    loadMockCompany().then(setCompany)
  }, [])

  const onSaved = (result: SavedMappingDefinition) => {
    // result.code が定義 ID。取込 API の code に渡す値として保存する想定（保存したことは画面がトーストで知らせる）
    console.log(result)
  }

  const onCancel = () => navigate('../gallery')

  if (!params.layoutId) return <></>
  if (!session || !partners || !company) return <Loading />
  return (
    <DataTravelerMapping
      session={session}
      application={APPLICATION}
      schema={SCHEMA}
      layoutId={Number(params.layoutId)}
      sampleData={sampleData}
      mapper={{ sample_partners: partners }}
      binder={{ sample_company: company }}
      mapperDefs={[samplePartnersMapperDef]}
      binderDefs={[sampleCompanyMapperDef]}
      mapperMatchingSettingDefs={mapperMatchingSettingDefs}
      onSaved={onSaved}
      onCancel={onCancel}
      // 保存していない変更があるときの離脱確認に使う想定（サンプルではログに出すだけ）
      onChangeOperating={(operating) => console.log('operating', operating)}
      height={height - HEIGHT_OFFSET}
      customStyles={customStyles}
    />
  )
}

export default Page
