import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'English Grammar in Short',
    Svg: require('@site/static/img/file-earmark-font.svg').default,
    description: (
      <>
        Ayuda en el aprendizaje de la gramática básica del idioma inglés.
      </>
    ),
  },
  {
    title: 'EGiS-1001 App',
    Svg: require('@site/static/img/app-indicator.svg').default,
    description: (
      <>
        Aplicación para practicar lo estudiado en esta página.
      </>
    ),
  },
  {
    title: '1001 Drops S.C.',
    Svg: require('@site/static/img/droplet-half.svg').default,
    description: (
      <>
        Busca la democratización del conocimiento a través de proyectos para difundir la Filosofía, la Ciencia y la Tecnología.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
