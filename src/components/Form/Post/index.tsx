import React, { FunctionComponent, useContext } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import {
    Row,
    Col,
    Form,
    InputGroup,
    Button,
    Toast,
    ToastContainer,
} from 'react-bootstrap';
import Select from 'react-select';

// Styles
import Styles from '../styles/index.module.scss';

// Components
import { LoginComponent } from '@client/components';

// Configs
import { SelectCategory, SelectDirection, SelectLegal } from '@client/configs';

// Context
import { Context } from '@client/context/Web';

const Index: FunctionComponent = () => {
    // Hooks
    const { user } = useContext(Context);

    return (
        <>
            <div className={Styles.box}>
                <div className={classNames(Styles.title, 'mb-2')}>
                    Thông tin cơ bản
                </div>
                <Form className='mb-2'>
                    <Select options={SelectCategory} placeholder='Loại hình' />
                </Form>
                <Form className='mb-2'>
                    <Form.Label>Địa chỉ</Form.Label>
                    <Select
                        className='mb-2'
                        options={[]}
                        placeholder='Tỉnh/Thành phố'
                    />
                    <Row>
                        <Col md={6} className='mb-2'>
                            <Select options={[]} placeholder='Quận/Huyện' />
                        </Col>
                        <Col md={6} className='mb-2'>
                            <Select options={[]} placeholder='Phường/Xã' />
                        </Col>
                    </Row>
                    <Form.Control placeholder='Địa chỉ bổ sung: Số nhà, Ngõ, Ngách, Đường' />
                </Form>
            </div>
            <div className={Styles.box}>
                <div className={classNames('mb-2', Styles.title)}>
                    Thông tin bài viết
                </div>
                <Form className='mb-2'>
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control as='textarea' placeholder='Tiêu đề...' />
                </Form>
                <Form className='mb-4'>
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as='textarea' placeholder='Mô tả...' />
                </Form>
            </div>
            <div className={Styles.box}>
                <div className={Styles.title}>Thông tin bất động sản</div>
                <Form className='mb-2'>
                    <Form.Label>Diện tích</Form.Label>
                    <Form.Control type='number' />
                </Form>
                <Form className='mb-2'>
                    <Form.Label>Mức giá</Form.Label>
                    <Row>
                        <Col lg={8}>
                            <Form.Control />
                        </Col>
                        <Col lg={4}>
                            <Form.Select value='million'>
                                <option value='million'>Triệu</option>
                                <option value='billion'>Tỷ</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
                <Row className='flex-wrap'>
                    <Col md={6} className='mb-2'>
                        <Form.Label>Giấy tờ pháp lý</Form.Label>
                        <Select
                            options={SelectLegal}
                            placeholder='Vui lòng chọn'
                        />
                    </Col>
                    <Col md={6} className='mb-2'>
                        <Form.Label>Hướng nhà</Form.Label>
                        <Select
                            options={SelectDirection}
                            placeholder='Vui lòng chọn'
                        />
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <Form>
                            <Form.Label>Đường vào</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    placeholder='Nhập số'
                                    type='number'
                                />
                                <InputGroup.Text>m</InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col lg={6} className='mb-2'>
                        <Form>
                            <Form.Label>Mặt tiền</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    placeholder='Nhập số'
                                    type='number'
                                />
                                <InputGroup.Text>m</InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
            <div className={Styles.box}>
                <div className={Styles.title}>Thông tin liên hệ</div>
                <Form className='mb-2'>
                    <Form.Label>Tên liên hệ</Form.Label>
                    <Form.Control />
                </Form>
                <Form className='mb-2'>
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control />
                    <Form.Text>Mỗi số cách nhau dấu phẩy</Form.Text>
                </Form>
            </div>
            <div className={Styles.box}>
                <div className={Styles.title}>Hỉnh ảnh & Video</div>
                <Form.Control
                    className='mb-2'
                    placeholder='Nhập link video youtube'
                />
                <input type='file' style={{ display: 'none' }} />
                <button className={Styles.upload}>
                    <i className='material-icons'>file_download</i>
                    <p>Bấm để chọn ảnh cần tải lên</p>
                    <span>Dung lượng ảnh tối đa 10mb</span>
                </button>
                <Row className='mt-4 flex-wrap'>
                    <Col lg={4} className='my-2'>
                        <div className={Styles.img}>
                            <Image
                                src='/images/posts/3ea6e9ac9ddaf75b36063550b10f1dd4.webp'
                                alt='Image'
                                fill
                            />
                            <p>Ảnh đại diện</p>
                            <button>
                                <i className='material-icons-outlined'>
                                    delete
                                </i>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={Styles.post}>
                <Button variant='primary'>
                    {user ? 'Đăng tin' : 'Đăng nhập để tiếp tục'}
                </Button>
            </div>
            <LoginComponent.Web />
        </>
    );
};

export default Index;
