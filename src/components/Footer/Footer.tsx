import styles from './Footer.module.scss';
import { Fragment } from 'react/jsx-runtime';
import { Grid, Stack } from '@mui/material';

const Footer = () => {
    const CN1_phonenumber: string = '0977.118.799';
    const CN2_phonenumber: string = '0933.118.799';
    const CN3_phonenumber: string = '0922.118.799';
    const PMarketing_phonenumber: string = '0944.118.799';
    const email: string = 'info@noithatviva.com';

    return (
        <Fragment>
            <div className={styles.footer_container}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <p className={styles.footer_category}>Về chúng tôi</p>
                        <Stack direction={'column'} spacing={2}>
                            <p className={styles.footer_detail_category}>Giới thiệu</p>
                            <p className={styles.footer_detail_category}>Liên hệ</p>
                            <p className={styles.footer_detail_category}>Tin tức</p>
                            <p className={styles.footer_detail_category}>Những câu hỏi thường gặp</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={styles.footer_category}>Hỗ trợ khách hàng</p>
                        <Stack direction={'column'} spacing={2}>
                            <p className={styles.footer_detail_category}>Chính sách và quy định chung</p>
                            <p className={styles.footer_detail_category}>Chính sách thanh toán</p>
                            <p className={styles.footer_detail_category}>Chính sách đổi và trả hàng</p>
                            <p className={styles.footer_detail_category}>Chính sách bảo hành và sửa chửa</p>
                            <p className={styles.footer_detail_category}>Chính sách bảo mật</p>
                            <p className={styles.footer_detail_category}>Hướng dẫn mua hàng</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <p className={styles.footer_category}>Địa chỉ</p>
                        <Stack direction={'column'} spacing={2}>
                            <p className={styles.footer_detail_category}>
                                Địa chỉ
                                <br />
                                <span className={styles.footer_address_detail}>
                                    184 Lê Đại Hành, Phường 15, Quận 11, Thành phố Hồ Chí Minh
                                </span>
                            </p>
                            <p className={styles.footer_detail_category}>
                                Hotline CN1/Zalo:
                                <span className={styles.footer_address_detail}> {CN1_phonenumber}</span>
                            </p>
                            <p className={styles.footer_detail_category}>
                                Hotline CN2/Zalo:
                                <span className={styles.footer_address_detail}> {CN2_phonenumber}</span>
                            </p>
                            <p className={styles.footer_detail_category}>
                                Hotline CN3/Zalo:
                                <span className={styles.footer_address_detail}> {CN3_phonenumber}</span>
                            </p>
                            <p className={styles.footer_detail_category}>
                                Phòng Marketing:
                                <span className={styles.footer_address_detail}> {PMarketing_phonenumber}</span>
                            </p>
                            <p className={styles.footer_detail_category}>
                                Email:
                                <span className={styles.footer_address_detail}> {email}</span>
                            </p>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack gap={1} direction={'row'} flexWrap={'wrap'}>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/mastercard-20230723032025-aaqld.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/visa-20230723031958-rgpjs.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/jcb-20230723031924-qbxvw.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/cash-20230723031831-2lfhd.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/internet-banking-20230723031800-mbnlx.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/installment-20230723031727-nsksu.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/alepay-logo-20230723031647-zrwnk.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/vnpay-logo-20230723031610-wluan.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                            <img
                                src='https://w.ladicdn.com/5fcb7ec2f711010011f0629a/mpos-logo-20230723031534-iebdv.svg'
                                width={45}
                                loading='lazy'
                            ></img>
                        </Stack>
                        <p className={styles.footer_category}>Chứng nhận</p>
                    </Grid>
                </Grid>
                <div className={styles.footer_middle_part}>
                    <p className={styles.footer_middle_part_title}>
                        {' '}
                        Nội thất Viva - Hệ thống showroom nội thất đồ gỗ cho nhà ở, nhà hàng, khách sạn, công trình,
                        trực tiếp sản xuất giảm 30%&nbsp;với thị trường
                    </p>
                    <p>
                        {' '}
                        Nội thất ViVa - Cung cấp các mặt hàng đồ gỗ nội thất giá ưu đãi, nội thất phòng ngủ, đồ gỗ phòng
                        khách, giường ngủ, tủ quần áo, bàn ăn, tủ bếp, kệ tivi, salon gỗ, sofa gỗ...mẫu mã đa dạng, giảm
                        giá 30% tốt nhất thị trường
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;
