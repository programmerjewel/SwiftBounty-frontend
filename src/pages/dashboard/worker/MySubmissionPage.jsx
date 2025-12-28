import SubmissionRow from "@/components/features/dashboard/worker/submission/SubmissionRow";
import DashboardSectionHeader from "@/components/ui/dashboard-section-header";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const submissions = [
    {
      id: "1",
      taskTitle: "Social Media Engagement",
      payableAmount: "$0.50",
      buyerName: "John Doe",
      submissionDate: "2023-10-25",
      status: "Pending",
    },
    {
      id: "2",
      taskTitle: "App Review & Download",
      payableAmount: "$2.00",
      buyerName: "Sarah Smith",
      submissionDate: "2023-10-24",
      status: "Approved",
    },
    {
      id: "3",
      taskTitle: "YouTube Channel Subscription",
      payableAmount: "$0.20",
      buyerName: "Tech Corp",
      submissionDate: "2023-10-23",
      status: "Rejected",
    },
    {
      id: "4",
      taskTitle: "Website UI Feedback",
      payableAmount: "$5.00",
      buyerName: "Design Lab",
      submissionDate: "2023-10-22",
      status: "Approved",
    },
  ];

const MySubmissionPage = () => {
  return (
    <section>
      <DashboardSectionHeader title={'My Submissions'} subtitle={'Manage and track the status of your submitted tasks.'}/>
      <div className="border rounded-md overflow-hidden">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task Title</TableHead>
          <TableHead>Payable Amount</TableHead>
          <TableHead>Buyer Name</TableHead>
          <TableHead>Submission Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
            {submissions.map((sub) => (
              <SubmissionRow key={sub.id} submission={sub} />
            ))}
          </TableBody>
    </Table>
    </div>
    </section>
    
  );
};

export default MySubmissionPage;






