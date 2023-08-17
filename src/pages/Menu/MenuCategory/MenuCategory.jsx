import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = () => {
    return (
        <section>
            <div className='grid md:grid-cols-2 gap-8 my-12'>
                {menu.map(item => <MenuItem
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

export default MenuCategory;