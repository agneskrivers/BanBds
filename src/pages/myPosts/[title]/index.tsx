import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classNames from 'classnames';

// Styles
import Styles from '@client/scss/pages/myPosts/index.module.scss';

// Components
import { FormComponent } from '@client/components';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

const Index: NextPageWithLayout = () => {
    return (
        <main style={{ backgroundColor: '#f7f7f7' }}>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <h2 className={classNames(Styles.title, 'text-center')}>
                            Chỉnh sửa tin đăng
                        </h2>
                        <FormComponent.Post />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
