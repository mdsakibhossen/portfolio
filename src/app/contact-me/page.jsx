import Map from "@/components/contact-page/map/Map";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";

export const metadata = {
  title: "Contact Me | Md Sakib Hossen",
  description: "I am a Full Stack Web Developer",
};

const ContactPage = () => {
  return (
    <>
      <Hero
        heading={"Contact Me"}
        text={
          "Agency provides a full service range including technical skills, design, business understanding."
        }
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactPage;
