import Items from '../../data/items.json';
import { Carrousel, CategoryCard } from '@/components';

export function Categories({ showTitle = true }: { showTitle?: boolean }) {

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
                        Items.zones.map((cat, index) => (
                            <CategoryCard
                                key={index}
                                name={cat.name}
                                imagePath={cat.image}
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