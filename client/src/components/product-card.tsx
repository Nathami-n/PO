
interface IProductCardProps {
    price: number,
    name: string,
    image_url: string,
    category: string
}
export const ProductCard: React.FC<IProductCardProps> = ({
    price,
    name,
    category,
    image_url

}) => {
    return (
        <div className="bg-white">
            <div className="flex items-center">
                
                <div className="flex flex-col justify-center">
                    <div><img src={image_url} alt={name}/></div>
                    <p className="text-lg font-bold">${price}<span>/bottle</span></p>
                </div>
                {/* description */}
                <div>
                    <p>{name}</p>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in quia iusto soluta. Nihil voluptates ipsam nemo error! Quae, voluptatem.</div>

                    <div className="flex items-center">
                    <div className="flex flex-col">
                        <p>title</p>
                        <p>60ml</p>
                    </div>
                    <div className="flex flex-col">
                        <p>number</p>
                        <p>12 available</p>
                    </div>
                    </div>
                    {/* counter */}
                    <div>counter here</div>
                </div>
            </div>
        </div>
    )
}