import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Projects',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/Contacts',
    icon: <IoIcons.IoIosContacts />,
    cName: 'nav-text'
  },
  {
    title: 'Articles',
    path: '/Articles',
    icon: <FaIcons.FaReadme />,
    cName: 'nav-text'
  },
  
];