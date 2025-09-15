import React from 'react';
import { ChevronDown, Bell, Edit3 } from 'lucide-react';

interface Invoice {
  id: string;
  clientName: string;
  amount: string;
  dueDate: string;
  status:
    | 'Update Status'
    | 'Unpaid'
    | 'Disputed'
    | 'Paid'
    | 'Partially Paid'
    | 'Overdue'
    | 'Draft'
    | 'Awaited';
  hasNotification?: boolean;
  hasEdit?: boolean;
}

const invoices: Invoice[] = [
  { id: '1', clientName: 'Client Name', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Update Status' },
  { id: '2', clientName: 'Client Name', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Unpaid' },
  { id: '3', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Disputed' },
  { id: '4', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Paid' },
  { id: '5', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Paid' },
  { id: '6', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Partially Paid' },
  { id: '7', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Paid' },
  { id: '8', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Overdue', hasNotification: true },
  { id: '9', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Awaited', hasNotification: true },
  { id: '10', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Draft', hasEdit: true },
  { id: '11', clientName: 'Income Trend', amount: '$1,25,000', dueDate: 'Due 2024-06-15', status: 'Paid' },
];

const StatusBadge = ({ status }: { status: Invoice['status'] }) => {
  const statusConfig: Record<Invoice['status'], { bg: string; text: string; label: string }> = {
    'Update Status': { bg: 'bg-purple-600', text: 'text-white', label: 'Update Status' },
    'Unpaid': { bg: 'bg-gray-200', text: 'text-gray-700', label: 'Unpaid' },
    'Disputed': { bg: 'bg-red-200', text: 'text-red-700', label: 'Disputed' },
    'Paid': { bg: 'bg-green-200', text: 'text-green-700', label: 'Paid' },
    'Partially Paid': { bg: 'bg-yellow-200', text: 'text-yellow-700', label: 'Partially Paid' },
    'Overdue': { bg: 'bg-red-200', text: 'text-red-700', label: 'Overdue' },
    'Draft': { bg: 'bg-gray-200', text: 'text-gray-600', label: 'Draft' },
    'Awaited': { bg: 'bg-yellow-200', text: 'text-yellow-700', label: 'Awaited' },
  };

  const config = statusConfig[status];

  return (
    <span
      className={`px-4 py-1.5 rounded-full font-semibold text-sm md:text-base lg:text-lg ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
};

export const InvoiceList = () => {
  return (
    <div className="mobile-container px-4 md:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h3 className="text-gray-500 font-semibold md:text-lg lg:text-xl">Your Invoices</h3>
        <ChevronDown size={20} className="text-gray-500 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </div>

      <div className="space-y-3 desktop-invoice-grid md:space-y-4 lg:space-y-5">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="bg-white invoice-card p-4 rounded-xl border-2 border-gray-200 shadow-sm flex justify-between items-center md:p-5 lg:p-6"
          >
            <div className="flex-1">
              <div className="font-medium text-gray-500 mb-1 md:text-lg lg:text-xl">
                {invoice.clientName}
              </div>
              <div className="text-sm text-gray-500 md:text-base lg:text-lg">
                {invoice.amount}, {invoice.dueDate}
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <StatusBadge status={invoice.status} />
              {invoice.hasNotification && (
                <Bell size={16} className="text-gray-400 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              )}
              {invoice.hasEdit && (
                <Edit3 size={16} className="text-gray-400 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 mb-4 md:mt-10 md:mb-6 lg:mt-12 lg:mb-8">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-gray-500 text-lg font-medium md:text-xl lg:text-4xl font-bold">
  <span>Spark</span>
  <svg
    width="16"
    height="16"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path
      d="M4.39587 3.81128C5.70522 3.86231 6.60635 5.64772 6.70837 6.03882C6.81034 6.4299 6.8104 7.0077 6.16443 7.04175C5.51826 7.07576 5.3482 6.775 4.80408 6.68433C4.73048 6.67206 4.59981 6.66772 4.5658 6.66772C4.46378 6.66773 4.33263 6.67672 4.29333 6.68433C4.11734 6.71842 3.66404 6.82386 3.25623 6.97339C2.74611 7.16035 1.96464 7.0248 2.11755 6.12378C2.2706 5.22254 3.08651 3.76027 4.39587 3.81128ZM1.17322 2.4021C1.60962 2.18457 2.20537 2.49432 2.50427 3.09351C2.80312 3.69274 2.69164 4.35434 2.25525 4.57202C1.81885 4.78957 1.22311 4.48075 0.924194 3.88159C0.625254 3.28232 0.736795 2.6198 1.17322 2.4021ZM6.09412 3.02515C6.36734 2.40733 6.95367 2.06762 7.40369 2.26636C7.85375 2.46534 7.9972 3.12784 7.724 3.74585C7.45076 4.36387 6.86451 4.7036 6.41443 4.50464C5.96434 4.30565 5.82087 3.64318 6.09412 3.02515ZM4.48474 1.27515C4.67401 0.572063 5.24223 0.113138 5.75427 0.250732C6.2664 0.388591 6.52854 1.07095 6.33923 1.77417C6.14992 2.47737 5.58084 2.93546 5.06873 2.79761C4.55682 2.65961 4.29558 1.97818 4.48474 1.27515ZM2.84216 0.235107C3.35521 0.100705 3.9203 0.562851 4.10486 1.26733C4.28928 1.97172 4.02311 2.6515 3.51013 2.78589C2.99716 2.92005 2.43197 2.45801 2.24744 1.75366C2.06288 1.04919 2.32913 0.369521 2.84216 0.235107Z"
      fill="url(#paint0_linear_1_677)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_677"
        x1="3.11358"
        y1="-0.0797428"
        x2="4.46129"
        y2="7.6286"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD2A7B" />
        <stop offset="0.41261" stopColor="#9747FF" />
        <stop offset="1" stopColor="#334CCA" />
      </linearGradient>
    </defs>
  </svg>
  <span className="flex items-center gap-2 text-gray-400 font-thin text-lg font-medium md:text-xl lg:text-4xl ">
  nomy
</span>

</div>

          <div className="text-gray-400 text-xs md:text-sm lg:text-base">
            sparking the creator economy
          </div>
        </div>
      </div>
    </div>
  );
};
