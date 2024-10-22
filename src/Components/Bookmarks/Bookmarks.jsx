import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, setTime }) => {
  return (
    <div className="md-1/3">
      <h2>Spent time on read :{setTime} min</h2>
      <h2 className="text-2xl font-bold p-4">
        Bookarks Bolgs: {bookmarks.length}
      </h2>
      {bookmarks.map(bookmark => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array,
  setTime: PropTypes.number,
};

export default Bookmarks;
