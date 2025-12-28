import React from 'react';
import DashboardSectionHeader from '@/components/ui/dashboard-section-header';
import TotalEarnings from '@/components/features/dashboard/worker/withdrawal/TotalEarnings';
import WithdrawalForm from '@/components/features/dashboard/worker/withdrawal/WithdrawalForm';


const WithdrawalPage = () => {
  // Usually fetched via context/API
  const userData = {
    name: "Abdur Rahman",
    email: "worker@example.com",
    totalCoins: 350 
  };

  const CONVERSION_RATE = 20;
  const MIN_WITHDRAW_COINS = 200;
  const totalValueUSD = (userData.totalCoins / CONVERSION_RATE).toFixed(2);

  return (
    <section className="space-y-2">
      <DashboardSectionHeader title={'Withdraw Funds'} />
      
      <TotalEarnings 
        totalCoins={userData.totalCoins} 
        totalValueUSD={totalValueUSD} 
      />

      <WithdrawalForm 
        userData={userData} 
        minCoins={MIN_WITHDRAW_COINS} 
        conversionRate={CONVERSION_RATE} 
      />
    </section>
  );
};

export default WithdrawalPage;