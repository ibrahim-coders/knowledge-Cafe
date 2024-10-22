import PropTypes from 'prop-types';
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <p className="m-2 p-2 bg-gray-100 text-xl font-semibold">{title}</p>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
