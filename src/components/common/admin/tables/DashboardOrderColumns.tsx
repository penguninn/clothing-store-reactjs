import { ColumnDef } from "@tanstack/react-table";
import { OrderType } from "@types";
import { Badge } from "@ui/badge";

export const dashboardOrderColumns: ColumnDef<OrderType>[] = [
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <Badge variant="secondary">{status}</Badge>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      return <div className="text-sm">${(amount / 100).toFixed(2)}</div>;
    },
  },
];
