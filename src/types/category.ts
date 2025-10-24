import type { ReactNode } from "react";

export interface CategoryType {
  name: string;
  slug: string;
  icon: ReactNode;
}

export interface AdminCategoryType {
  id: number;
  name: string;
  slug: string;
}
