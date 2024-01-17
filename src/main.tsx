import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import ImportGalleryPage from './pages/import/gallery.tsx'
import ImportSelectLayoutsPage from './pages/import/select.tsx'
import ImportPage from './pages/import/[layoutId].tsx'
import DesignerGalleryPage from './pages/designer/gallery.tsx'
import DesignerNewPage from './pages/designer/new.tsx'
import DesignerEditPage from './pages/designer/edit/[layoutId].tsx'
import DictionaryPage from './pages/dictionary/index.tsx'
import LogoPage from './pages/logo/index.tsx'
import ResultPage from './pages/result/[id].tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="designer">
          <Route path="gallery" element={<DesignerGalleryPage />} />
          <Route path="new" element={<DesignerNewPage />} />
          <Route path="edit">
            <Route path=":layoutId" element={<DesignerEditPage />} />
          </Route>
        </Route>
        <Route path="import">
          <Route path="gallery" element={<ImportGalleryPage />} />
          <Route path="select" element={<ImportSelectLayoutsPage />} />
          <Route path=":layoutId" element={<ImportPage />} />
        </Route>
        <Route path="result">
          <Route path=":id" element={<ResultPage />} />
        </Route>
        <Route path="dictionary" element={<DictionaryPage />} />
        <Route path="logo" element={<LogoPage />} />
        <Route path="" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
