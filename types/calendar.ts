export type TaskItem = {
  id: string;
  text: string;
  completed: boolean;
  time?: string; // Optional time in format "5:30" or "5,30"
};

export type DayData = {
  tasks: TaskItem[];
  timeSpent?: string; // Total time spent for the day
};

export type LongTermTask = {
  id: string;
  text: string;
  completed: boolean;
};

export type ShoppingItem = {
  id: string;
  text: string;
  completed: boolean;
};

export type CalendarData = {
  days: Record<string, DayData>; // Key format: "YYYY-MM-DD"
  longTermTasks: LongTermTask[];
  shoppingList: ShoppingItem[];
  lastView: 'year' | 'month' | 'week' | 'day';
  currentDate: string; // Format: "YYYY-MM-DD"
};

export type CalendarView = 'year' | 'month' | 'week' | 'day';