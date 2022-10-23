import styled from "styled-components";

interface BackIconProps {
  onClick: () => void;
}

const BackIcon = ({ onClick }: BackIconProps) => {
  return (
    <BackArrowSvg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </BackArrowSvg>
  );
};

const BackArrowSvg = styled.svg`
  margin-right: 12px;
  width: 30px;
  color: gray;
  cursor: pointer;
`;

export default BackIcon;
