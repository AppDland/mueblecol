import CategoryButton from '@/components/CategoryButton';
import categories from '../data/categories.json';
const Categories = () => {

    return (
        <div className="overflow-x-auto max-h-96 w-full scrollbar-hide my-16">
            <p className='text-center'>Encuentra el mueble ideal para cada zona de tu hogar</p>
            <div className="flex flex-nowrap justify-center my-10">
                {categories.map((cat, index) => (
                    <CategoryButton
                        key={index}
                        imageUrl={cat.imageUrl}
                        category={cat}
                    />
                ))}
            </div>
        </div>
    )
}

export default Categories;