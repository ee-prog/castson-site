import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  className?: string;
  imageClassName?: string;
  preload?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export function EditorialImage({
  src,
  alt,
  caption,
  aspect = "aspect-[4/5]",
  className = "",
  imageClassName = "",
  preload = false,
  sizes = "(max-width: 768px) 100vw, 44vw",
  objectPosition = "center",
}: EditorialImageProps) {
  return (
    <figure className={className}>
      <div className={`media-frame ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          sizes={sizes}
          className={imageClassName}
          style={{ objectPosition }}
        />
      </div>
      {caption ? <figcaption className="media-caption">{caption}</figcaption> : null}
    </figure>
  );
}

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link href={href} className={`editorial-link group ${className}`}>
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </Link>
  );
}

type PageHeaderProps = {
  kicker: string;
  title: string;
  lede?: string;
  className?: string;
};

export function PageHeader({ kicker, title, lede, className = "" }: PageHeaderProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <span className="page-kicker">{kicker}</span>
      <h1 className="mt-4">{title}</h1>
      {lede ? <p className="lede mt-6 max-w-2xl">{lede}</p> : null}
    </header>
  );
}
