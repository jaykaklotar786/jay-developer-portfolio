import React from "react";

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export function TechIcon({
  name,
  size = 24,
  className = "",
  ...props
}: TechIconProps & { name: string }) {
  const s = size;

  switch (name.toLowerCase()) {
    case "html5":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M3 2L5 20L12 22L19 20L21 2H3Z"
            fill="#E44D26"
            fillOpacity="0.15"
            stroke="#E44D26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7H7L7.5 11H16.5L16 16L12 17.2L8 16L7.8 14"
            stroke="#E44D26"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "css3":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M3 2L5 20L12 22L19 20L21 2H3Z"
            fill="#264DE4"
            fillOpacity="0.15"
            stroke="#264DE4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 7H7.5L8 11.5H16L15.5 16L12 17.2L8.5 16L8.4 14.5"
            stroke="#2965F1"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            fill="#F7DF1E"
            fillOpacity="0.15"
            stroke="#F7DF1E"
            strokeWidth="1.5"
          />
          <path
            d="M11 11V16C11 17 10 18 8.5 18C7.5 18 6.5 17.5 6.5 16.5"
            stroke="#F7DF1E"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M14 17C15 17.8 16.5 18 17.5 17.2C18.2 16.5 18 15.2 17 14.5L15.5 13.5C14.5 12.8 14.2 11.5 15 10.7C15.8 10 17.2 10.2 18 11"
            stroke="#F7DF1E"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            fill="#3178C6"
            fillOpacity="0.15"
            stroke="#3178C6"
            strokeWidth="1.5"
          />
          <path
            d="M7 10H13M10 10V18"
            stroke="#3178C6"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M14.5 17C15.5 17.8 17 18 18 17.2C18.7 16.5 18.5 15.2 17.5 14.5L16 13.5C15 12.8 14.8 11.5 15.5 10.7C16.3 10 17.8 10.2 18.5 11"
            stroke="#3178C6"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case "react":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse
            cx="12"
            cy="12"
            rx="8.5"
            ry="3.5"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8.5"
            ry="3.5"
            transform="rotate(60 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="8.5"
            ry="3.5"
            transform="rotate(120 12 12)"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "nextjs":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <path
            d="M9 8.5V15.5M15.5 8.5L9.5 16.5H11L16.5 9V8.5H15.5Z"
            fill="currentColor"
          />
        </svg>
      );

    case "angular":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M12 2L3 5.5L4.5 17.5L12 22L19.5 17.5L21 5.5L12 2Z"
            fill="#DD0031"
            fillOpacity="0.15"
            stroke="#DD0031"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 6L8.5 15H10.2L11 13H13L13.8 15H15.5L12 6ZM11.5 11.5L12 9.5L12.5 11.5H11.5Z"
            fill="#DD0031"
          />
        </svg>
      );

    case "tailwind":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M12.5 7.5C11 5.5 9 5 6.5 6C4.5 6.8 3.5 8.5 3 10.5C4.5 9 6 8.5 7.5 9C9 9.5 10 11 11 13C12 15 13.5 16 16.5 16C19.5 16 20.5 14 21 12C19.5 13.5 18 13.8 16.5 13C15 12.2 14 10 12.5 7.5Z"
            fill="#38BDF8"
            fillOpacity="0.15"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "shadcn":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <line
            x1="17"
            y1="7"
            x2="7"
            y2="17"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="17"
            y1="12"
            x2="12"
            y2="17"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "nodejs":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z"
            fill="#5FA04E"
            fillOpacity="0.15"
            stroke="#5FA04E"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 7V12M12 12L16 14.5M12 12L8 14.5"
            stroke="#5FA04E"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case "express":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path
            d="M7 10L10 12L7 14M12 14H16"
            stroke="#A855F7"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "restapi":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <circle cx="6" cy="6" r="3" stroke="#8B5CF6" strokeWidth="1.5" />
          <circle cx="18" cy="6" r="3" stroke="#8B5CF6" strokeWidth="1.5" />
          <circle cx="12" cy="18" r="3" stroke="#8B5CF6" strokeWidth="1.5" />
          <path
            d="M8.5 7.5L10.5 15.5M15.5 7.5L13.5 15.5M9 6H15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "jwt":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <rect
            x="4"
            y="9"
            width="16"
            height="12"
            rx="3"
            fill="#D63AFF"
            fillOpacity="0.15"
            stroke="#D63AFF"
            strokeWidth="1.5"
          />
          <path
            d="M8 9V6C8 4 9.8 2.5 12 2.5C14.2 2.5 16 4 16 6V9"
            stroke="#D63AFF"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="12" cy="15" r="1.5" fill="#D63AFF" />
        </svg>
      );

    case "mongodb":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M12 2C12 2 6 7 6 13C6 17.5 9 21.5 12 22C15 21.5 18 17.5 18 13C18 7 12 2 12 2Z"
            fill="#47A248"
            fillOpacity="0.15"
            stroke="#47A248"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 2V22"
            stroke="#47A248"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "git":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <circle cx="6" cy="6" r="2.5" stroke="#F05032" strokeWidth="1.5" />
          <circle cx="6" cy="18" r="2.5" stroke="#F05032" strokeWidth="1.5" />
          <circle cx="18" cy="10" r="2.5" stroke="#F05032" strokeWidth="1.5" />
          <path
            d="M6 8.5V15.5M8.5 6H11C13.5 6 15.5 8 15.5 10"
            stroke="#F05032"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "github":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M15 22V18C15 16.5 14.5 15.5 13.5 14.5C16.5 14 19.5 12.5 19.5 7.5C19.5 6 19 4.8 18 3.8C18.2 3.2 18.2 2 17.5 1C17.5 1 16.2 1 14 2.8C12.7 2.4 11.3 2.4 10 2.8C7.8 1 6.5 1 6.5 1C5.8 2 5.8 3.2 6 3.8C5 4.8 4.5 6 4.5 7.5C4.5 12.5 7.5 14 10.5 14.5C9.8 15.2 9.2 16.2 9 17.5C8 18 6 18.5 5 17C4.5 16 3.5 15.5 2.5 15.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "postman":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="#FF6C37"
            fillOpacity="0.15"
            stroke="#FF6C37"
            strokeWidth="1.5"
          />
          <path
            d="M8 12L16 8L13 16L11.5 13L8 12Z"
            fill="#FF6C37"
            stroke="#FF6C37"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "vscode":
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="M17 2L6 11L2 8L4.5 6L6 11L17 2Z"
            fill="#007ACC"
            fillOpacity="0.15"
          />
          <path
            d="M17 22L6 13L2 16L4.5 18L6 13L17 22Z"
            fill="#007ACC"
            fillOpacity="0.15"
          />
          <path
            d="M17 2L22 4.5V19.5L17 22L6 12L17 2Z"
            stroke="#007ACC"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M6 12L2 9.5V14.5L6 12Z"
            stroke="#007ACC"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={className}
          {...props}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8V12L15 15" />
        </svg>
      );
  }
}
