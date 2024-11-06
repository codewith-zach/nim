import React, { useState } from 'react'
import { LayoutDashboard, History, ScrollText, CreditCard, User, LogOut, X } from 'lucide-react'
import logoImage from '../../assets/nim_logo.png'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'publications', icon: ScrollText, label: 'Publications' },
    { id: 'license', icon: CreditCard, label: 'Apply for License' },
    { id: 'profile', icon: User, label: 'Profile' },
  ]

  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#010056] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 py-3 lg:hidden">
            <img
              src={logoImage}
              alt="Nigerian Institute of Management"
              className="h-10 w-10 rounded-full bg-white object-cover p-1"
            />
            <button onClick={toggleSidebar} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden px-4 py-4 lg:block">
            <div className="flex justify-center">
              <img
                src={logoImage}
                alt="Nigerian Institute of Management"
                className="h-[100px] w-[100px] rounded-full bg-white object-cover p-2"
              />
            </div>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium ${
                  activeItem === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="border-t border-white/10 px-2 py-4">
            <button
              className="flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar