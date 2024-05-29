import { networkData, personData } from '../../constants/api'
import DesktopImageContainer from './components/DesktopImageContainer/DesktopImageContainer'
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo'
import PersonDescription from './components/PersonDescription/PersonDescription'
import s from './ProfileCard.module.less'

const ProfileCard = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <DesktopImageContainer imageLink={personData.imageLink} />
        <div className={s.rightBlock}>
          <Logo className={s.logoPosition} />
          <PersonDescription personData={personData} />
        </div>
      </div>
      <Footer networkData={networkData} />
    </section>
  )
}

export default ProfileCard
