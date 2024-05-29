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
  const [visible, setVisible] = useState(true)

  const handleClick = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <>
      <ButtonGroup visible={visible} handleClick={handleClick} />
      <section className={s.section}>
        <div className={clsx(s.container, !visible && s.visible)}>
          <DesktopImageContainer imageLink={personData.imageLink} />
          <div className={s.rightBlock}>
            <Logo className={s.logoPosition} />
            <PersonDescription personData={personData} />
          </div>
        </div>
        <СompanyDescription companyData={companyData} className={clsx(visible && s.visible)} />
        <Footer networkData={networkData} className={s.footerPosition} />
      </section>
    </>
  )
}

export default ProfileCard
