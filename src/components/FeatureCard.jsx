

const FeatureCard = ({ feature }) => {
    const { name, description, img } = feature;
    return (
        <div>
            <div className="max-w-xs border-2 bg-[#3A4D39] text-gray-100 shadow-lg rounded-lg overflow-hidden m-2">
                <img className="w-full bg-white h-48 object-cover object-center" src={img} alt={name} />
                <div className="p-4">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-gray-300 mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;