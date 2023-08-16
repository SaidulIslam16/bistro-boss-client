

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-4/12 pt-12 mx-auto">
            <p className="text-yellow-600 py-2">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;