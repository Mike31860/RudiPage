import React from 'react';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AssignmentIcon from '@material-ui/icons/Assignment';
export const SidebarData = [
  {
    title: 'Projects',
    path: '/home',
    icon: <FindInPageIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <PeopleAltRoundedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Articles',
    path: '/articles',
    icon: <AssignmentIcon/>,
    cName: 'nav-text'
  },
  
];