'use client'

import Heading from "@/app/utils/Heading";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";

const page = () => {
    return (
        <div>
           <AdminProtected>
               <Heading
                   title='Learning - Admin'
                   description='This is a platform for students to learn and get help from teachers'
                   keywords='Programming, students, Full-Stack, Front-end, Next'
               />
               <div className='flex min-h-[200vh]'>
                   <div className='1500px:w-[16%] w-1/5'>
                       <AdminSidebar  />
                   </div>
                   <div className='w-[85%]'>

                   </div>
               </div>
           </AdminProtected>
        </div>
    )
}

export default  page