import Image from "next/image";
import logo from "./public/logo.svg"
import Link from "next/link";

export default function Index() {
  return (
    <div>
      <nav>
        {/* logo */}
        <div>
          <Image src={logo} alt="abexita logo" width={150} height={39} />
        </div>

        {/* pages  */}
        <div>
          {
            NAV_LINKS.map((link) => {
              return (
                <ul key={link.id}>
                  <Link href={link.href}>{link.page}</Link>
                </ul>
              )
            })
          }
        </div>

        {/* auth  */}
        <div>
          <Link href="/">Log In</Link>
          <Link href="/">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
}
