import { Fragment } from 'react/jsx-runtime';
import { Grid, Link } from '@mui/material';
import { TextField, Autocomplete, Button } from '@mui/material';
import styles from './Header.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <Fragment>
      <Grid className={styles.navigation_container} container spacing={2}>
        <Grid xs={4}>
          <Link href='/'>
            <div className={styles.logo_container}>
              <img
                src='https://media.loveitopcdn.com/26706/thumb/noi-that-viva-he-thong-cua-hang-noi-that-do-go-cao-cap-gia-re-cho-cong-trinh.jpg'
                alt='Log'
                className={styles.main_logo}
              />
            </div>
          </Link>
        </Grid>
        <Grid xs={4}>
          <Autocomplete
            freeSolo
            disableClearable
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label='Search input'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search'
                  }}
                />
              );
            }}
            options={[]}
          ></Autocomplete>
        </Grid>
        <Grid xs={4} className={styles.login_and_cart_section}>
          <ShoppingCartIcon className={styles.cart_icon} style={{ fontSize: '30px' }} />
          <Link>
            <Button>Login</Button>
          </Link>
          <Link>
            <Button>Logout</Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Header;
