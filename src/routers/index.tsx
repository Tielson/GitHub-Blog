import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog } from '../pages/Blog'
import { PageInfo } from '../pages/PageInfo'

export function RouterPages() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/info/:id" element={<PageInfo />} />
      </Routes>
    </BrowserRouter>
  )
}
