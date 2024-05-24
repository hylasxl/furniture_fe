import { Fragment } from 'react/jsx-runtime';
import { Grid, Link } from '@mui/material';
import { TextField, Autocomplete, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import styles from './Header.module.scss';

const Header = () => {
  const navigate = useNavigate()
  const [cartItemsCount, setCartItemsCount] = useState(10)

  const handleLoginButtonClick = () => {

  }

  const handleLogoutButtonClick = () => {

  }

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
                  label='Nhập từ khóa'
                  InputProps={{
                    ...params.InputProps,
                    type: 'search'
                  }}
                  className={styles.search_field}
                />
              );
            }}
            options={[]}
          ></Autocomplete>
        </Grid>
        <Grid xs={4} className={styles.login_and_cart_section}>
          <Badge badgeContent={cartItemsCount} color='primary' max={9} className={styles.badge}>
            <ShoppingCartIcon className={styles.cart_icon} style={{ fontSize: '30px' }} />
          </Badge>
          <Link>
            <Button
              className={styles.login_button}
              onClick={() => handleLoginButtonClick()}
            >
              Login
            </Button>
          </Link>
          <Link>
            <Button
              className={styles.login_button}
              onClick={() => handleLogoutButtonClick()}
            >
              Logout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Header;
