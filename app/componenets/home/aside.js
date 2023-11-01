'use client'

import { SwissFranc } from "lucide-react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { on } from "../redux/actions/SidebarActions"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"



export default function Aside(props) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.Side.isOpened);
  const user = useSelector((state) => state.Auth.user);

  const [path, setPath] = useState('');

  useEffect(() => {
    const pathname = window.location.pathname;
    setPath(pathname);
  }, []);

  const userRole = user.authorities[0].authority;

  const navigationLinks = {
    SUSER: [
      { path: '/dashboard/user', label: 'Tamplates', clicked: true },
      { path: '/dashboard/user/document', label: 'Documents', clicked: false },
    ],
    ADMIN: [
      { path: '/dashboard/admin', label: 'Dashboard', clicked: true },
      { path: '/dashboard/admin/tamplate', label: 'Template', clicked: false },
      { path: '/dashboard/admin/categories', label: 'Category', clicked: false },

      { path: '/dashboard/admin/users', label: 'Users', clicked: false },
    ],
    ADVISOR: [
      { path: '/dashboard/user', label: 'Advisor', clicked: false },
      { path: '/dashboard/user/counsellors', label: 'Counsellors', clicked: false },
      { path: '/dashboard/user/templates', label: 'Templates', clicked: false },
    ],
  };
  
  const filteredLinks = navigationLinks[userRole]; // Access the array by role key
  const [links, setLinks] = useState(filteredLinks);
  
  
  const handleLinkClick = (index) => {
    const updatedLinks = [...links];
    updatedLinks.forEach((link, i) => {
      if (i === index) {
        link.clicked = true;
      } else {
        link.clicked = false;
      }
    });
    setLinks(updatedLinks);
    dispatch(on());
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r border-gray-200 bg-mycolor dark:border-gray-700 transform ease-in-out duration-300 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:relative md:flex md:flex-shrink-0 md:w-64 md:shadow-xl`}
    >
      <div className="py-4 text-gray-500 m-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mx-4 mb-5 p-10">
          <img className="logo" src="/logo.svg" />
        </h2>
        {links && (
          <ul className="space-y-5 items-center mt-5">
            <li>{''}</li>
            {links.map((link, index) => (

              <li
                className={`text-2xl flex items-center text-white m-5 ${link.clicked ? 'active' : ''}`}
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                />
                <div className="ml-2">
                  {link.clicked ? (
                    <span>{link.label}</span>
                  ) : (
                    <Link onClick={() => handleLinkClick(index)} href={link.path}>
                      {link.label}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}