import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import { DataTable } from "@common/admin/tables/DataTable";
import { userColumns } from "@common/admin/tables/UserColumns";
import { mockUsers } from "@constants/mock/users";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/select";
import AddUserDialog from "@common/admin/AddUserDialog";
import type { UserType } from "@types";

const UsersPage = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState<UserType[]>(mockUsers);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const handleAddUser = (newUser: Omit<UserType, "id" | "createdAt">) => {
    const user: UserType = {
      ...newUser,
      id: `user_${Date.now()}`,
      createdAt: new Date(),
    };
    setTableData([user, ...tableData]);
    setIsAddDialogOpen(false);
  };

  const handleEditUser = (updatedUser: UserType) => {
    setTableData(tableData.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
  };

  const handleDeleteUser = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setTableData(tableData.filter((u) => u.id !== id));
    }
  };

  const handleToggleStatus = (id: string) => {
    setTableData(
      tableData.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "active" ? "inactive" : "active" }
          : u
      )
    );
  };

  const handleViewUser = (id: string) => {
    navigate(`/admin/users/${id}`);
  };

  // Filtering & Search
  const filteredUsers = tableData.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

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

      {/* Search & Filter */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={userColumns(handleEditUser, handleDeleteUser, handleToggleStatus, handleViewUser)}
        data={filteredUsers}
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
