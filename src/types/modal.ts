export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  containerId?: string;
  className?: string;
}
