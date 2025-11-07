import type { HTMLAttributes } from "react"
import styles from "./styles.module.scss"

type SearchInputProps = {
  value: string
  onChange: HTMLAttributes<HTMLInputElement>["onChange"]
  placeholder?: string
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Buscar filme...",
  ...rest
}: SearchInputProps) => {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.icon}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.4 5.01 12.39 2 8.7 2S2 5.01 2 8.7s3.01 6.7 6.7 6.7c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6.8 0C6.01 14 4 11.99 4 8.7S6.01 3.4 8.7 3.4s4.7 2.01 4.7 5.3-2.01 5.3-4.7 5.3z"/>
      </svg>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}