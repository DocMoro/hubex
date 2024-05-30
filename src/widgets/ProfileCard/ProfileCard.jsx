import clsx from 'clsx'
import { useCallback, useState } from 'react'

import { companyData, networkData, personData } from '../../constants/api'
import ButtonGroup from './components/ButtonGroup/ButtonGroup'
import DesktopImageContainer from './components/DesktopImageContainer/DesktopImageContainer'
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo'
import PersonDescription from './components/PersonDescription/PersonDescription'
import СompanyDescription from './components/СompanyDescription/СompanyDescription'
import s from './ProfileCard.module.less'

const ProfileCard = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <section className={s.section}>
      <ButtonGroup visible={visible} handleClick={handleClick} />
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
