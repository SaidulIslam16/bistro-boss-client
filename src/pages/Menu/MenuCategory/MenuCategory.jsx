import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, subTitle, coverImg }) => {
    return (
        <section>
            {title && <Cover
                title={title} subTitle={subTitle} img={coverImg}></Cover>}
            <div className='grid md:grid-cols-2 gap-8 my-16'>
                {items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                ></MenuItem>)}
            </div>
            <div className='text-center mb-10'>
                <button className="btn btn-outline border-0 border-b-4 text-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default MenuCategory;