import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { useNavigate, useRouteError } from "react-router";


const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
   <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-3">
          <div className="flex justify-center">
            <AlertCircle className="h-16 w-16 text-destructive" />
          </div>
          <CardTitle className="text-2xl">
            {error?.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}
          </CardTitle>
          <CardDescription>
            {error?.status === 404 
              ? "The page you're looking for doesn't exist" 
              : error?.message || 'An unexpected error occurred'}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex gap-3 justify-center">
          <Button onClick={() => navigate('/')}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button onClick={() => navigate(-1)} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default ErrorPage;