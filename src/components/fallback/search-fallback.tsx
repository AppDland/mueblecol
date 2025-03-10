
const SearchFallback = () => {
    return (
        <div>
            <h1 className="skeleton h-10 w-40 place-self-center mb-4" />
            <div className="items-screen">
                <div className="items-screen-section-1">
                    <div className="h-64 w-4/5 max-w-96 md:w-60 lg:w-64 skeleton" />
                </div>
                <div className="items-screen-section-2 h-5 w-64 skeleton" />
                <div className="items-screen-section-3 skeleton" />
            </div>
        </div>
    );
};

export { SearchFallback };
