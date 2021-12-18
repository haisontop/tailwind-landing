import { useRouter, withRouter } from "next/router";
import Link from "next/link";

interface ActiveLinkProps {
  href: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, children }) => {
  const router = useRouter();

  const isCurrentpath = router.pathname === href || router.asPath === href;
  const color = "#B45309";

  return (
    <Link href={href}>
      <div
        style={{
          textDecoration: "none",
          backgroundColor: isCurrentpath && color,
          border: isCurrentpath ? "none" : "2px solid #fff",
          color: isCurrentpath && "#000",
          padding: "16px 0px",
          borderRadius: "50px",
          cursor: "pointer",
        }}
      >
        {children}
      </div>
    </Link>
  );
};

export default ActiveLink;
