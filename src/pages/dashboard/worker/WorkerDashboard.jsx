import WorkerStats from "@/components/features/dashboard/worker/worker-stats/WorkerStats";
import DashboardSectionHeader from "@/components/ui/dashboard-section-header";

const WorkerDashboard = () => {
  return (
    <section>
      <DashboardSectionHeader title={'Worker Dashboard'} subtitle={'Track your progress and earnings.'}/>
      <WorkerStats />
    </section>
  );
};

export default WorkerDashboard;