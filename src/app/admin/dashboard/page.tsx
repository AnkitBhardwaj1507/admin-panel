"use client"
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductRow from "@/components/admin-panel/ProductRow";
import Popup from "@/components/admin-panel/Popup";

export interface IProduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    name: string;
    price: string;
    category: string;
}

const Dashboard = () => {
    
    const [products, setProducts] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);

    

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setLoading(true))

        axios.get("/api/get_products")
        .then((res) => setProducts(res.data))
        
        .catch((err) => console.log(err))
        .finally(()=> dispatch(setLoading(false)));

    }, [updateTable])

    
    return (
    <div className="">
        <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4 no-scrollbar overflow-y-auto">
            <h2 className="text-3xl">All Products</h2>

            <div className="mt-4 h-calc(100vh-180px)] overflow-y-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-gray-500 border-t norder-[#ececec]">
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Picture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: IProduct, index) => (
                            
                            <ProductRow key={product._id}
                            srNo={index+1}
                            setOpenPopup={setOpenPopup}
                            setUpdateTable= {setUpdateTable}
                            product={product} />
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        {openPopup && (
            <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
        )}
        
    </div>);
}

export default Dashboard;


