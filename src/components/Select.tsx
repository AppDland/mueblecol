interface SelectProps {
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    value: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, value }) => {
    return (
        <div className="flex items-center justify-center p-2 border border-gray-300 rounded w-52 mx-auto my-2">
            <select
                className="w-full p-2 rounded border border-gray-300"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
