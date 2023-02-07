import React, { FunctionComponent, useState, useEffect } from 'react';
import classNames from 'classnames';
import Select, { SingleValue } from 'react-select';
import { Container, Row, Col, Modal } from 'react-bootstrap';

// Styles
import Styles from '../styles/index.module.scss';

const Index: FunctionComponent = () => {
    return (
        <div className={Styles.search}>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className={Styles.search_input}>
                            <span>
                                <i className='material-icons-outlined'>
                                    search
                                </i>
                            </span>
                            <input placeholder='Tìm kiếm' />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row className={classNames(Styles.search_menu)}>
                            <Col lg={4}>
                                <Select options={[]} placeholder='Loại hình' />
                            </Col>
                            <Col lg={4}>
                                <Select options={[]} placeholder='Trạng thái' />
                            </Col>
                            <Col lg={4}>
                                <Select options={[]} placeholder='Mức giá' />
                            </Col>
                        </Row>
                        <Row
                            className={classNames(
                                'flex-nowrap',
                                Styles.search_mobile
                            )}
                        >
                            <Col xs={5} md={6} lg={5}>
                                <button>
                                    Loại hình <hr />
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button>
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <button>
                                    Trạng thái <hr />
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button>
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <button>
                                    Tỉnh <hr />
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button>
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <button>
                                    Quận <hr />
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button>
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <button>
                                    Mức giá <hr />
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={1} className='d-flex align-items-center'>
                        <button className={Styles.search_reset}>
                            <i className='material-icons-outlined'>sync</i>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Index;
