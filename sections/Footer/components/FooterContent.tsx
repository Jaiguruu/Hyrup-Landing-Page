import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 mb-12 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <FooterBrand />
      <FooterColumn
        title="Product"
        links={[
          { text: "For Students", href: "https://students.hyrup.in/" },
          { text: "Features", href: "#features" },
          { text: "Find Jobs", href: "https://students.hyrup.in/" },
          { text: "Find Mentors", href: "https://students.hyrup.in/" },
        ]}
      />
      <FooterColumn
        title="Company"
        links={[
          { text: "About Us", href: "#" },
          { text: "Fix Forward", href: "https://fixforward.hyrup.in/" },
          { text: "Blog", href: "#" },
          { text: "Careers", href: "#" },
        ]}
      />
      <FooterColumn
        title="Support"
        links={[
          { text: "Contact Us", href: "mailto://hello@hyrup.in" },
          { text: "Help Center", href: "#" },
          { text: "Privacy Policy", href: "#" },
          { text: "Terms of Service", href: "#" },
        ]}
      />
    </div>
  );
};