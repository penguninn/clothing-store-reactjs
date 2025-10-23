import { useState } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "../components/tables/DataTable";
import { userColumns } from "../components/tables/UserColumns";
import { mockUsers } from "../data/mockData";
import { Button } from "../components/ui/button";
import AddUserDialog from "../components/AddUserDialog";
import type { UserType } from "../types";

const UsersPage = () => {
  const [usersData, setUsersData] = useState<UserType[]>(mockUsers);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddUser = (newUser: Omit<UserType, "id" | "createdAt">) => {
    const user: UserType = {
      ...newUser,
      id: `user_${Date.now()}`,
      createdAt: new Date(),
    };
    setUsersData([user, ...usersData]);
    setIsAddDialogOpen(false);
  };

  const handleEditUser = (updatedUser: UserType) => {
    setUsersData(usersData.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
  };

  const handleDeleteUser = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsersData(usersData.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p className="text-sm text-muted-foreground">
            Manage all users in your system
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <DataTable
        columns={userColumns(handleEditUser, handleDeleteUser)}
        data={usersData}
      />

      <AddUserDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddUser={handleAddUser}
      />
    </div>
  );
};

export default UsersPage;
