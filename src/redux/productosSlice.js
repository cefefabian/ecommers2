import { createSlice } from '@reduxjs/toolkit';

export const productosSlice = createSlice({
    name: 'productos',
    initialState: {
        page: 0,
        productos: [],
        productosFill: [],
        isLoading: false
    },
    reducers: {
        setIsloading: (state) =>{
            state.isLoading = true
        },
        setProductos: (state, action) =>{
            state.isLoading = false,
            state.page = action.payload.page,
            state.productos = action.payload.productos

            state.productosFill = state.productos
        },
        buscador: (state, action) =>{
            const value = action.payload

            const filtrado = state.productos.filter((dato)=> dato.category.includes(value))
            if (value) {
                state.productosFill = filtrado
            }else{

                state.productosFill = state.productos
            }

        }
    }
});


// Action creators are generated for each case reducer function
export const { setIsloading, setProductos, buscador } = productosSlice.actions;