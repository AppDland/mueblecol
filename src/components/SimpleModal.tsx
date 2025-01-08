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

// Esta funcion estaba en el archivo src/components/ImageViewer.tsx

// interface ZoomImageProps {
//     selectedImage: string;
//     isModalOpen: boolean;
//     setIsModalOpen: (value: boolean) => void;
// }

// const ZoomImage = ({ isModalOpen, selectedImage, setIsModalOpen }: ZoomImageProps) => {
//     const [isZoomed, setIsZoomed] = useState(false);
//     const [dragStart, setDragStart] = useState<{ x: number, y: number } | null>(null);
//     const [dragOffset, setDragOffset] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

//     const handleZoomToggle = (e: React.MouseEvent) => {
//         e.stopPropagation();
//         setIsZoomed(!isZoomed);
//         setDragOffset({ x: 0, y: 0 });
//     };

//     const closeModal = () => {
//         setIsZoomed(false);
//         setDragOffset({ x: 0, y: 0 });
//         setIsModalOpen(false);
//     };

//     const handleMouseDown = (e: React.MouseEvent) => {
//         if (isZoomed) {
//             setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
//         }
//     };

//     const handleMouseMove = (e: React.MouseEvent) => {
//         if (dragStart) {
//             setDragOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
//         }
//     };

//     const handleMouseUp = () => {
//         setDragStart(null);
//     };

//     return (
//         <SimpleModal
//             isModalOpen={isModalOpen}
//             setIsModalOpen={setIsModalOpen}
//             onClose={closeModal}
//         >
//             <div
//                 className={`relative w-full h-96 overflow-hidden ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} border border-black`}
//                 onClick={handleZoomToggle}
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//             >
//                 <div
//                     className={`absolute inset-0 transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'} border border-black`}
//                     style={{
//                         transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)`
//                     }}
//                 >
//                     <Image
//                         src={selectedImage}
//                         alt="Imagen en detalle"
//                         fill
//                         className="object-contain"
//                         sizes="100vw"
//                     />
//                 </div>
//             </div>
//         </SimpleModal>
//     );
// }

export default SimpleModal;