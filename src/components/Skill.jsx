const SkillBox = (props) => {
    return (
        <div className="text-2xl p-6 sm:p-10 shadow-lg ring-primary ring-2 rounded flex flex-col justify-start gap-4 items-center">
            <div className="text-8xl text-primary drop-shadow-lg">
                {props.children}
            </div>
            
            <h3>{props.name}</h3>
        </div>
    )
}


const Skill = () => {
    
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-10">
                
                <SkillBox name="HTML5">
                    <i className="fa-brands fa-html5"/>
                </SkillBox>
                
                <SkillBox name="CSS / Tailwind">
                    <i className="text-8xl fa-brands fa-css3"/>
                </SkillBox>

                <SkillBox name="Javascript">
                    <i className="text-8xl fa-brands fa-square-js"></i>
                </SkillBox>

                <SkillBox name="React">
                    <i className="text-8xl fa-brands fa-react" />
                </SkillBox>

                <SkillBox name="Python">
                    <i className="text-8xl fa-brands fa-python" />
                </SkillBox>
            </div>
        </div>
    )

}

export default Skill