import { setIsloading, setProductos, buscador } from "../redux/productosSlice"

export const fetchProduct = (page = 10) =>{
    return async (dispact) => {
        dispact( setIsloading() )
        console.log(page);

        const resp = await fetch(`https://fakestoreapi.com/products?limit=${page}`)
        const data = await resp.json()
        console.log(data);

        dispact(setProductos({ productos: data, page: page * 2 }))
    }
}