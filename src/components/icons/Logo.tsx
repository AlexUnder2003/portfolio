
import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 22 16 3H8L2 22h6l6.527-5.594L16 22ZM9.578 16 12 6.8l2.422 9.2Z" />
  </svg>
);
export default SvgLogo;
