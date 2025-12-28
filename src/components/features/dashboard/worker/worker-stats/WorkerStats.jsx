import { CheckCircle, Clock, DollarSign } from "lucide-react";
import StatsGrid from "../../shared/StatsGrid";


const WorkerStats = ({ data }) => {
  const workerStats = [
    { 
      title: "Total Submissions", 
      value: data?.total || 0, 
      description: "Tasks submitted", 
      icon: CheckCircle 
    },
    { 
      title: "Pending", 
      value: data?.pending || 0, 
      description: "Awaiting review", 
      icon: Clock 
    },
    { 
      title: "Earnings", 
      value: `$${data?.earnings || 0}`, 
      description: "Revenue", 
      icon: DollarSign 
    },
  ];

  return <StatsGrid stats={workerStats} />;
};
export default WorkerStats;