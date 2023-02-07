import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Styles
import Styles from '@client/scss/pages/myPosts/index.module.scss';

// Components
import { PostComponent } from '@client/components';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import { demoPostCompactModeEdit } from '../../../demo';

const Index: NextPageWithLayout = () => {
    return (
        <main>
            <Container>
                <h2 className={Styles.title}>Quản lý tin đăng</h2>
                <Row>
                    <Col md={8}>
                        {demoPostCompactModeEdit.map((item) => (
                            <PostComponent
                                key={item.id}
                                mode='editor'
                                data={item}
                            />
                        ))}
                    </Col>
                    <Col md={4} className='d-none d-md-block'>
                        <div className={Styles.box}>
                            <button className={Styles.box_item}>Tất cả</button>
                            <button className={Styles.box_item}>
                                Tin đã duyệt
                            </button>
                            <button className={Styles.box_item}>
                                Tin chờ duyệt
                            </button>
                            <button className={Styles.box_item}>
                                Tin đã bán
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
