export interface ConfirmDetail {
  confirmText?: string;
  rejectText?: string;
  link: string;
  message?: string;
  confirmAction: () => void;

}
