import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "My Internships",
    path: "/dashboard/my-internships",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscAccount",
  },
  {
    id: 3,
    name: "My Research",
    path: "/dashboard/Reseach",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 4,
    name: "My Internship Information",
    path: "/dashboard/my-internships",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 5,
    name: "My Placement Information",
    path: "/dashboard/my-placements",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "My Placement",
    path: "/dashboard/my-placement",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "My Queries",
    path: "/dashboard/queries",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  
]
