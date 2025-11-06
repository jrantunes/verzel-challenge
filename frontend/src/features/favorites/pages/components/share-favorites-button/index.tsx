import styles from "./styles.module.scss";

export function ShareFavoritesButton() {
  return (
    <button className={styles.wrapper}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.1 3.1 0 000-1.39l7.05-4.11A2.97 2.97 0 0018 7.91a3 3 0 10-3-3c0 .24.03.47.08.7L8.03 9.72a3 3 0 100 4.56l7.05 4.11c-.05.22-.08.46-.08.7a3 3 0 103-3z" />
      </svg>
      <span>Compartilhar favoritos</span>
    </button>
  );
}
