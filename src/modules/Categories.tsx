import CategoryButton from '@/components/CategoryButton';
import Items from '../data/items.json';
import Carrousel from '@/components/Carrousel';
import Title from '@/components/Title';
import Section from '@/components/Section';

const Categories = () => {

    return (
        <Section className='bg-white'>
            <Title>Categorías</Title>
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
            <p className='text-center max-w-80 sm:max-w-full place-self-center text-sm sm:text-base'>Encuentra el mueble ideal para cada zona de tu hogar</p>
        </Section>
    )
}

export default Categories;