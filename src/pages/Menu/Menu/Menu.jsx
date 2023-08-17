import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div className='mb-10'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                title='Our Menu' subTitle="Would you like to Try A Dish" img={img}
            ></Cover>
        </div>
    );
};

export default Menu;