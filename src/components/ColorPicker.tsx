import { ItemMedia } from '@/interfaces/item';

interface ColorPickerProps {
    colors: ItemMedia[];
    onColorSelect: (color: ItemMedia) => void;
    selectedColor?: ItemMedia;
    className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ 
    colors, 
    onColorSelect, 
    selectedColor,
    className = ''
}) => {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {colors.map((color) => (
                <label key={color.id} className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        checked={selectedColor?.id === color.id}
                        onChange={() => onColorSelect(color)}
                        className="sr-only"
                    />
                    <span 
                        className={`w-6 h-6 rounded-full border-2 ${
                            selectedColor?.id === color.id 
                                ? 'border-primary' 
                                : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.colorHex }}
                    />
                    <span className="ml-2">{color.colorName}</span>
                </label>
            ))}
        </div>
    );
};

export default ColorPicker;