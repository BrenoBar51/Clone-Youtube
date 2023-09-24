import ActionBtns from "../atoms/ActionBtns";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import SideBar from "../atoms/sidebar";

export default function Header() {
  return (
    <header>
      <div className="pt-2">
        <SideBar />
        <Logo />
        <SearchBar />
        <ActionBtns />
      </div>
    </header>
  );
}