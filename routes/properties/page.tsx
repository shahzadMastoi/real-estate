'use client'
import styles from './style.module.scss';
import FeatureProperty from '@/app/CommonComponents/FeaturedProperties/FeatureProperty';
import GetListed from '@/app/CommonComponents/GetListed/GetListed';
import Pageheader from '@/app/CommonComponents/PageHeader/pageHeader';

function Properties() {
  const data = {
    title: "Our Properties",
    mainTitle: "Properties",
  };

  return (
    <div>
      <Pageheader data = {data} />
      <div className={styles.properties}>
        <div>
          <FeatureProperty type='propertypage' />
        </div>
      </div>
      <GetListed />
    </div>
  );
}

export default Properties;
