import React, { useState } from 'react';
import Lesson25 from './components/Lesson25';
import Lesson26 from './components/Lesson26';
import Lesson27 from './components/Lesson27';
import { Book, LayoutDashboard, Menu, X, CheckCircle2 } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [activeLesson, setActiveLesson] = useState(25);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const lessons = [
    { id: 25, title: 'Bài 25', name: 'Phép chia hết, phép chia có dư' },
    { id: 26, title: 'Bài 26', name: 'Chia số có hai chữ số cho số có một chữ số' },
    { id: 27, title: 'Bài 27', name: 'Giảm một số đi một số lần' },
  ];

  const renderContent = () => {
    switch (activeLesson) {
      case 25: return <Lesson25 />;
      case 26: return <Lesson26 />;
      case 27: return <Lesson27 />;
      default: return <Lesson25 />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:sticky top-0 left-0 z-30 h-screen w-72 bg-gradient-to-b from-indigo-900 to-indigo-950 text-white shadow-2xl transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-indigo-800/50 flex-shrink-0">
          <div className="flex items-center gap-3 text-2xl font-bold text-white mb-2 tracking-tight">
            <LayoutDashboard className="text-indigo-400" />
            Toán Lớp 3
          </div>
          <p className="text-indigo-300 text-sm font-medium">Vui học Toán mỗi ngày!</p>
        </div>
        
        <nav className="p-4 space-y-2 flex-grow overflow-y-auto">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                setActiveLesson(lesson.id);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "w-full text-left p-4 rounded-xl transition-all duration-200 group flex flex-col gap-1 border-2",
                activeLesson === lesson.id
                  ? "bg-indigo-600 border-indigo-400 shadow-md transform scale-100"
                  : "bg-transparent border-transparent hover:bg-white/5 text-indigo-200 hover:text-white"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <span className={cn(
                  "font-bold text-sm tracking-wider uppercase",
                  activeLesson === lesson.id ? "text-indigo-200" : "text-indigo-400"
                )}>
                  {lesson.title}
                </span>
                {activeLesson === lesson.id && <CheckCircle2 className="w-5 h-5 text-indigo-300" />}
              </div>
              <span className="font-semibold leading-snug">{lesson.name}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-6 text-center border-t border-indigo-800/50 flex-shrink-0">
          <p className="text-sm font-medium text-indigo-400 flex items-center justify-center gap-2">
            <Book className="w-4 h-4" />
            Chúc các em học tốt
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto w-full relative">
        {/* Mobile Header */}
        <header className="bg-white px-4 h-16 border-b border-gray-200 flex items-center shrink-0 md:hidden sticky top-0 z-10 shadow-sm">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 mr-2 text-gray-500 hover:bg-gray-100 rounded-lg hover:text-gray-700 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="font-bold text-gray-800 flex items-center gap-2">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Bài {activeLesson}</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 sm:p-8 flex-1 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
