import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy-to-use.svg').default,
    description: (
      <>
          iZiTest was designed to be easily installed and used, allowing you to quickly launch your automated web tests.
      </>
    ),
  },
  {
    title: 'Faster time-to-market',
    Svg: require('@site/static/img/fast-to-market.svg').default,
    description: (
      <>
          iZiTest lets you focus on your testing while we take care of the rest. Create and execute tests swiftly.
      </>
    ),
  },
  {
    title: 'Cost-effective',
    Svg: require('@site/static/img/save-money.svg').default,
    description: (
      <>
          Maximize your budget with iZiTest’s affordable and scalable testing solutions.
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
        <Heading as="h3">{title}</Heading>
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
