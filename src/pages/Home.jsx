import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { toast } from "react-toastify";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getproducts = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-node4-five.vercel.app/categories"
  
      );
      if (data.message == "success") {
        setCategories(data.categories);
        toast("Get Categories successfully");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message || "Something Wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>My Categories</h1>

      <Swiper slidesPerView={3} spaceBetween={20}>
        {categories.map((category) => (
          <SwiperSlide key={category._id}>
            <div className="category-card">
              <img src={category.image.secure_url} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
