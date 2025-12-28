import { Package, Users, CreditCard } from "lucide-react";
import StatsGrid from "../../shared/StatsGrid";


const BuyerStats = ({data}) => {
  const buyerStats = [
    { 
      title: "Tasks Created", 
      value: data?.taskCount ?? 0, 
      description: "Total posts", 
      icon: Package 
    },
    { 
      title: "Pending Workers", 
      value: data?.pendingWorkers ?? 0, 
      description: "Remaining spots", 
      icon: Users 
    },
    { 
      title: "Total Paid", 
      value: `$${data?.paidAmount ?? 0}`, 
      description: "Total spend", 
      icon: CreditCard 
    },
  ];

  return (
      <StatsGrid stats={buyerStats} />
    );
};

export default BuyerStats;