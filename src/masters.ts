import { MapperDef } from '@sutech_jp/datatraveler-react-client'

// 取込（DataTravelerImport）とマッピング定義（DataTravelerMapping）で共通のマスタの項目定義

export const sampleCompanyMapperDef: MapperDef = {
  name: 'sample_company',
  caption: '会社情報',
  values: [
    { path: 'code', caption: '会社コード' },
    { path: 'name', caption: '会社名' },
    { path: 'zipcode', caption: '郵便番号' },
    { path: 'address1', caption: '住所１' },
    { path: 'address2', caption: '住所２' },
    { path: 'address3', caption: '住所３' },
  ],
}

export const samplePartnersMapperDef: MapperDef = {
  name: 'sample_partners',
  caption: '取引先情報',
  values: [
    { path: 'code', caption: '取引先コード' },
    { path: 'name', caption: '取引先名' },
    { path: 'zipcode', caption: '郵便番号' },
    { path: 'address1', caption: '住所１' },
    { path: 'address2', caption: '住所２' },
    { path: 'address3', caption: '住所３' },
  ],
}
