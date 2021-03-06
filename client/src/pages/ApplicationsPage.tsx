import NavigationBar from '../components/common/NavigationBar';
import ApplicationsView from '../components/application/ApplicationsView';
import AddApplicationPopup from '../components/popups/AddApplicationPopup';

const ApplicationsPage = () => {
  const applications = [{ name: 'Music-Char-Bot' }];
  return (
    <>
      <NavigationBar />
      <ApplicationsView applications={applications} />
      <AddApplicationPopup />
    </>
  );
};

export default ApplicationsPage;
