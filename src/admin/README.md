# Admin Dashboard - React 19 + shadcn/ui

Admin dashboard converted from Next.js to React 19 with shadcn/ui components.

## 🚀 Features

- ✅ Dashboard with charts (Bar, Pie, Area)
- ✅ Products management with data table
- ✅ Orders management
- ✅ Sidebar navigation (collapsible)
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ shadcn/ui components
- ✅ Recharts for data visualization
- ✅ Tanstack Table for data tables

## 📦 Tech Stack

- **React 19** - Latest React version
- **TypeScript** - Type safety
- **React Router v7** - Routing
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **Recharts** - Charts
- **Tanstack Table** - Data tables
- **next-themes** - Theme management
- **Vite** - Build tool

## 🏗️ Project Structure

```
admin/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (25 files)
│   │   ├── charts/          # Chart components
│   │   ├── tables/          # Table components
│   │   ├── AppSidebar.tsx
│   │   ├── Navbar.tsx
│   │   ├── CardList.tsx
│   │   ├── TodoList.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Products.tsx
│   │   └── Orders.tsx
│   ├── data/
│   │   └── mockData.ts      # Mock data for demo
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── hooks/
│   │   └── use-mobile.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

## 🎯 Getting Started

### 1. Install Dependencies

```bash
cd admin
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The admin dashboard will be available at **http://localhost:9000**

### 3. Build for Production

```bash
npm run build
```

## 📄 Available Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Overview with charts and stats |
| `/products` | Products | Product management with data table |
| `/orders` | Orders | Order management |

## 🎨 shadcn/ui Components Included

The following shadcn/ui components are pre-installed:

- Avatar
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Chart
- Checkbox
- Collapsible
- Dropdown Menu
- Form
- Hover Card
- Input
- Label
- Popover
- Progress
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Table
- Textarea
- Tooltip

## 📊 Charts

All charts use Recharts library:

- **AppBarChart** - Bar chart for revenue
- **AppPieChart** - Pie chart for order status
- **AppAreaChart** - Area chart for revenue trend

## 🗂️ Data Tables

Data tables use Tanstack Table with features:

- Sorting
- Pagination
- Row selection
- Custom columns

## 🌙 Theme

Dark/Light theme toggle in Navbar using `next-themes`.

## 🔄 Mock Data

Mock data is provided in `src/data/mockData.ts`:

- 5 Products
- 5 Orders
- 4 Users
- 6 months of chart data
- 5 Categories

## 🚧 TODO - Features to Implement

- [ ] User management page
- [ ] Form components (Add Product, Add Order, etc.)
- [ ] API integration (replace mock data)
- [ ] Authentication
- [ ] File upload for product images
- [ ] Advanced filtering for tables
- [ ] Export data functionality
- [ ] Real-time notifications

## 📝 Notes

- Port: **9000**
- All authentication logic removed (can add later)
- All API calls replaced with mock data
- Optimized for demo and development

## 🎯 Next Steps

1. **Connect to API**: Replace mock data with real API calls
2. **Add Forms**: Implement Add/Edit forms for Products, Orders, Users
3. **Authentication**: Add protected routes
4. **User Management**: Create user management page
5. **Advanced Features**: Search, filters, exports, etc.

---

**Built with React 19 + shadcn/ui**
