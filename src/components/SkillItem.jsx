import React from 'react';
import style from '../assets/scss/Skill.module.scss';
import Level from './Level';

const SkillItem = ({name,children,styleName,level}) => {
    return (
        <li className={[style.skill,styleName].join(" ")}>
        <div className={style.title}>
          <div className={style.buttons}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {name}
        </div>
         {children}
        <Level type={level}/>
        </li>
    );
};

export default SkillItem;