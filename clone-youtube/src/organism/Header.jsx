import ActionBtns from "../atoms/ActionBtns";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import SideBar from "../atoms/sidebar";

export default function Header() {
  return (
    <header className="flex sticky">
      <nav>
        <SideBar />
      </nav>
      <nav>
        <div className="flex pt-2">
          <Logo />
          <SearchBar />
          <ActionBtns />
        </div>
      </nav>
    </header>
  );
}