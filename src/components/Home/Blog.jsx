import { FaUser } from "react-icons/fa";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
const blogs = [
  {
    title: "Indian Ecommerce Funding Drops 42% YoY To $1.5 Bn",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog1,
  },
  {
    title: "MediaMarket launches marketplace in Belgium, Poland, and Turkey",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog2,
  },
  {
    title: "Costco beats on earnings as e-commerce sales jump",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog3,
  },
  {
    title: "IAC exploring spinoff home improvement marketplace Angi",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog2,
  },
];
const Blog = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-left">
          Blogs
        </h2>
        <p className="text-[#555151] text-base text-left mt-3">
          From building your first website and registering your domain to
          setting up a professional email address,
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <div className="flex items-center justify-between">
                <span className="bg-[#FCE5CF] text-[#F58A25] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {blog.category}
                </span>
                <p className="text-black text-xs font-medium">{blog.date}</p>
              </div>

              <h3 className="text-md font-semibold text-gray-900 mt-4 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-xs text-[#00000066] my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <div className="flex items-center mt-3 gap-2">
                <div className="w-9 h-9 rounded-full bg-gray-500 flex justify-center items-center">
                  <FaUser color="white" />
                </div>
                <p className="text-xs text-black font-semibold">
                  {blog.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
