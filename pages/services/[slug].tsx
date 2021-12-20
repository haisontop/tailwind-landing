import React from "react";
import Layout from "../../components/Layout";
import ServiceBody from "../../components/Services/ServiceHeroText";
import ServiceHeader from "../../components/Services/ServiceHeader";
import ServiceOffering, {
  OfferingModel,
} from "../../components/Services/ServiceOffering";
import ServiceSpacialities, {
  ServiceSpacialityModel,
} from "../../components/Services/ServiceSpaciality";
import client from "../../client";

interface ServiceProps {
  title?: string;
  heroText?: string;
  offerings: OfferingModel[];
  specialities: ServiceSpacialityModel[];
}

const Service = ({ title, heroText, offerings, specialities }: ServiceProps) => {
  return (
    <Layout>
      <div className="bg-black text-white xl:px-60">
        <ServiceHeader title={title}></ServiceHeader>
        <ServiceBody content={heroText}></ServiceBody>
        <ServiceOffering offerings={offerings} />
        <ServiceSpacialities specialities={specialities} />
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const service = await client.fetch(
    `*[_type == "services" && slug.current == "${context.params.slug}" ]{
        title,
        slug,
        heroText,
        offerings [] {
          name,
          description,
          mobileIcon {
            asset ->{
              url
            }
          }
        },
        specialities [] {
          name,
          backgroundImage {
            asset ->{
              url
            }
          }
        }
      }`
  );

  return {
    props: {
      ...service[0],
      offerings:
        service[0].offerings && service[0].offerings.length > 0
          ? service[0].offerings.map((offer) => ({
            title: offer.name,
            body: offer.description,
            img: offer.mobileIcon.asset.url,
          }))
          : [],
      specialities:
        service[0].specialities && service[0].specialities.length > 0
          ? service[0].specialities.map((offer) => ({
            title: offer.name,
            img: offer.backgroundImage.asset.url,
          }))
          : [],
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const serviceSlugs = await client.fetch(
    `*[_type == "services"]{
        slug
      }`
  );

  return {
    paths:
      serviceSlugs && serviceSlugs.length > 0
        ? serviceSlugs.map((serviceSlug) => {
          return {
            params: {
              slug: serviceSlug.slug.current,
            },
          };
        })
        : [],
    fallback: true,
  };
}

export default Service;
