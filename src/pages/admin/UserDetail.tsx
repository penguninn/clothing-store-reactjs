import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { mockUsers } from "@constants/mock/users";
import type { UserType } from "@types";
import { Badge } from "@ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@ui/hover-card";
import { Progress } from "@ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Avatar, AvatarFallback } from "@ui/avatar";
import AppLineChart from "@common/admin/charts/AppLineChart";
import { Button } from "@ui/button";
import { Sheet, SheetTrigger } from "@ui/sheet";
import EditUser from "@common/admin/forms/EditUser";

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    // Find user by ID from mock data
    const foundUser = mockUsers.find((u) => u.id === id);
    setUser(foundUser || null);
  }, [id]);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-gray-500">User not found!</p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/admin">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/admin/users">Users</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {user.firstName} {user.lastName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* USER BADGES CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              {user.role === "admin" && (
                <HoverCard>
                  <HoverCardTrigger>
                    <Shield
                      size={36}
                      className="rounded-full bg-green-800/30 border border-green-800/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Admin</h1>
                    <p className="text-sm text-muted-foreground">
                      Admin users have access to all features and can manage users.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              )}
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* USER CARD CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarFallback>
                  {user.firstName?.[0]}{user.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              voluptas distinctio ab ipsa commodi fugiat labore quos veritatis
              cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam
              in, quis quia.
            </p>
          </div>

          {/* INFORMATION CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser
                  defaultValues={{
                    fullName: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    phone: "+1 234 5678",
                    address: "123 Main St",
                    city: "New York",
                  }}
                />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Full name:</span>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                  {user.role}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Status:</span>
                <Badge
                  variant={user.status === "active" ? "default" : "destructive"}
                >
                  {user.status}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on {new Date(user.createdAt).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* CHART CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Activity</h1>
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
