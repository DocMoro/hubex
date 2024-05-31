import './App.css'

import { companyData, networkData, personData } from './constants/api'
import ProfileCard from './widgets/ProfileCard/ProfileCard'

function App() {
  return (
    <>
      <ProfileCard companyData={companyData} networkData={networkData} personData={personData} />
    </>
  )
}

export default App
