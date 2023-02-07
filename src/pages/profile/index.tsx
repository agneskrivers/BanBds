import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';

// Styles
import Styles from '@client/scss/pages/profile/index.module.scss';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

const Index: NextPageWithLayout = () => {
    return (
        <main>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <div className={Styles.box}>
                                    <div className={Styles.box_title}>
                                        Thông tin cá nhân
                                    </div>
                                    <div
                                        className={classNames(
                                            'mb-4',
                                            Styles.box_avatar
                                        )}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Image
                                            src='/images/common/avatar.png'
                                            width={80}
                                            height={80}
                                            alt='Avatar'
                                        />
                                        <input
                                            type='file'
                                            style={{ display: 'none' }}
                                        />
                                        <div
                                            className={
                                                Styles.box_avatar_content
                                            }
                                        >
                                            <button
                                                className={
                                                    Styles.box_avatar_btn
                                                }
                                            >
                                                <i className='material-icons-outlined'>
                                                    image
                                                </i>
                                                <span>Tải ảnh lên</span>
                                            </button>
                                            <p>
                                                Chỉ JPG hoặc PNG lớn nhất là
                                                10MB
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={classNames(
                                            'mb-4',
                                            Styles.box_content
                                        )}
                                    >
                                        <Form>
                                            <FloatingLabel
                                                label='Số điện thoại'
                                                className='mb-4'
                                            >
                                                <Form.Control
                                                    defaultValue='0337.762.980'
                                                    disabled
                                                />
                                            </FloatingLabel>
                                            <FloatingLabel
                                                label='Họ và tên'
                                                className='mb-4'
                                            >
                                                <Form.Control />
                                            </FloatingLabel>
                                            <FloatingLabel
                                                label='Ngày sinh'
                                                className='mb-4'
                                            >
                                                <Form.Control type='date' />
                                            </FloatingLabel>
                                            <FloatingLabel
                                                label='Địa chỉ'
                                                className='mb-4'
                                            >
                                                <Form.Control />
                                            </FloatingLabel>
                                        </Form>
                                    </div>
                                    <div className={Styles.box_btn}>
                                        <Button variant='primary'>Lưu</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
