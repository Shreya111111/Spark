import React from 'react';

export const StatsCards = () => {
  return (
    <div className="mobile-container px-4 mb-6 md:px-6 lg:px-8">
      {/* Total Earnings Card */}
      <div className="border-2 border-gray-200 rounded-xl shadow-sm p-4 mb-4 bg-white">
        <span className="text-gray-600 text-sm md:text-base lg:text-lg">Total Earnings</span>
        <div className="text-purple-600 text-2xl font-bold md:text-3xl lg:text-4xl">$1,25,000</div>
      </div>

      {/* Payment Cards Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Payment Awaited */}
        <div className="border-2 border-gray-200 rounded-xl shadow-sm p-4 bg-white">
          <span className="text-gray-600 text-sm md:text-base lg:text-lg">Payment Awaited</span>
          <div className="text-purple-600 text-xl font-semibold md:text-2xl lg:text-3xl">$25,000</div>
        </div>

        {/* Payment Overdue */}
        <div className="border-2 border-gray-200 rounded-xl shadow-sm p-4 bg-white">
          <span className="text-gray-600 text-sm md:text-base lg:text-lg">Payment Overdue</span>
          <div className="text-purple-600 text-xl font-semibold md:text-2xl lg:text-3xl">$25,000</div>
        </div>
      </div>
    </div>
  );
};
