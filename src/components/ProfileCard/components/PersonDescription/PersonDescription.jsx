import Field from '../Field/Field'
import s from './PersonDescription.module.less'

const PersonDescription = ({ personData }) => {
  const { name, position, mobile, call, email, website, location, date, rank } = personData

  return (
    <div className={s.description}>
      <h3 className={s.title}>{name}</h3>
      <h4 className={s.subtitle}>{position}</h4>
      <div className={s.list}>
        <Field text={mobile} iconType="mobile" />
        <Field text={call} iconType="call" />
        <Field text={call} iconType="call" />
        <Field text={email} iconType="email" />
        <Field text={website} iconType="website" />
        <Field text={location} iconType="location" />
        <Field text={date} iconType="date" />
        <Field text={rank} iconType="user" />
      </div>
    </div>
  )
}

export default PersonDescription
