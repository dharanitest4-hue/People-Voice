export interface IssueReport {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  status: 'submitted' | 'acknowledged' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  resolvedAt?: string;
  assignedDept?: string;
  coordinates?: { lat: number; lng: number };
}

export interface MenuItem {
  label: string;
  path: string;
}

export interface CategoryData {
  name: string;
  icon: string;
  count: number;
  description: string;
}

export interface StateData {
  name: string;
  code: string;
  activeReports: number;
  coordinates: { lat: number; lng: number };
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}