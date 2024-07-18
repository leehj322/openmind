import ReactModal from 'react-modal';
import ModalComponent from '../components/feed/questionFeed/ModalComponent';
import profile from '../assets/images/samples/profile-sample.png';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/@shared/theme';

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ModalComponent profileImg={profile} name="go5rae" />
    </ThemeProvider>
  );
}

export default Home;
