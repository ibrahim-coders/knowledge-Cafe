import profile from '../assets/images/profile.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 border-b-2 mx-8">
      <h2 className="text-2xl text-red">Knowledge Cafe</h2>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
