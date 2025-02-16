export interface EnrollFormData {
  type: string;
  title: string;
  category: string;
  bookingStartDate: string;
  location: string;
  poster: File | null;
}

export interface EnrollPosterProps {
  onPosterChange: (value: File | null) => void;
}

export interface EnrollFormItemsProps extends Omit<EnrollFormData, "poster"> {
  onChange: (field: keyof EnrollFormData, value: string) => void;
}

export interface EnrollModalProps extends Pick<EnrollFormData, "title"> {
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
