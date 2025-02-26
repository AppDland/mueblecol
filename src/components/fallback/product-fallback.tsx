
const ProductFallback = () => {
    return (
        <section className='section'>
            <div className="grid grid-cols-5 gap-4 md:px-8 place-self-center w-full max-w-7xl">
                <div className="col-span-5 md:col-span-3 grid gap-4 h-[400px] md:h-[600px]">
                    <div className="h-full md:h-[480px] skeleton" />
                    <div className="h-1/5 grid-cols-4 gap-4 hidden md:grid">
                        <div className="h-32 skeleton" />
                        <div className="h-32 skeleton" />
                        <div className="h-32 skeleton" />
                        <div className="h-32 skeleton" />
                    </div>
                </div>
                <div className="col-span-5 md:col-span-2">
                    <div className="w-full h-10 skeleton" />
                </div>
            </div>
        </section>
    );
};

export { ProductFallback };
