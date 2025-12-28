
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { Calendar, User, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  return (
    <Card data-slot="card" className="@container/card flex flex-col justify-between h-full">
      <CardHeader>
        <CardTitle className="text-xl line-clamp-1">{task.task_title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <User className="size-3" />
          <span>{task.buyer_name}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" />
            <span>Deadline: {task.completion_date}</span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
              Payable
            </span>
            <div className="flex items-center gap-1 text-lg font-bold text-emerald-600">
              <DollarSign className="size-4" />
              {task.payable_amount}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
              Vacancies
            </span>
            <div className="flex items-center gap-1 font-semibold text-orange-600">
              <Users className="size-4" />
              {task.required_workers}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => navigate(`/task/${task._id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    task_title: PropTypes.string.isRequired,
    buyer_name: PropTypes.string.isRequired,
    completion_date: PropTypes.string.isRequired,
    payable_amount: PropTypes.number.isRequired,
    required_workers: PropTypes.number.isRequired,
  }).isRequired,
};