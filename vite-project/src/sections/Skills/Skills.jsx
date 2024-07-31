import styles from './SkillStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <h2>Intermediate level</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='MySQL' />
        <SkillList src={checkMarkIcon} skill='Bootstrap' />
        <SkillList src={checkMarkIcon} skill='MS Office' />
      </div>
      <hr />
      <h2>Basic level</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='PHP' />
        <SkillList src={checkMarkIcon} skill='Python' />
        <SkillList src={checkMarkIcon} skill='Git' />
        <SkillList src={checkMarkIcon} skill='React' />
      </div>
      <hr />
      <h2>Beginner Level</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='SASS' />
        <SkillList src={checkMarkIcon} skill='TypeScript' />
        <SkillList src={checkMarkIcon} skill='jQuery' />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
