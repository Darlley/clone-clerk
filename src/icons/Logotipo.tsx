import { SVGProps } from 'react';

interface CustomIconProps extends SVGProps<SVGSVGElement> {}

export default function Logotipo(props: CustomIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill="#007DFC"
        fillRule="evenodd"
        d="M25.556 11.685A10 10 0 0020 10V0A20 20 0 110 20h10a10 10 0 1015.556-8.315z"
        className="ccustom"
        clipRule="evenodd"
      ></path>
      <path
        fill="#007DFC"
        fillRule="evenodd"
        d="M10 0A10 10 0 010 10v10A20 20 0 0020 0H10z"
        className="ccustom"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
