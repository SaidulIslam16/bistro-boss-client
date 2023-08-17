
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenus = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle
                subHeading="Popular Items"
                heading="From Our Menu"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-8 my-12'>
                {popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                ></MenuItem>)}
            </div>
            <div className='text-center mb-10'>
                <button className="btn btn-outline mt-5 border-0 border-b-4 text-black">Order Now</button>
            </div>
        </section>
    );
};

export default PopularMenus;