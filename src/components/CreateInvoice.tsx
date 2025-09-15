import React from 'react';
import { Plus } from 'lucide-react';

export const CreateInvoice = () => {
  return (
    <div className="mobile-container px-4 py-6 md:px-6 lg:px-8 text-center">
      {/* Card Box */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
        
        {/* Gradient Circle Outline */}
        <div className="w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] p-[2px] mx-auto mb-4 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
            <Plus className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#9747FF]" />
          </div>
        </div>

        {/* Gradient Heading */}
        <h3 className="font-semibold text-lg mb-2 md:text-xl lg:text-2xl bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent">
          Create New Invoice
        </h3>

        {/* Subtext inside box */}
        <p className="text-gray-500 text-sm md:text-base lg:text-lg">
          Start by creating and sending new invoice
        </p>
      </div>

      {/* Text outside box */}
      <p className="text-[#9747FF] text-xs mt-4 md:text-sm lg:text-base">
        Or Upload an existing invoice and set payment reminder
      </p>
    </div>
  );
};
