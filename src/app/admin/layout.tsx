"use client"
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import Login from "@/components/admin-panel/Login";
import Loader from "@/components/admin-panel/Loader";
import Sidebar from "@/components/admin-panel/Sidebar";
import Navbar from "@/components/admin-panel/Navbar";




const Layout = ({children}: {children: React.ReactNode}) => {
    const isLoading = useAppSelector(store => store.loadingReducer);
    const { data: session } = useSession();

    if(!session?.user) {
        return <Login />
    }

    return (
    <div className="flex">
        <Sidebar />
        <div className="w-full h-full">
            <Navbar />
            <div className="bg-gray-200 p-4 h-full">{children}</div>
        </div>

        {isLoading && <Loader />}

    </div>
    )
};

export default Layout;
// h-[calc(100vh-64vh)]