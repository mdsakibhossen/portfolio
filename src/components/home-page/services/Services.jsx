"use client";
import SecContainer from "@/components/sec-container/SecContainer";
import SecHeader from "@/components/section-header/SecHeader";
import { services } from "@/lib/services";
import ServiceCard from "./service-card/ServiceCard";

const Services = () => {
  return (
    <SecContainer className={"py-20 bg-secondary-50"}>
      <SecHeader title="How I Can Help You With" tag="Services" />
      <div className="mt-5 md:mt-8 lg:mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SecContainer>
  );
};

export default Services;
