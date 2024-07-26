import { Calendar, CalendarDays, Grid2X2, Inbox } from "lucide-react";

export const primaryNavItems = [
  {
    id: "primary",
    name: "Inbox",
    link: "/login",
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    name: "Today",
    link: "/login/today",
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    name: "Upcoming",
    link: "/login/upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "filters",
    name: "Filters & Labels",
    link: "/login/filter-labels",
    icon: <Grid2X2 className="w-4 h-4" />,
  },
];

export const GET_STARTED_PROJECT_ID = "k97fs8npdxzkr39y5vjcp9kq1d6tycm1";