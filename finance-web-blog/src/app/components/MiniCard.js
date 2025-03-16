import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import styles from "./MiniCard.module.css";

export default function MiniCard({ title, imageSrc, id, domain }) {
  return (
    <div
      className={`${styles.card} text-center border rounded shadow-sm overflow-hidden`}
    >
      <Link
        className="card-body"
        href={{
          pathname: "/blogs",
          query: { id: id, domain: domain },
        }}
      >
        <div className={styles.imageContainer}>
          <Image
            alt="Crew Member Image"
            layout="fill"
            objectFit="cover"
            src={imageSrc}
            priority={false}
            loading="lazy"
          />
        </div>
        <h5 className={styles.title}>{title}</h5>
      </Link>
    </div>
  );
}
