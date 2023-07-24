import PartnersDatas from '../datas/PartnersDatas.js';
import SponsorsDatas from '../datas/SponsorsDatas.js';
import PartnerCard from '../components/PartnersCards';

function Partners() {
  const partnersList = PartnersDatas.map((partner, i) => (
    <PartnerCard
      key={i}
      link={partner.link}
      image={partner.image}
      alt={partner.alt}
      title={partner.title}
    />
  ));

  const sponsorsList = SponsorsDatas.map((sponsor, i) => (
    <PartnerCard
      key={i}
      link={sponsor.link}
      image={sponsor.image}
      alt={sponsor.alt}
      title={sponsor.title}
    />
  ));

  return (
    <section className="generalContainer">
      <div className="generalBackground shopBackground">
        <div className="smooth-show">
          <h2 className="section-title">Dojos partenaires</h2>
          <div className="partners-flex">{partnersList}</div>
          <h2 className="section-title">Sponsors</h2>
          <div className="partners-flex">{sponsorsList}</div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
