import React from 'react';
import { ArrowLeft, Signal, Wifi, Battery, User } from 'lucide-react';

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-3 landscape-header md:px-6 md:py-4 lg:px-8 lg:py-5">
      {/* Status bar */}
      <div className="flex justify-between items-center text-black text-sm font-medium mb-3 md:text-base lg:text-lg">
        <span>9:41</span>
        <div className="flex items-center gap-1 md:gap-2">
          <Signal size={16} />
          <Wifi size={16} />
          <Battery size={16} />
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <ArrowLeft size={20} className="text-black md:hidden" />
          <span className="text-black font-medium md:text-lg lg:text-xl">Back</span>
        </div>
        <span className="text-black font-semibold text-lg md:text-xl lg:text-2xl">Dashboard</span>
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
};