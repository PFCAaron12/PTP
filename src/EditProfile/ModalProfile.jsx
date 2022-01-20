import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import EditProfile from './EditProfile'

const Background = styled.div`
  width: 100%
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 850%;
  top: -33%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  top: 0px;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

  export const ModalProfile = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    return (
      <>
        {showModal ? (
          <Background onClick={() => setShowModal(prev => !prev)} ref={modalRef} >
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalContent>
                  <EditProfile />  
                </ModalContent>
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };
  