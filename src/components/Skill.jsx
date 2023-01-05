import {lazy, Suspense} from 'react'
const SkillIcon = lazy(() => import('./SkillIcon'))

const Skill = () => {
    const icons = [
        {name:'HTML',icon:'fa-brands fa-html5'},
        {name:'CSS',icon:'fa-brands fa-css3'},
        {name:'Javascript',icon:'fa-brands fa-square-js'},
        {name:'React',icon:'fa-brands fa-react'},
        {name:'Vue',icon:'fa-brands fa-vuejs'},
        {name:'Python',icon:'fa-brands fa-python'},
        {name:'Git',icon:'fa-brands fa-git-alt'},
        {name:'SQL',icon:'fa-solid fa-database'}
    ]
    const style = {
        container: 'grid grid-cols-4 lg:grid-cols-8 justify-items-center p-10 gap-10 w-full bg-secondary border-b-4 border-b-title',
        icon: 'text-white hover:text-title transition hover:-translate-y-2 text-6xl md:text-7xl cursor-pointer text-center animate-fadein-slow',
        name: 'text-xl pointer-events-none my-2 '
    }

    return(
            <div className={style.container}>
                {icons.map(icon => {
                    return(
                        <Suspense fallback={<div></div>}>
                            <SkillIcon icon={icon} style={style}/>
                        </Suspense>
                    )
                })}
            </div>
    )

}

export default Skill