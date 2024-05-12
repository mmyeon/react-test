import { memo } from "react";

interface AnchorTagComponentProps {
  name: string;
  href: string;
  targetBlank?: boolean;
}

const AnchorTagComponent = memo(function AnchorTagComponent({
  name,
  href,
  targetBlank,
}: AnchorTagComponentProps) {
  return (
    <a
      href={href}
      target={targetBlank ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
});

export default AnchorTagComponent;
