import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router"; // Assuming you need to redirect
import useAuth from "@/hooks/useAuth";


export function LoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // 3. Handle Form Submission
  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      console.log("Logged in successfully");
      navigate("/"); // Redirect to home/dashboard
    } catch (error) {
      console.error("Login Error:", error.message);
      // You can trigger a toast notification here
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* 4. Wrap form with handleSubmit */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  // 5. Register Email
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pr-10"
                    // 6. Register Password
                    {...register("password", { 
                        required: "Password is required",
                        minLength: { value: 6, message: "Minimum 6 characters" }
                    })}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
                )}
              </Field>

              <Field>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Login"}
                </Button>
                
                <Button 
                  variant="outline" 
                  type="button" 
                  className="w-full mt-2" 
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle className="mr-2 h-4 w-4" /> Login with Google
                </Button>

                <FieldDescription className="text-center mt-4">
                  Don&apos;t have an account?{" "}
                  <Link to={"/register"} className="underline">Register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}