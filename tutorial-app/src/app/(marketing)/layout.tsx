import { ReactNode } from "react";
import NavBar from "./_components/NavBar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    /*
    Notes: the selection changes the select hover color on the element
    */
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <NavBar />
      {children}
    </div>
  );
}
