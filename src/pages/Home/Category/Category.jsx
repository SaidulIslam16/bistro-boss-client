import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11.00am to 10.00pm'}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-12"
            >
                <SwiperSlide><img src={slide1} />
                    <h3 className='text-3xl uppercase -mt-12 text-center text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} />
                    <h3 className='text-3xl uppercase -mt-12 text-center text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} />
                    <h3 className='text-3xl uppercase -mt-12 text-center text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} />
                    <h3 className='text-3xl uppercase -mt-12 text-center text-white'>Desert</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} />
                    <h3 className='text-3xl uppercase -mt-12 text-center text-white'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;