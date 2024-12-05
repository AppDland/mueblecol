import React from 'react';
import { FilterProps } from './types';

const RoomFilter: React.FC<FilterProps> = ({ currentFilters, onFilterChange }) => {
    const rooms = [
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
                {rooms.map(room => (
                    <label key={room.id} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={currentFilters.rooms?.includes(room.id) || false}
                            onChange={(e) => {
                                const updatedRooms = e.target.checked
                                    ? [...(currentFilters.rooms || []), room.id]
                                    : (currentFilters.rooms || []).filter(r => r !== room.id);
                                onFilterChange({
                                    ...currentFilters,
                                    rooms: updatedRooms
                                });
                            }}
                            className="mr-2"
                        />
                        {room.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RoomFilter; 