import CategoryButton from '@/components/CategoryButton';
import Items from '../../data/items.json';
import Carrousel from '@/components/Carrousel';
import Section from '@/components/Section';

export function Categories({ showTitle = true }: { showTitle?: boolean }) {

    return (
        <Section className='bg-white'>
            {
                showTitle && (
                    <h2 className='h2'>Categorías</h2>
                )
            }
            <Carrousel>
                {
                    Items.zones.map((cat, index) => (
                        <CategoryButton
                            key={index}
                            name={cat.name}
                            imagePath={cat.image}
                        />
                    ))
                }
            </Carrousel>
            <br />
            <p className='text-center text-sm sm:text-base px-20'>Encuentra el mueble ideal para cada zona de tu hogar</p>
        </Section>
    )
}