
interface AmountSelectorProps {
    value: number;
    onChange: (value: number) => void;
}

const AmountSelector: React.FC<AmountSelectorProps> = ({ value, onChange }) => {
    const increment = () => {
        if (value < 100) {
            onChange(value + 1);
        }
    };

    const decrement = () => {
        if (value > 0) {
            onChange(value - 1);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={decrement}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
            >
                &lt;
            </button>
            <span className="text-xl">{value}</span>
            <button
                onClick={increment}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
            >
                &gt;
            </button>
        </div>
    );
};

export default AmountSelector;