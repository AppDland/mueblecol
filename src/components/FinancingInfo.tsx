import React from 'react';

interface FinancingInfoProps {
    title?: string;
    descrip?: string;
    valor?: number;
    cuotas?: number;
    moneyFormatter?: (value: number) => string;
}

const defaultMoneyFormatter = (value: number) => `$${value.toFixed(2)}`;

const FinancingInfo: React.FC<FinancingInfoProps> = ({ title, descrip, valor, cuotas, moneyFormatter = defaultMoneyFormatter }) => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-gray-600'>{title}</p>
            {valor ? (
                <p>{descrip} {cuotas} Cuotas de {moneyFormatter(valor)}</p>
            ) : (
                <p>{descrip} {cuotas} Cuotas</p>
            )}
        </div>
    );
};

export default FinancingInfo;