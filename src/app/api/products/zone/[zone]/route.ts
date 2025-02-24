'use server';

import { ProductBaseProps } from '@/interfaces/item';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { zone: string } }
) {
    try {
        // Obtenemos los searchParams de la URL
        const { searchParams } = new URL(request.url);
        const limit = searchParams.get('limit') || '10';
        const page = searchParams.get('page') || '1';

        const response = await fetch(
            `${process.env.API_URL}/products/zone/${params.zone}?limit=${limit}&page=${page}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch zone data');
        }

        const data = await response.json();
        return NextResponse.json(data.data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Zone not found' }, { status: 404 });
    }
}