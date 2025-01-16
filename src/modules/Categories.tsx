import CategoryButton from '@/components/CategoryButton';
import Items from '../data/items.json';
import Carrousel from '@/components/Carrousel';

const Categories = () => {

    return (
        <div className="w-full my-4">
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
            <br />
            <p className='text-center max-w-80 sm:max-w-full place-self-center'>Encuentra el mueble ideal para cada zona de tu hogar</p>
        </div>
    )
}

export default Categories;