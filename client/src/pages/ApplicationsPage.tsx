import NavigationBar from '../components/common/NavigationBar';
import ApplicationsView from '../components/application/ApplicationsView';

const ApplicationsPage = () => {
  const applications = [{ name: 'Music-Char-Bot' }];
  return (
    <>
      <NavigationBar />
      <ApplicationsView applications={applications} />
    </>
  );
};

export default ApplicationsPage;
