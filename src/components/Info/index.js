import React from 'react';

const InfoSection = props => (
  <section className={`bx--row ${props.className} info-section`}>
    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 className="info-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);
const InfoCard = props => {
  return (
    <article className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">{props.heading}</h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </article>
  );
};

export { InfoSection, InfoCard };
<div className="bx--row landing-page__r3">
  <div className="bx--col-md-4 bx--col-lg-4">
    <h3 className="landing-page__label">The Principles</h3>
  </div>
  <div className="bx--col-md-4 bx--col-lg-4">Carbon is Open</div>
  <div className="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
  <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div>
</div>;

export * from './Info';