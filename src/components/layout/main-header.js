import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <div className="bg-gray-200 flex flex-col items-center p-8">
        <div>
          <Link href="/" className="text-8xl font-extrabold text-black uppercase">Next Event</Link>
        </div>
        <div className="mt-8">
          <nav>
            <ul className="bg-white p-8 border">
              <li><Link href='/events' className="btn p-1">Browse All</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
