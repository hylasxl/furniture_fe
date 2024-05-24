import { Fragment } from 'react/jsx-runtime';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from "./HomePage.module.scss"

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className={styles.main_img}>
        <img src='https://media.loveitopcdn.com/26706/thumb/900x333/facebook-1702-x-630-01.png?zc=1' alt='Main Image'></img>
      </div>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
