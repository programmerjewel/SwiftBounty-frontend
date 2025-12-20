import { useState, useRef, useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router";
import { Image as ImageIcon, X } from "lucide-react"; // Icons for the preview

export function SignupForm({ ...props }) {
  const [profilePic, setProfilePic] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [role, setRole] = useState("");
  const fileInputRef = useRef(null);

  // 1. Cleanup: Revoke the object URL whenever the file changes or component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Optional: Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File is too large. Max 5MB.");
        return;
      }

      setProfilePic(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRemoveImage = () => {
    setProfilePic(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input value
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            {/* Full Name */}
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </Field>

            {/* Profile Picture with Preview */}
            <Field>
              <FieldLabel>Profile Picture</FieldLabel>
              <div className="flex items-center gap-5 mt-2">
                {/* Image Preview Box */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted overflow-visible">
                  {previewUrl ? (
                    <>
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="h-full w-full rounded-lg object-cover"
                      />
                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-white shadow-sm hover:bg-destructive/90 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </>
                  ) : (
                    <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="profile-picture"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleUploadClick}
                  >
                    {profilePic ? "Change Photo" : "Upload Photo"}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    {profilePic ? profilePic.name : "No file selected"}
                  </p>
                </div>
              </div>
              <FieldDescription>
                Upload a profile picture (JPEG, PNG, max 5MB).
              </FieldDescription>
            </Field>

            {/* Role */}
            <Field>
              <FieldLabel htmlFor="role">Role</FieldLabel>
              <Select name="role" value={role} onValueChange={setRole} required>
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="worker">Worker</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                </SelectContent>
              </Select>
              <FieldDescription>
                Choose whether you want to complete tasks or post them.
              </FieldDescription>
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
            </Field>

            {/* Confirm Password */}
            <Field>
              <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
              <Input id="confirm-password" type="password" required />
            </Field>

            {/* Submit & Links */}
            <FieldGroup className="pt-2">
              <Button type="submit" className="w-full">
                Create Account
              </Button>
              <Button variant="outline" type="button" className="w-full mt-3">
                Sign up with Google
              </Button>
              <FieldDescription className="px-6 text-center mt-4">
                Already have an account?{" "}
                <Link to={"/login"} className="underline">
                  Log in
                </Link>
              </FieldDescription>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}