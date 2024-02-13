'use client'

import Heading from "@/app/utils/Heading";
import AdminSidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import DashboardHero from "@/app/components/Admin/DashboardHero";

const page = () => {
    return (
        <div>
           <AdminProtected>
               <Heading
                   title='Learning - Admin'
                   description='This is a platform for students to learn and get help from teachers'
                   keywords='Programming, students, Full-Stack, Front-End, Next'
               />
               <div className='flex min-h-[100vh]'>
                   <div className='1500px:w-[16%] w-1/5 z-10'>
                       <AdminSidebar  />
                   </div>
                   <div className='w-[85%] min-h-[100vh]'>
                       <DashboardHero />
                   </div>
               </div>
           </AdminProtected>
        </div>
    )
}

export default  page