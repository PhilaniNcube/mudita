import Image from "next/future/image";
import Link from "next/link";

const Footer = () => {

  const tempDate = new Date();

  const year = tempDate.getFullYear()

  return (
    <footer className="bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={566.9}
              height={289.9}
              alt="logo"
              className="w-28 md:w-44 lg:w-52 object-cover"
            />
          </Link>

          <div className="flex flex-col font-serif font-bold">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/promise"><a>Our Promise</a></Link>
          </div>

          <div className="">
            <p className="text-sm md:text-md text-slate-800">Copyright &copy; {year}</p>
            <p className="text-sm md:text-md text-slate-800">Developed by <Link href="https://athenamedia.co.za"><a className="font-bold cursor-pointer">Athena Media</a></Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
