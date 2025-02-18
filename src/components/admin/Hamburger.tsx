export function Hamburger({ className }: { className?: string }) {
  const classNames = className ? `${className} z-40 ml-[14px]` : "z-40 ml-1";
  return (
    <svg
      width="30"
      height="26"
      viewBox="0 0 33 28"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2.30858C0 1.0336 1.0336 0 2.30858 0H30.0115C31.2865 0 32.3201 1.0336 32.3201 2.30858C32.3201 3.58356 31.2865 4.61715 30.0115 4.61715H2.30858C1.0336 4.61715 0 3.58356 0 2.30858Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 13.8515C0 12.5765 1.0336 11.5429 2.30858 11.5429H30.0115C31.2865 11.5429 32.3201 12.5765 32.3201 13.8515C32.3201 15.1265 31.2865 16.1601 30.0115 16.1601H2.30858C1.0336 16.1601 0 15.1265 0 13.8515Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 25.3943C0 24.1193 1.0336 23.0858 2.30858 23.0858H30.0115C31.2865 23.0858 32.3201 24.1193 32.3201 25.3943C32.3201 26.6694 31.2865 27.7029 30.0115 27.7029H2.30858C1.0336 27.7029 0 26.6694 0 25.3943Z"
      />
    </svg>
  );
}
