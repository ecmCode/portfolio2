const SkillIcon = ({icon,style}) => {
    return (
        <div className={style.icon}>
            <i className={icon.icon}/>
            <div className={style.name}>
                {icon.name}
            </div>
        </div>
    );
}
 
export default SkillIcon;