import axios from "axios"
import { useEffect, useState } from "react"

function useFatch(url:string){
    const [data, setData] = useState()

    useEffect(()=>{
        const getData = async ()=>{
            await axios.get(url)
            setData(getData)
        }
    },[url])

    return [data]
}
export default useFatch