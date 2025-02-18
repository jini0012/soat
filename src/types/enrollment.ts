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
}

export interface EnrollModalProps extends Pick<EnrollFormFields, "title"> {
  onClose: () => void;
  onConfirm: (time: string, casting: string[]) => void;
  selectedDate: string;
}

export interface EnrollCalendarProps {
  openModal: () => void;
  setSelectedDate: (date: string) => void;
}

export type CalendarValuePiece = Date | null;
export type CalendarValue =
  | CalendarValuePiece
  | [CalendarValuePiece, CalendarValuePiece];
