import UserProfile from "./UserProfile";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Medical Dashboard</h1>
      <Navigation />
      <UserProfile />
    </header>
  );
};

export default Header;
