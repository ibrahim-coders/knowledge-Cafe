import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  console.log(blog);
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
        <div>
          <span>{reading_time} min read</span>
          <button className="ml-2 text-2xl text-red-600"></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, inx) => (
          <span key={inx}>
            <a href={`#${hash}`}>#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
