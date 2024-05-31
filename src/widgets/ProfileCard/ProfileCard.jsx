import clsx from 'clsx'
import { useCallback, useState } from 'react'

import ButtonGroup from './components/ButtonGroup/ButtonGroup'
import DesktopImageContainer from './components/DesktopImageContainer/DesktopImageContainer'
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo'
import MobileImageContainer from './components/MobileImageContainer/MobileImageContainer'
import PersonDescription from './components/PersonDescription/PersonDescription'
import СompanyDescription from './components/СompanyDescription/СompanyDescription'
import s from './ProfileCard.module.less'

const ProfileCard = ({ personData, networkData, companyData }) => {
  const [visible, setVisible] = useState(false)

  const handleClick = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <section className={s.section}>
      <ButtonGroup visible={visible} handleClick={handleClick} />
      <MobileImageContainer imageLink={personData.imageLink} className={s.mbImgPosition} />
      <div className={clsx(s.frame, !visible && s.frameVisible)}>
        <div className={s.container}>
          <DesktopImageContainer imageLink={personData.imageLink} />
          <div className={s.rightBlock}>
            <Logo className={s.logoPosition} />
            <PersonDescription personData={personData} />
          </div>
        </div>
        <Footer networkData={networkData} className={s.footerPosition} />
      </div>
      <div className={clsx(s.frame, visible && s.frameVisible)}>
        <СompanyDescription companyData={companyData} />
        <Footer networkData={networkData} />
      </div>
    </section>
  )
}

export default ProfileCard
