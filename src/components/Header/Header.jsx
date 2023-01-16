import { useState } from "react"


export default function Header(){
    const [dir,setDir] = useState('')


    const handleChangeInput = (e) => {
        setDir(e.target.value)
    }

    const handleClick = () => {
        alert(dir)
    }

    return(
        <div className="w-full flex flex-col items-center" style={{backgroundImage:`url('pattern-bg.png')`,height:'250px'}}>
            <h1 className="my-4 text-white text-2xl">IP Address Tracker</h1>
            <div className="flex">
                <input onChange={handleChangeInput} className="w-65 sm:w-80 p-2 rounded-l-lg" type="text" placeholder="Search for any ip address or domain" name="ip" id="" />
                <button onClick={handleClick} className="flex items-center justify-center bg-black px-4 rounded-r-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
                </button>
            </div>
        </div>
    )
}