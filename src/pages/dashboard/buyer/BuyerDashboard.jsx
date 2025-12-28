import BuyerStats from '@/components/features/dashboard/buyer/buyer-stat/BuyerStats';
import DashboardSectionHeader from '@/components/ui/dashboard-section-header';

const BuyerDashboard = () => {
  return (
    <section>
      <DashboardSectionHeader title="Buyer Dashboard" />
      <BuyerStats/>
    </section>
  );
};

export default BuyerDashboard;