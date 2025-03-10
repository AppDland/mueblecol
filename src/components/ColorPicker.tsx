import { ItemMedia } from '@/interfaces/product';

interface ColorPickerProps {
    colors: ItemMedia[];
    onColorSelect: (color: ItemMedia) => void;
    selectedColor?: ItemMedia;
    className?: string;
    layout?: 'horizontal' | 'vertical';
}

const ColorPicker: React.FC<ColorPickerProps> = ({
    colors,
    onColorSelect,
    selectedColor,
    className = '',
    layout = 'horizontal'
}) => {
    return (
        <div className={`flex flex-wrap ${layout === 'vertical' ? 'flex-col' : ''} gap-2 ${className}`}>
            {/* {colors.map((color) => (
                <label 
                    key={color.id} 
                    className={`flex items-center cursor-pointer ${
                        layout === 'vertical' ? 'w-full' : ''
                    }`}
                >
                    <input
                        type="radio"
                        checked={selectedColor?.id === color.id}
                        onChange={() => onColorSelect(color)}
                        className="sr-only"
                    />
                    <span 
                        className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                            selectedColor?.id === color.id 
                                ? 'border-primary' 
                                : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.colorHex }}
                    />
                    <span className="ml-2">{color.colorName}</span>
                </label>
            ))} */}
        </div>
    );
};

export default ColorPicker;