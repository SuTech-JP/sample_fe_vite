import { Session } from '@sutech-jp/raas-react-client'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const createImportSession = async (): Promise<Session> => {
  return await createDataTravelerSession(`/import`)
}

export const createGallerySession = async (application: string, schema: string): Promise<Session> => {
  return await createReportSession(`/gallery/${application}/${schema}`)
}

export const createDesignerNewSession = async (application: string, schema: string): Promise<Session> => {
  return await createReportSession(`/designer/create/${application}/${schema}`)
}

export const createDesignerEditSession = async (layoutId: string): Promise<Session> => {
  return await createReportSession(`/designer/${layoutId}`)
}

export const createDictionarySession = async (): Promise<Session> => {
  return await createReportSession(`/tenantInfo`)
}

export const createLogoSession = async (): Promise<Session> => {
  return await createReportSession(`/config`)
}

const createDataTravelerSession = async (subUrl: string): Promise<Session> => {
  return createRaasSession('datatraveler', subUrl)
}

const createReportSession = async (subUrl: string): Promise<Session> => {
  return createRaasSession('report', subUrl)
}

const createRaasSession = async (msa: 'datatraveler' | 'report', subUrl: string): Promise<Session> => {
  return await fetch(BACKEND_URL + `/raas/${msa}/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subUrl,
      backUrl: window.location.href,
    }),
  }).then((res) => res.json())
}

export const getResult = async (dataImportId: string): Promise<Result> => {
  return await fetch(BACKEND_URL + `/raas/report/result/${dataImportId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export type RptLayout = { id: number; name: string }

export const getRaasLayouts = async (application: string, schema: string): Promise<RptLayout[]> => {
  return await fetch(BACKEND_URL + `/raas/report/layout/${application}/${schema}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export type Result = {
  id: string
  status: string

  details: { dataId: string; pdfUrl: string }[]
}

export type MockPartner = {
  code: string
  name: string
  zipcode: string
  address1: string
  address2: string
  address3: string
}

export const loadMockPartners = async (): Promise<MockPartner[]> => {
  // 本来はバックエンドから取得する
  return [
    {
      code: 'sample_code',
      name: 'sample_name',
      zipcode: 'sample_zipcode',
      address1: 'sample_address1',
      address2: 'sample_address2',
      address3: 'sample_address3',
    },
  ]
}

export type MockCompany = {
  code: string
  name: string
  zipcode: string
  address1: string
  address2: string
  address3: string
}

export const loadMockCompany = async (): Promise<MockCompany> => {
  // 本来はバックエンドから取得する
  return {
    code: 'sample_code',
    name: 'sample_name',
    zipcode: 'sample_zipcode',
    address1: 'sample_address1',
    address2: 'sample_address2',
    address3: 'sample_address3',
  }
}
