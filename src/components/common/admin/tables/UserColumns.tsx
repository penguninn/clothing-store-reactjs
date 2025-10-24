/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { ArrowUpDown, Eye, MoreHorizontal, Pencil, Power, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import type { UserType } from "@types";
import { Button } from "@ui/button";
import { Badge } from "@ui/badge";
import { Checkbox } from "@ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";
import EditUserDialog from "../EditUserDialog";

interface UserActionCellProps {
  user: UserType;
  onEdit: (user: UserType) => void;
  onDelete: (id: string) => void;
  onToggleStatus?: (id: string) => void;
  onView?: (id: string) => void;
}

const UserActionCell = ({
  user,
  onEdit,
  onDelete,
  onToggleStatus,
  onView,
}: UserActionCellProps) => {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onView?.(user.id)}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEditOpen(true)}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onToggleStatus?.(user.id)}>
            <Power className="mr-2 h-4 w-4" />
            {user.status === "active" ? "Disable" : "Enable"}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onDelete(user.id)}
            className="text-red-600"
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditUserDialog
        user={user}
        open={editOpen}
        onOpenChange={setEditOpen}
        onEditUser={onEdit}
      />
    </>
  );
};

export const userColumns = (
  onEdit: (user: UserType) => void,
  onDelete: (id: string) => void,
  onToggleStatus?: (id: string) => void,
  onView?: (id: string) => void
): ColumnDef<UserType>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const user = row.original;
      const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
      const avatarUrl = `/users/${user.id.split('_')[1]}.png`;

      return (
        <Avatar className="w-9 h-9">
          <AvatarImage src={avatarUrl} alt={`${user.firstName} ${user.lastName}`} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    id: "name",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="font-medium">
          {user.firstName} {user.lastName}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return (
        <Badge variant={role === "admin" ? "default" : "secondary"}>
          {role}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === "active" ? "default" : "destructive"}>
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <UserActionCell
        user={row.original}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleStatus={onToggleStatus}
        onView={onView}
      />
    ),
  },
];
