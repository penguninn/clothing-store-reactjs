export interface UserType {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "user";
  createdAt: Date;
  status: "active" | "inactive";
}
