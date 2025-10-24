/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { ArrowUpDown, Copy, Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import type { OrderType } from "@types";
import { Button } from "@ui/button";
import { Badge } from "@ui/badge";
import { Checkbox } from "@ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";
import EditOrderDialog from "../EditOrderDialog";

interface OrderActionCellProps {
  order: OrderType;
  onEdit: (order: OrderType) => void;
  onDelete: (id: string) => void;
}

const OrderActionCell = ({ order, onEdit, onDelete }: OrderActionCellProps) => {
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
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(order._id);
            }}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Order ID
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("View order:", order._id)}>
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEditOpen(true)}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onDelete(order._id)}
            className="text-red-600"
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditOrderDialog
        order={order}
        open={editOpen}
        onOpenChange={setEditOpen}
        onEditOrder={onEdit}
      />
    </>
  );
};

export const orderColumns = (
  onEdit: (order: OrderType) => void,
  onDelete: (id: string) => void
): ColumnDef<OrderType>[] => [
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
    accessorKey: "_id",
    header: "Order ID",
    cell: ({ row }) => <div className="font-medium">#{row.getValue("_id")}</div>,
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
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      return <span>${(amount / 100).toFixed(2)}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === "success" ? "default" : "destructive"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;
      return new Date(date).toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <OrderActionCell order={row.original} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
