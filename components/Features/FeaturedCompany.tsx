import Image from "next/image";
import styles from "./FeaturesSection.module.scss";

type FeaturedCompanyProps = {
  name: string;
  src: string;
};

function FeaturedCompany({ name, src }: FeaturedCompanyProps) {
  return (
    <div className={styles.featuredCompany}>
      <h1>{name}</h1>
      <div className={styles.companyLogoContainer}>
        <div className={styles.companyLogo}>
          <Image src={src} alt="company logo" fill />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCompany;
