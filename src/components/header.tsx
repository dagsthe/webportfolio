import {useClickManager} from "./clickManager"

export default function(){
    const clickManager = useClickManager()

    let buttonClassName = "hover:bg-neutral-700/70 transition-all rounded-2xl px-3 py-2 text-black dark:text-white cursor-pointer"
    return (
    <>

    <div className="z-10 h-15 bg-black/20 flex flex-row justify-center px-10 top-0 fixed w-full backdrop-blur-md">
        <div className="md:flex text-primary brightness-90 items-center gap-0 lg:gap-5 xl:gap-4 font-semibold text-lg hidden md:block text-white">
            <p onClick={()=>clickManager("home")} className={buttonClassName}>Home</p>
            <p onClick={()=>clickManager("work")} className={buttonClassName}>Work</p>
            <p onClick={()=>clickManager("contact")} className={buttonClassName}>Contact</p>
            <a href="https://drive.google.com/file/d/1HoRH614pMYXv_VNxVerw7yAyO1Q8SyJ9/view?usp=sharing" target="_blank">
                <p className={buttonClassName}>Resume 📄</p>
            </a>
            
        </div>
    </div>
    </>
    )
}