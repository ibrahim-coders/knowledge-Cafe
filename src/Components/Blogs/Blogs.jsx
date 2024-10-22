import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({ handBookMarks, handelmin }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h2 className="text-4xl">Blogs: {blogs.length}</h2>
      {blogs.map(blog => (
        <Blog
          key={blog}
          blog={blog}
          handBookMarks={handBookMarks}
          handelmin={handelmin}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handBookMarks: PropTypes.func,
  handelmin: PropTypes.func,
};
export default Blogs;
