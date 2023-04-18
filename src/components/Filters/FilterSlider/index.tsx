
const FilterSlider = () => {

    const sorting = [
        { name: 'Price: Low to High', icon: 'price_asc' },
        { name: 'Price: High to Low', icon: 'price_desc' },
        { name: 'Newest', icon: 'newest' },
        { name: 'Oldest', icon: 'oldest' },
    ]

    return (
        <div className="sm:mx-6 md:mx-10 lg:mx-12">
            <div>
                {sorting.map((obg) => (
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                            <div className="w-4 h-4 mr-2">
                                <img src={`/images/${obg.icon}.svg`} alt="" />
                            </div>
                            <div className="text-[15px] font-gilroyLt">
                                {obg.name}
                            </div>
                        </div>
                        <div className="w-4 h-4">
                            <img src="/images/arrow.svg" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { FilterSlider }