import React from 'react';
import { Header } from './components/Header';
import { CreateInvoice } from './components/CreateInvoice';
import { TimePeriod } from './components/TimePeriod';
import { StatsCards } from './components/StatsCards';
import IncomeChart from './components/IncomeChart'; // ✅ default import
import { InvoiceList } from './components/InvoiceList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 high-dpi-text">
      <div className="dashboard-container max-w-sm mx-auto bg-white min-h-screen md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Header />
        <div className="md:laptop-layout lg:desktop-layout">
          <div className="md:space-y-6">
            <CreateInvoice />
            <TimePeriod />
            <StatsCards />
          </div>
          <br></br>
          <div className="md:space-y-6">
            <IncomeChart />
            <InvoiceList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
