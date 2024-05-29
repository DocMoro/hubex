import clsx from 'clsx'

import Field from '../Field/Field'
import Logo from '../Logo/Logo'
import s from './СompanyDescription.module.less'

const СompanyDescription = ({ companyData, className }) => {
  const { mobile, email, website, location, date, print, name, description, client } = companyData
  return (
    <div className={clsx(s.mobileContainer, className && className)}>
      <div>
        <Logo className={clsx(s.logoPosition, s.logoHight)} />
        <h3 className={s.title}>{name}</h3>
        <h4 className={s.subtitle}>{description}</h4>
      </div>
      <ul className={s.list}>
        <Field text={mobile} iconType="mobile" link="tel:+123456789" />
        <Field text={email} iconType="email" link="mailto:support@expo.io" />
        <Field text={website} iconType="website" link="#" />
        <Field text={location} iconType="location" />
        <Field text={date} iconType="date" />
        <Field text={client} iconType="user" />
        <Field text={print} iconType="print" />
      </ul>
    </div>
  )
}

export default СompanyDescription
