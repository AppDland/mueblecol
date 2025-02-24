import { getZones } from '@/services/zones.service';
import { Carrousel, CategoryCard } from '@/components';

export async function Categories({ showTitle = true }: { showTitle?: boolean }) {

    const zones = await getZones();

    if (!zones) return null;

    return (
        <section className='section bg-white'>
            {
                showTitle && (
                    <h2 className='h2'>Categorías</h2>
                )
            }
            <div className='px-2'>
                <Carrousel>
                    {
                        zones.map((cat, index) => (
                            <CategoryCard
                                key={index}
                                name={cat.name}
                                imagePath={cat.imageUrl}
                            />
                        ))
                    }
                </Carrousel>
            </div>
            <br />
            <p className='text-center text-sm sm:text-base px-20'>Encuentra el mueble ideal para cada zona de tu hogar</p>
        </section>
    )
}