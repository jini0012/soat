export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  className?: string;
}
