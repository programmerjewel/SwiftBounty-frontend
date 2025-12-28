
import { StatCard } from "./StatCard";
import { CheckCircle, Clock, DollarSign } from "lucide-react";

export const WorkerStatsGrid = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard 
        title="Total Submissions" 
        value={10} 
        description="Lifetime tasks submitted"
        icon={CheckCircle}
      />
      <StatCard 
        title="Pending Submissions" 
        value={20} 
        description="Awaiting buyer review"
        icon={Clock}
      />
      <StatCard 
        title="Total Earnings" 
        value={30} 
        description="Approved task revenue"
        icon={DollarSign}
      />
    </div>
  );
};