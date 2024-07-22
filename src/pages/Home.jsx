import ModalComponent from '../components/feed/questionFeed/ModalComponent';
import profile from '../assets/images/samples/profile-sample.png';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/@shared/theme';
import { useState } from 'react';
import { useThemeSetting } from '../contexts/ThemeContextProvider';
import showToast from '../components/@shared/Toast';
function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const showModal = () => {
    setModalIsOpen(true);
    showToast('토스트', 2000);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const themeSet = useThemeSetting();
  return (
    <div className="test">
      <button onClick={showModal}>열기</button>
      <ModalComponent
        themeSet={themeSet}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        profileImg={profile}
        name="go5rae"
        subjectId="5179"
      />
    </div>
  );
}
export default Home;
