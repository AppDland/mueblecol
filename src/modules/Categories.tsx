import CategoryButton from '@/components/CategoryButton';
import categories from '../data/categories.json';
const Categories = () => {

    return (
        <div className="w-full my-16">
            <p className='text-center'>Encuentra el mueble ideal para cada zona de tu hogar</p>
            <div className="flex flex-wrap md:flex-nowrap justify-center my-10">
                {
                    categories.map((cat, index) => (
                        <CategoryButton
                            key={index}
                            imageUrl={cat.imageUrl}
                            category={cat}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Categories;