import React from 'react';
import { FilterProps } from '../../interfaces/filter';

const RoomFilter: React.FC<FilterProps> = ({ currentFilters, onFilterChange }) => {
    const zones = [
        { id: 'sala', label: 'Sala' },
        { id: 'cocina', label: 'Cocina' },
        { id: 'dormitorio', label: 'Dormitorio' },
        { id: 'banio', label: 'Baño' },
        { id: 'comedor', label: 'Comedor' },
        { id: 'oficina', label: 'Oficina' }
    ];

    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">Ubicación</h3>
            <div className="flex flex-col gap-2">
                {zones.map(zone => (
                    <label key={zone.id} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={currentFilters.zones?.includes(zone.id) || false}
                            onChange={(e) => {
                                const updatedZones = e.target.checked
                                    ? [...(currentFilters.zones || []), zone.id]
                                    : (currentFilters.zones || []).filter((z: string) => z !== zone.id);
                                onFilterChange({
                                    ...currentFilters,
                                    zones: updatedZones
                                });
                            }}
                            className="mr-2"
                        />
                        {zone.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RoomFilter; 