export interface ModalProps {
    id: string;
    label: string;
    title: string;
    body: React.ReactNode;
    handleAction: any;
    isOpen: boolean;
    actionLabel?: string;
}