import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
// Cover images
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className='mb-10'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                title='Our Menu' subTitle="Would you like to Try A Dish" img={menuImg}></Cover>
            <SectionTitle
                heading="Today's Offer"
                subHeading="Don't Miss"
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory
                title='Dessert' coverImg={dessertImg} subTitle='Lorem Ipsum has been the industry’s standard.'
                items={desserts}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                title='Pizza' coverImg={pizzaImg} subTitle='Lorem Ipsum has been the industry’s standard.'
                items={pizza}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                title='Salad' coverImg={saladImg} subTitle='Lorem Ipsum has been the industry’s standard.'
                items={salad}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
                title='Soup' coverImg={soupImg} subTitle='Lorem Ipsum has been the industry’s standard.'
                items={soup}
            ></MenuCategory>
        </div>
    );
};

export default Menu;