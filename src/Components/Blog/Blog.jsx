import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handBookMarks, handelmin }) => {
  // console.log(blog);
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20  space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="gap-2 flex justify-center items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handBookMarks(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href={`#${hash}`}>#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handelmin(reading_time)}
        className="px-2 py-2 bg-red-500 text-white text-xl"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handBookMarks: PropTypes.func,
  handelmin: PropTypes.func,
};
export default Blog;
