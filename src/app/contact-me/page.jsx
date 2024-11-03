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
          "Have a project in mind? Let’s connect and discuss how I can help bring your ideas to life through custom web solutions."
        }
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactPage;
