import React from 'react';
import style from '../assets/scss/Skill.module.scss';
import Level from './Level';

const SkillItem = ({name,children,styleName,level}) => {
    return (
        <li className={[style.skill,styleName].join(" ")}>
        <div className={style.title}>
          {name}
        </div>
         <div className={style.icon}>{children}</div>
        <Level type={level}/>
        </li>
    );
};

export default SkillItem;