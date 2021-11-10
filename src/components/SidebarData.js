import React from 'react';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ClassIcon from '@material-ui/icons/Class';
export const SidebarData = [
  {
    title: 'About',
    path: '/',
    icon: <AccessibilityIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Research',
    path: '/Research',
    icon: <FindInPageIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Teaching',
    path: '/teaching',
    icon: <ClassIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Students',
    path: '/students',
    icon: <PeopleAltRoundedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Publications',
    path: '/publications',
    icon: <AssignmentIcon/>,
    cName: 'nav-text'
  },
  
];