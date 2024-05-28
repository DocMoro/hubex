import { networkData, personData } from '../../constants/api'
import Footer from './components/Footer/Footer'
import PersonDescription from './components/PersonDescription/PersonDescription'
import s from './ProfileCard.module.less'

const ProfileCard = () => {
  return (
    <section className={s.section}>
      <PersonDescription personData={personData} />
      <Footer networkData={networkData} />
    </section>
  )
}

export default ProfileCard
