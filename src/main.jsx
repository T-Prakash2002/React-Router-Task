import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navigation from './assets/Navigation';
import Home from './assets/Home';
import Fsd from './assets/fsd';
import Datascience from './assets/datascience';
import Cyber_security from './assets/cyber_security';
import Career from './assets/career';
import All from './assets/All';
import './index.css'


const data=[
  {
    id:10,
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    title:'Roles and Responsibilities of a Data Scientist',
    duration:'5 Min Read',
    category:'DATA SCIENCE',
    date:'Oct 20, 2023'
  },
  {
    id:1,
   image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title:'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    duration:'5 Min Read',
    category:'CYBER SECURITY',
    date:'Oct 04 2023'

  },
   {
    id:15,
    image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
    title:'Crack the TCS IPA Exam: Top Questions and Exclusive Tips for Success!',
    duration:'7 Min Read',
    category:'CAREER',
    date:'Oct 06, 2023'
  },
  {
    id:2,
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp',
    title:'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    duration:'3 Min Read',
    category:'CYBER SECURITY',
    date:'Dec 04, 2023'

  },{
    id:13,
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
    title:'8 Top Full Stack Web Developer Coding Projects For You!',
    duration:'8 Min Read',
    category:'FULL STACK DEVELOPMENT',
    date:'Mar 25, 2024'
  },
  
  {
    id:4,
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
    duration:'4 Min Read',
    category:'CYBER SECURITY',
    date:'Oct 04, 2023'

  },
  {
    id:5,
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp',
    title:'What Is Hacking? Types of Hacking & More',
    duration:'6 Min Read',
    category:'CYBER SECURITY',
    date:'Mar 25, 2024'

  },
  {
    id:6,
    image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    title:'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
    duration:'4 Min Read',
    category:'CYBER SECURITY',
    date:'Mar 25, 2024 '
  },
  {
    id:7,
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp',
    title:'12 Real-World Data Science Examples: Power Of Data Science',
    duration:'7 Min Read',
    category:'DATA SCIENCE',
    date:'Oct 21, 2023'
  },{
    id:3,
    image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
    title:'8 Different Types of Cybersecurity and Threats Involved',
    duration:'4 Min Read',
    category:'CYBER SECURITY',
    date:'Sep 08, 2023'

  },
  {
    id:8,
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science-768x480.webp',
    title:'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    duration:'6 Min Read',
    category:'DATA SCIENCE',
    date:'Dec 13, 2023'
  },
  {
    id:9,
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
    title:'Can A Commerce Student Do Data Science?',
    duration:'3 Min Read',
    category:'CAREER',
    date:'Sep 08, 2023'
  },
  
  {
    id:11,
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
    title:'Best Full-Stack Development Project Ideas in 2024',
    duration:'4 Min Read',
    category:'FULL STACK DEVELOPMENT',
    date:'Dec 13, 2023'
  },
  {
    id:12,
    image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
    title:'Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]',
    duration:'6 Min Read',
    category:'FULL STACK DEVELOPMENT',
    date:'Dec 14, 2023'
  },
  
  {
    id:14,
    image:'https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses-768x480.webp',
    title:'7 Best Full-Stack Development Online Courses [2024]',
    duration:'5 Min Read',
    category:'FULL STACK DEVELOPMENT',
    date:'Mar 25, 2024'
  },
 
  {
    id:16,
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    title:'Top 20 HTML & CSS Interview Questions With Answers',
    duration:'6 Min Read',
    category:'CAREER',
    date:'Oct 05, 2023'
  },
  {
    id:17,
    image:'https://www.guvi.in/blog/wp-content/uploads/2022/11/mechanical_engineering_to_software_engineering_a_proven_guide_1-768x384.webp',
    title:'Mechanical Engineering to Software Engineering: A Proven Guide | 2024',
    duration:'4 Min Read',
    category:'CAREER',
    date:'Dec 14, 2023'
  },

]

const router=createBrowserRouter([
  
    {
      path:'/',
      element:<Navigation />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:'all',
          element:<All data={data}/>
        },
        {
          path:'full_stack_development',
          element:<Fsd data={data}/>
        },
        {
          path:'data_science',
          element:<Datascience data={data}/>
        },
        {
          path:'cyber_security',
          element:<Cyber_security data={data}/>
        },
        {
          path:'/career',
          element:<Career data={data}/>
        },
      ]
    }
  ])



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
