import Image from "next/image";

type ArtifactVariant =
  | "dashboard"
  | "diagram"
  | "interface"
  | "process"
  | "structure";

type ArtifactFrameProps = {
  /** When provided, a real asset is rendered instead of the reserved plate. */
  src?: string;
  alt?: string;
  /** Small label set on the plate, e.g. "Executive reporting". */
  label?: string;
  /** Figure index shown before the label, e.g. "I". */
  index?: string;
  /** Caption rendered beneath the frame. */
  caption?: string;
  /** Kept for call sites; used only as a subtle tonal hint. */
  variant?: ArtifactVariant;
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

/**
 * ArtifactFrame holds the position of an operating artifact — a dashboard,
 * diagram, interface, process map or org structure. Until a real asset exists,
 * it renders a quiet gallery plate: a tonal field, a fine inset mat and a single
 * registration mark. It reads as a space reserved for a considered image, not a
 * technical drawing. Hand it a `src` later and the plate becomes the photograph
 * with no other change.
 */
export function ArtifactFrame({
  src,
  alt = "",
  label,
  index,
  caption,
  variant = "dashboard",
  aspect = "aspect-[4/3]",
  className = "",
  sizes = "(max-width: 1024px) 100vw, 44vw",
  priority = false,
  objectPosition = "center",
}: ArtifactFrameProps) {
  return (
    <figure className={className}>
      <div className={`artifact-frame ${aspect}`} data-variant={variant}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition }}
          />
        ) : (
          <>
            {(index || label) && (
              <span className="artifact-index">
                {index ? <em>{index}</em> : null}
                {label}
              </span>
            )}
            <span className="artifact-mark" aria-hidden="true" />
          </>
        )}
      </div>
      {caption ? <figcaption className="media-caption artifact-caption">{caption}</figcaption> : null}
    </figure>
  );
}
