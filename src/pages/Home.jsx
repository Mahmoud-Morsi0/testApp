import { useEffect, useState } from 'react';
import '../App.css'
import Card from './../components/Card/index';
import axios from 'axios';
export default function Home() {

    const [products, setProducts] = useState([])
    console.log(products)


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
            setProducts(data)
        }
        getData()
    }, [])
    return (
        <div className="custom-height flex justify-center items-start flex-wrap  w-screen " >
            <Card data={products.data} />

        </div>
    )
}
