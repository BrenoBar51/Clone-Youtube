import ActionBtns from "../atoms/ActionBtns";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";

export default function Header() {
  return (
    <header className="flex h-fit">
      <nav className="pl-20">
        <div className="flex pt-2">
          <Logo />
          <SearchBar />
          <ActionBtns />
        </div>
      </nav>
    </header>
  );
}