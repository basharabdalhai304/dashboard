import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Dashboard } from './Components/Pages/Dashboard/Dashboard'
import { Manage } from './Components/Pages/Manage/Manage'
import { Contacts } from './Components/Pages/Contacts/Contacts'
import { Invoices } from './Components/Pages/Invoices/Invoices'
import { ProfileForm } from './Components/Pages/ProfileForm/ProfileForm'
import { Calendar } from './Components/Pages/Calendar/Calendar'
import { FAQPage } from './Components/Pages/FAQPage/FAQPage'
import { BarChart } from './Components/Pages/BarChart/BarChart'
import { PieChart } from './Components/Pages/PieChart/PieChart'
import { LineChart } from './Components/Pages/LineChart/LineChart'
import { Geography } from './Components/Pages/Geography/Geography'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="manage" element={<Manage/>}/>
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="invoices" element={<Invoices/>}/>
      <Route path="profile-form" element={<ProfileForm/>}/>
      <Route path="calendar" element={<Calendar/>}/>
      <Route path="faqpage" element={<FAQPage/>}/>
      <Route path="barchart" element={<BarChart/>}/>
      <Route path="piechart" element={<PieChart/>}/>
      <Route path="linechart" element={<LineChart/>}/>
      <Route path="geography" element={<Geography/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
