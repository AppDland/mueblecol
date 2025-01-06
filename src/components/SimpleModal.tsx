interface SimpleModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    children: React.ReactNode;
    onClose?: () => void;
}
const SimpleModal = ({ isModalOpen, setIsModalOpen, children, onClose }: SimpleModalProps) => {

    const closeModal = () => {
        setIsModalOpen(false);
        if (onClose) onClose();
    };

    return (
        isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        )

    )
}

export default SimpleModal;