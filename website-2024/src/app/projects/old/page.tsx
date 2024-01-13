import { redirect } from "next/navigation";

// If someone navigates to /projects/old, just go to /projects
export default function Page() {
  redirect("/projects");
}
