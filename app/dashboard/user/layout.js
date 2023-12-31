
'use client'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useState } from 'react';
import Aside from '../../componenets/home/aside';
import Header from '../../componenets/home/header';
import { Toggle } from '../../componenets/redux/actions/SidebarActions';
import LoadingCompo from '../../componenets/home/loading';


const ProtectedLayout = ({ children }) => {

const dispatch = useDispatch();



const   isSidebarOpen=useSelector(state=>state.Side.isOpened)
const   loading=useSelector(state=>state.Side.Loading)
const user = useSelector((state) => state.Auth.user);



  
  
    const authStatus = useSelector((state) => state.Auth.isLogged);
    const router = useRouter();
  
    useEffect(() => {
      if (!authStatus || user.authorities[0].authority=='ADMIN' ||user.authorities[0].authority=="advisor" ) {
        router.push('/login');
      }
    }, [authStatus, router]);
  
    return authStatus  ? (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      {/* Sidebar */}
   <Aside  />

      {/* Sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={()=>dispatch(Toggle())}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
     <Header/>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-900">
          <div className="container mx-auto p-6">
            {/* Your page content goes here */}

      
     
                      {children}

       
         



          </div>
        </main>
      </div>
    </div>
    ) : null;
  };
  
  export default ProtectedLayout;
  










