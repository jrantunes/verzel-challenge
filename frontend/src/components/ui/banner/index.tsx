import styles from './styles.module.scss';

type BannerProps = {
  bannerImgId?: string
}

export default function Banner({ bannerImgId }: BannerProps) {
  return (
    <div className={styles.banner}>
      <img
        src={`https://image.tmdb.org/t/p/original/${bannerImgId}.jpg`}
        alt="Banner background"
        className={styles.bgImage}
      />
      <div className={styles.overlay} />
    </div>
  );
}