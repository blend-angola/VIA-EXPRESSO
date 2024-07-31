import FooterBottom from "./footer-bottom"
import FooterTop from "./footer-top"

const Footer = () => {
  const dark_blue = "#030C1D"

  return (
    <footer className="w-full flex flex-col">
      <FooterTop />
      <FooterBottom />
      <div
        className={`w-full flex items-center justify-center bg-[${dark_blue}] text-white py-6`}
      >
        &copy; 2024 Via Expresso. All rights reserved
      </div>
    </footer>
  )
}

export default Footer
