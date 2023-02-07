import React, {
    FunctionComponent,
    useState,
    useEffect,
    useContext,
} from 'react';
import { Form, Row, Col, Button, Toast, ToastContainer } from 'react-bootstrap';
import Select, { SingleValue } from 'react-select';

// Styles
import Styles from '../styles/index.module.scss';

// Components
import { LoginComponent } from '@client/components';

// Context
import { Context } from '@client/context/Web';

const Index: FunctionComponent = () => {
    // States

    // Hooks
    const { user } = useContext(Context);

    return (
        <>
            <div className={Styles.box}>
                <Form className='mb-4'>
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as='textarea' placeholder='Mô tả...' />
                </Form>
                <Form className='mb-4'>
                    <Form.Label>Vị trí</Form.Label>
                    <Row>
                        <Col lg={4}>
                            <Select options={[]} placeholder='Tỉnh/Thành phố' />
                        </Col>
                        <Col lg={4} className='mt-2 mt-lg-0'>
                            <Select options={[]} placeholder='Quận/Huyện' />
                        </Col>
                        <Col lg={4} className='mt-2 mt-lg-0'>
                            <Select options={[]} placeholder='Phường/Xã' />
                        </Col>
                    </Row>
                </Form>
                <Form className='mb-4'>
                    <Form.Label>Khoảng giá</Form.Label>
                    <div className='d-flex align-items-center'>
                        <Form.Control placeholder='Từ' style={{ flex: 2 }} />
                        <span className='mx-3'>~</span>
                        <Form.Control style={{ flex: 2 }} placeholder='Từ' />
                        <Form.Select className='ms-3' style={{ flex: 1 }}>
                            <option value='million'>Triệu</option>
                            <option value='billion'>Tỷ</option>
                        </Form.Select>
                    </div>
                </Form>
                <div className={Styles.post}>
                    <Button variant='primary'>
                        {!user ? 'Đăng nhập để tiếp tục' : 'Yêu cầu'}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Index;
