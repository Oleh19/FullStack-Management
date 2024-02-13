'use client'
import AdminSidebar from "../../components/Admin/Sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import CreateCourse from '../../components/Admin/Course/CreateCourse'
import DashboardHeader from "../../../app/components/Admin/DashboardHeader";
const page = () => {
    return (
        <div><Heading
            title='Learning Platform'
            description='This is a platform for students to learn and get help from teachers'
            keywords='Programming, MERN, Full-Stack'
        />
        <div className='flex'>
            <div className='1500px:w-[16%] w-1/5'>
                <AdminSidebar />
            </div>
            <div className='w-[85%]'>
                <DashboardHeader />
                <CreateCourse />
            </div>
        </div>
        </div>
    )
}

export  default page;