'use client'
import {useState} from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";

const CreateCourse = () => {
    const [active, setActive] = useState(0)
    const [courseInfo, setCourseInfo] = useState({
        name: '',
        description: '',
        price: '',
        estimatedPrice: '',
        tags: '',
        level: '',
        demoUrl: '',
        thumbnail: ''
    })
    const [benefits, setBenefits] = useState([{title: ''}])
    const [prerequisites, setPrerequisites] = useState([{title: ''}])
    const [courseContentData, setCourseContentData] = useState([
        {
            videoUrl: '',
            title: '',
            description: '',
            videoSection: 'Untitled section',
            links: [
                {
                    title: '',
                    url: ''
                },
            ],
            suggestion: ''
        },
    ])
    const [courseData, setCourseData] = useState({})

    return (
        <div className='w-full flex min-h-screen'>
            <div className='w-[80%]'>
                {
                    active === 0 && (
                        <CourseInformation
                        courseInfo={courseInfo}
                        setCourseInfo={setCourseInfo}
                        active={active}
                        setActive={setActive}
                        />
                    )
                }

                {
                    active === 1 && (
                        <CourseData
                            active={active}
                            prerequisites={prerequisites}
                            benefits={benefits}
                            setActive={setActive}
                            setBenefits={setBenefits}
                            setPrerequisites={setPrerequisites}
                        />
                    )
                }
            </div>
            <div className='w-[20%] mt-[100px] h-screen fixed z-[-1] right-0'>
                <CourseOptions active={active} setActive={setActive}/>
            </div>
        </div>
    )
}

export  default CreateCourse;