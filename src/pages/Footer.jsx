import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerMenu = [
    { head: "MENU", title: "Beranda", link: "Hero" },
    { head: "MENU", title: "Pembuka", link: "About" },
    { head: "MENU", title: "Akad Nikah", link: "Service" },
    { head: "MENU", title: "Kisah Kasih", link: "Pricing" },
    { head: "MENU", title: "Gallery", link: "FAQ" },
    { head: "MENU", title: "Lokasi", link: "Contact" },
  ];

  const alamatFooter = {
    company: "Putra & Putri Wedding",
    address: "Jl. Kelengkeng 10, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365",
    song: "Anandito Anisa - Pernikahan Impian",
  };

  const sosialFooter = {
    instagram: "/",
    twitter: "/",
    youtube: "/",
  };

  // Group menu items by head
  const groupedMenu = footerMenu.reduce((acc, item) => {
    if (!acc[item.head]) acc[item.head] = [];
    acc[item.head].push(item);
    return acc;
  }, {});

  return (
    <div className="px-[1rem] md:px-[80px] bg-pink-50 pt-4 md:pt-16 text-gray-600">
      <div className="mb-10 flex flex-wrap gap-x-8 gap-y-10">
        {/* Footer Menu */}
        {Object.entries(groupedMenu).map(([head, links], index) => (
          <div key={index} className="flex flex-col">
            <h4 className="font-bold text-lg text-pink-600 mb-4">{head}</h4>
            {links.map((item, i) => (
              <div key={i} className="mb-2">
                <ScrollLink
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="text-sm hover:text-pink-500 cursor-pointer"
                >
                  {item.title}
                </ScrollLink>
              </div>
            ))}
          </div>
        ))}

        {/* Address Footer */}
        <div className="flex flex-col w-[42rem]">
          <h4 className="font-bold text-lg text-pink-600 mb-4">WEDDING</h4>
          <p className="text-sm mb-2">{alamatFooter.company}</p>
          <p className="text-sm mb-2">
            <strong>ALAMAT:</strong> {alamatFooter.address}
          </p>
          <div className="flex items-center text-sm">
            Song by
            <a
              href="https://www.youtube.com/watch?v=fb167KAxvrg"
              className="ml-1 text-pink-400"
              target="_blank"
            >
              {alamatFooter.song}
            </a>
          </div>
        </div>
      </div>
      <div className="py-5 text-xs md:text-sm justify-between w-full font-semibold min-[500px]:flex border-t-[3px] border-[#D9D9D9]">
        <div className="mb-2">
          © {currentYear} <b>Putra &amp; Putri Wedding.</b> All rights reserved
        </div>
        <div className="flex gap-4">
          <a
            href={sosialFooter.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaYoutube size={26} />
          </a>
          <a
            href={sosialFooter.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={26} />
          </a>
          <a
            href={sosialFooter.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaTwitter size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
