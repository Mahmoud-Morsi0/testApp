import { useEffect, useState } from 'react';
import '../App.css'
import Card from './../components/Card/index';
import axios from 'axios';
export default function Home() {

    const [data, setData] = useState(undefined)
    console.log(data)


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
            console.log(data)
            setData(data)
        }
        getData()
    }, [])
    return (
        <div className="custom-height flex justify-center items-start flex-wrap  w-screen " >
            <Card data={data.data} />

        </div>
    )
}
