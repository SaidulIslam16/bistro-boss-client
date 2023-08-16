
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { data } from 'autoprefixer';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenus = () => {

    const [menu, setMenut] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const popular = data.filter(item => item.category === "popular")
                setMenut(popular);
            })
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading="Popular Items"
                heading="From Our Menu"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-8 my-12'>
                {menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                ></MenuItem>)}
            </div>
        </section>
    );
};

export default PopularMenus;