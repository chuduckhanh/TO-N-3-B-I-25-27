import { Search, Activity, BookOpen } from "lucide-react";
import React from "react";

export const Section = ({
  type,
  children,
}: {
  type: "kham-pha" | "hoat-dong" | "luyen-tap";
  children: React.ReactNode;
}) => {
  const config = {
    "kham-pha": {
      title: "Khám phá",
      icon: <Search className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-700 border-blue-300",
      iconBg: "bg-blue-500 text-white",
    },
    "hoat-dong": {
      title: "Hoạt động",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-700 border-orange-300",
      iconBg: "bg-orange-500 text-white",
    },
    "luyen-tap": {
      title: "Luyện tập",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-green-100 text-green-700 border-green-300",
      iconBg: "bg-green-500 text-white",
    },
  };

  const { title, icon, color, iconBg } = config[type];

  return (
    <div className={`rounded-xl border-2 mb-8 overflow-hidden bg-white shadow-sm`}>
      <div className={`p-4 ${color} border-b-2 flex items-center gap-3 font-semibold text-lg`}>
        <div className={`p-2 rounded-lg ${iconBg}`}>{icon}</div>
        <h2>{title}</h2>
      </div>
      <div className="p-6 text-gray-800 space-y-6">
        {children}
      </div>
    </div>
  );
};

export const LessonHeader = ({ title, number }: { title: string; number: number }) => {
  return (
    <div className="mb-8 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg border-4 border-blue-400">
      <h1 className="text-xl font-medium tracking-widest uppercase mb-2 opacity-90">Bài {number}</h1>
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
    </div>
  );
}

export const ProblemItem = ({
  number,
  children,
}: {
  number: number | string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-4 items-start bg-gray-50 p-5 rounded-xl border border-gray-200">
      <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 font-bold rounded-full flex items-center justify-center border-2 border-indigo-300">
        {number}
      </div>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
};

export const Box = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white border-2 border-gray-200 rounded-lg p-4 shadow-sm ${className}`}>
    {children}
  </div>
);

export const InputAnswer = ({ 
  answer, 
  placeholder = "?" 
}: { 
  answer?: string | number, 
  placeholder?: string 
}) => {
  const [val, setVal] = React.useState("");
  const isCorrect = answer !== undefined ? val.trim() === String(answer) : null;
  
  return (
    <span className="inline-block relative">
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        className={`w-12 h-10 text-center font-bold text-lg rounded-md border-2 
          ${isCorrect === true ? 'border-green-500 bg-green-50 text-green-700' : 
            isCorrect === false && val !== '' ? 'border-red-500 bg-red-50 text-red-700' : 
            'border-gray-300 bg-white'
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
    </span>
  );
};
