import axios from "axios"
import { useEffect, useState } from "react"

const useFatch = (url:string)=>{
    const [data, setData] = useState<any[]>([])
    
    useEffect(()=>{
        const getData = async ()=>{
            try {
                const res = await axios.get(url)
                setData(res.data.carts)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[url])

    return [data]
}
export default useFatch