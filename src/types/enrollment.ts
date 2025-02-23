export interface Performance {
  time: string;
  casting: string[];
}

export interface DailyPerformances {
  [date: string]: Performance[];
}

export interface EnrollFormFields {
  type: string;
  title: string;
  category: string;
  bookingStartDate: string;
  location: string;
}

export interface EnrollFormData extends EnrollFormFields {
  poster: File | null;
  performances: DailyPerformances;
}

export interface EnrollPosterProps {
  onPosterChange: (value: File | null) => void;
}

export interface EnrollFormItemsProps extends EnrollFormFields {
  onChange: (field: keyof EnrollFormFields, value: string) => void;
  handleOnClickType: (type: string) => void;
}

export interface EnrollModalProps {
  onClose: () => void;
  onConfirm: (dates: string[], time: string, casting: string[]) => void;
  selectedDates: CalendarValue;
}

export interface PerformanceInfoProps {
  date: Date;
  performances: Performance[];
}
export type CalendarValuePiece = Date | null;
export type CalendarValue =
  | CalendarValuePiece
  | [CalendarValuePiece, CalendarValuePiece];
