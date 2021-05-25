import React from 'react';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AssignmentIcon from '@material-ui/icons/Assignment';
export const SidebarData = [
  {
    title: 'Projects',
    path: '/',
    icon: <FindInPageIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/Contacts',
    icon: <PeopleAltRoundedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Articles',
    path: '/Articles',
    icon: <AssignmentIcon/>,
    cName: 'nav-text'
  },
  
];