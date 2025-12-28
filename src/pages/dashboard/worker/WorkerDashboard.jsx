

import { WorkerStatsGrid } from "@/components/features/dashboard/worker/worker-stats/WorkerStatsGrid";
import DashboardSectionHeader from "@/components/ui/dashboard-section-header";



const WorkerDashboard = () => {

  return (
    <section>
      <DashboardSectionHeader title={'Worker Dashboard'} subtitle={'Track your progress and earnings.'}/>
      <WorkerStatsGrid />
    </section>
  );
};

export default WorkerDashboard;