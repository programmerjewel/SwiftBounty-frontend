import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Loader, XCircle } from "lucide-react"; // Import Icons

const SubmissionRow = ({ submission }) => {
  const getStatusDetails = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return {
          label: "Approved",
          variant: "default",
          className: "bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/20 border-emerald-200",
          icon: <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
        };
      case 'pending':
        return {
          label: "Pending",
          variant: "outline",
          className: "bg-amber-500/15 text-amber-700 hover:bg-amber-500/20 border-amber-200",
          icon: <Loader className="w-3.5 h-3.5 mr-1" />
        };
      case 'rejected':
        return {
          label: "Rejected",
          variant: "destructive",
          className: "bg-destructive/15 text-destructive hover:bg-destructive/20 border-destructive/20",
          icon: <XCircle className="w-3.5 h-3.5 mr-1" />
        };
      default:
        return { label: status, variant: "secondary", icon: null };
    }
  };

  const { label, variant, className, icon } = getStatusDetails(submission.status);

  return (
    <TableRow>
      <TableCell className="font-medium">{submission.taskTitle}</TableCell>
      <TableCell>{submission.buyerName}</TableCell>
      <TableCell className="font-semibold text-primary">{submission.payableAmount}</TableCell>
      <TableCell className="text-muted-foreground">{submission.submissionDate}</TableCell>
      <TableCell>
        <Badge variant={variant} className={`flex w-fit items-center px-2 py-0.5 font-medium ${className}`}>
          {icon}
          {label}
        </Badge>
      </TableCell>
    </TableRow>
  );
};

export default SubmissionRow;