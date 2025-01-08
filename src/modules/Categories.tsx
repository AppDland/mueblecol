import CategoryButton from '@/components/CategoryButton';
import Items from '../data/items.json';

const Categories = () => {

    return (
        <div className="w-full my-16">
            <div className="flex flex-wrap md:flex-nowrap justify-center my-10">
                {
                    Items.zones.map((cat, index) => (
                        <CategoryButton
                            key={index}
                            name={cat.name}
                        />
                    ))
                }
            </div>
            <p className='text-center max-w-80 sm:max-w-full place-self-center '>Encuentra el mueble ideal para cada zona de tu hogar</p>
        </div>
    )
}

export default Categories;