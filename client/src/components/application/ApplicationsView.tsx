import styled from 'styled-components';
import { AiFillPlusSquare } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { useState } from 'react';

type ApplicationSummary = {
  icon?: string;
  name: string;
};
type Props = {
  applications: ApplicationSummary[];
};
type ApplicationItemProps = {
  application: ApplicationSummary;
};

const ApplicationsViewBlock = styled.div`
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
const ApplicationItemBlock = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  margin-bottom: 1.5rem;
  padding-left: 0.5rem;
  background: #f4f4f4;
  cursor: pointer;
  img {
    width: 5rem;
    height: 5rem;
  }
  svg {
    color: #aaaaaa;
    font-size: 5rem;
  }
  p {
    margin-left: 1rem;
    font-size: 1.75rem;
    font-weight: bold;
  }
`;
const ApplicationAddButton = styled(ApplicationItemBlock)`
  background: #bebebe;
  svg {
    color: #f4f4f4;
  }
  p {
    margin-left: 0.5rem;
    font-size: 2.25rem;
  }
`;

const ApplicationItem = ({ application }: ApplicationItemProps) => {
  const [showImage, setShowImage] = useState(true);
  const onError = () => {
    setShowImage(false);
  };
  return (
    <ApplicationItemBlock>
      {application.icon && showImage ? (
        <img src={application.icon} onError={onError} alt="app icon" />
      ) : (
        <BiUserCircle />
      )}
      <p>{application.name}</p>
    </ApplicationItemBlock>
  );
};

const ApplicationsView = ({ applications }: Props) => {
  return (
    <ApplicationsViewBlock>
      <h1>{`전체 애플리케이션 (${applications.length})`}</h1>
      <ApplicationAddButton>
        <AiFillPlusSquare />
        <p>애플리케이션 추가하기</p>
      </ApplicationAddButton>
      {applications.map(application => (
        <ApplicationItem application={application} />
      ))}
    </ApplicationsViewBlock>
  );
};

export default ApplicationsView;
