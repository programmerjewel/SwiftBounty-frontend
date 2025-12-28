import { TaskCard } from "@/components/features/dashboard/worker/task-list/TaskCard";
import DashboardSectionHeader from "@/components/ui/dashboard-section-header";
import React from "react";

const DUMMY_TASKS = [
  {
    id: "7A1",
    task_title: "Instagram Post Like & Comment",
    buyer_name: "SocialBoost",
    completion_date: "2025-01-15",
    payable_amount: 15,
    required_workers: 50,
  },
  {
    id: "7A2",
    task_title: "App Testing & Feedback",
    buyer_name: "TechFlow Ltd",
    completion_date: "2025-01-10",
    payable_amount: 120,
    required_workers: 3,
  },
  {
    id: "7A3",
    task_title: "Logo Transparency Cleanup",
    buyer_name: "DesignHub",
    completion_date: "2025-01-12",
    payable_amount: 45,
    required_workers: 1,
  },
  {
    id: "7A4",
    task_title: "Completed Task (Should Not Show)",
    buyer_name: "GhostBuyer",
    completion_date: "2025-01-01",
    payable_amount: 10,
    required_workers: 0, // Logic will filter this out
  }
];

const TaskListPage = () => {
  // Filter: required_workers > 0
  const availableTasks = DUMMY_TASKS.filter(task => task.required_workers > 0);

  const handleViewDetails = (id) => {
    console.log("Navigating to task:", id);
    // window.location.href = `/task-details/${id}`;
  };

  return (
    <section>
     <DashboardSectionHeader title={'Available Tasks'} subtitle={`Showing ${availableTasks.length} opportunities for you to earn.`}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableTasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onViewDetails={handleViewDetails} 
          />
        ))}
      </div>
    </section>
  );
};

export default TaskListPage;