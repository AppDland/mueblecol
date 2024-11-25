interface InputProps {
    placeholder?: string;
    value: number | undefined;
    onChange: (value: number | undefined) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

const InputNumber: React.FC<InputProps> = ({ placeholder, value, onChange, onBlur, onFocus }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = parseFloat(event.target.value);
        if (!isNaN(numericValue)) {
            onChange(numericValue);
        } else {
            onChange(undefined)
        }
    };

    return (
        <input
            type='number'
            placeholder={placeholder}
            value={value ? value : ''}
            onChange={handleChange}
            className="input"
            inputMode="numeric"
            pattern="[0-9]*"
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default InputNumber;