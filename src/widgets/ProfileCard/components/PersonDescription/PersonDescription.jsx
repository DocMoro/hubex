import Field from '../Field/Field'
import s from './PersonDescription.module.less'

const PersonDescription = ({ personData }) => {
  const { name, position, mobile, call, email, website, location, date, rank } = personData

  const nameData = name.split(' ')

  return (
    <div className={s.description}>
      <h3 className={s.title}>
        {nameData[0]}
        <br />
        {`${nameData[1]} ${nameData[2]}`}
      </h3>
      <h4 className={s.subtitle}>{position}</h4>
      <ul className={s.list}>
        <Field text={mobile} iconType="mobile" link="tel:+123456789" />
        <Field text={call} iconType="call" link="tel:+123456789" />
        <Field text={call} iconType="call" link="tel:+123456789" />
        <Field text={email} iconType="email" link="mailto:support@expo.io" />
        <Field text={website} iconType="website" link="#" />
        <Field text={location} iconType="location" />
        <Field text={date} iconType="date" />
        <Field text={rank} iconType="user" />
      </ul>
    </div>
  )
}

export default PersonDescription
