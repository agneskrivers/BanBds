import React, { FunctionComponent, useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import ReactCodeInput from 'react-code-input';
import {
    Modal,
    InputGroup,
    Form,
    Button,
    Image,
    FloatingLabel,
    CloseButton,
    Toast,
} from 'react-bootstrap';

// Styles
import Styles from './styles/index.module.scss';

const Index: FunctionComponent = () => {
    // States
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // Effects
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded) return null;

    return (
        <>
            <Modal show={false} centered>
                <Modal.Body className={Styles.box}>
                    <div className={Styles.box_close}>
                        <CloseButton />
                    </div>
                    <div className={Styles.box_content}>
                        <p className={Styles.box_title}>Xin chào</p>
                        <p className={Styles.box_description}>
                            Đăng nhập hoặc tạo tài khoản
                        </p>
                        <InputGroup className={Styles.box_input}>
                            <InputGroup.Text>
                                <i className='material-icons'>smartphone</i>
                            </InputGroup.Text>
                            <Form.Control placeholder='Số điện thoại' />
                        </InputGroup>
                        <Button className={Styles.box_btn} variant='primary'>
                            Tiếp tục
                        </Button>
                        <p className={Styles.box_term}>
                            Bằng việc tiếp tục, bạn đã đồng ý với
                            <br />
                            <Link href='/dieu-khoan-su-dung'>
                                điều khoản sử dụng
                            </Link>{' '}
                            tài khoản.
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={false} centered>
                <Modal.Body className={Styles.box}>
                    <div className={Styles.box_close}>
                        <CloseButton />
                    </div>
                    <div className={Styles.box_content}>
                        <p className={Styles.box_title}>Nhập mã xác nhận</p>
                        <p className={Styles.box_description}>
                            {`Mã xác minh vừa gửi vào số điện thoại 0337.762.980 của
                                bạn`}
                        </p>
                        <div
                            className={Styles.box_input}
                            style={{ marginBottom: 0 }}
                        >
                            <ReactCodeInput
                                type='text'
                                fields={4}
                                name='confirm'
                                inputMode='numeric'
                            />
                        </div>
                        <p className={Styles.box_term} style={{ marginTop: 0 }}>
                            Không nhận được? <button>Gửi lại mã</button>
                        </p>
                        <Button className={Styles.box_btn} variant='primary'>
                            Xác nhận
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={false} centered backdrop='static' keyboard={false}>
                <Modal.Body className={Styles.box}>
                    <div className={Styles.box_close}>
                        <CloseButton />
                    </div>
                    <div
                        className='d-flex align-items-center mb-4'
                        style={{ cursor: 'pointer' }}
                    >
                        <Image
                            src='/images/common/avatar.png'
                            width={100}
                            height={100}
                            roundedCircle
                        />
                        <div className={Styles.upload}>
                            <div
                                className={classNames(
                                    'm-0 d-flex algin-items-center justify-content-center',
                                    Styles.upload_icon
                                )}
                            >
                                <i className='material-icons'>downloading</i>
                                <span>Tải ảnh lên</span>
                            </div>
                            <p className='m-0'>Chỉ tải ảnh lớn nhất là 10mb</p>
                        </div>
                    </div>
                    <input type='file' style={{ display: 'none' }} />
                    <FloatingLabel className='mb-4' label='Số điện thoại'>
                        <Form.Control disabled />
                    </FloatingLabel>
                    <FloatingLabel className='mb-4' label='Họ và tên'>
                        <Form.Control placeholder='Enter...' />
                    </FloatingLabel>
                    <FloatingLabel className='mb-4' label='Ngày sinh'>
                        <Form.Control type='date' placeholder='Enter...' />
                    </FloatingLabel>
                    <FloatingLabel className='mb-4' label='Địa chỉ'>
                        <Form.Control placeholder='Enter...' />
                    </FloatingLabel>
                    <Button className={Styles.box_btn} variant='primary'>
                        Tạo tài khoản
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Index;
