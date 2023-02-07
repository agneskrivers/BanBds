import React, { FunctionComponent, useState, useEffect } from 'react';
import { Row, Col, Container, Modal, CloseButton } from 'react-bootstrap';
import Link from 'next/link';
import Select, { SingleValue } from 'react-select';
import classNames from 'classnames';

// Styles
import Styles from '../styles/index.module.scss';

// Configs
import {
    SelectCategory,
    SelectFilterPrices,
    SelectFilterAcreages,
    SelectSorts,
} from '@client/configs';

// Interfaces
import type { ISelect } from '@interfaces';

const Index: FunctionComponent = () => {
    return (
        <div className={Styles.search}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col md={2}>
                        <div className={classNames(Styles.search_nav)}>
                            <div
                                className={classNames(Styles.search_nav_item, {
                                    [Styles.search_nav_active]: true,
                                })}
                            >
                                <Link href='/mua-ban-nha-dat'>Bán</Link>
                            </div>
                            <div
                                className={classNames(Styles.search_nav_item, {
                                    [Styles.search_nav_active]: false,
                                })}
                            >
                                <Link href='/cho-thue-nha-dat'>Cho thuê</Link>
                            </div>
                        </div>
                    </Col>
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
                    <Col lg={7}>
                        <Row className={classNames(Styles.search_menu)}>
                            <Col lg={5}>
                                <Select
                                    options={SelectCategory}
                                    placeholder='Loại nhà đất'
                                    isSearchable={false}
                                    isClearable={true}
                                />
                            </Col>
                            <Col xs={5}>
                                <Select options={[]} placeholder='Dự án' />
                            </Col>
                            <Col lg={1} className='d-flex align-items-center'>
                                <button className={Styles.search_reset}>
                                    <i className='material-icons-outlined'>
                                        sync
                                    </i>
                                </button>
                            </Col>
                        </Row>
                        <Row
                            className={classNames(
                                'flex-nowrap',
                                Styles.search_mobile
                            )}
                        >
                            <Col xs={5} md={6} lg={5}>
                                <Select options={SelectSorts} />
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <Select
                                    options={SelectCategory}
                                    placeholder='Loại nhà đất'
                                />
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <Select options={[]} placeholder='Dự án' />
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <Select
                                    options={SelectFilterAcreages}
                                    placeholder='Diện tích'
                                />
                            </Col>
                            <Col xs={5} md={6} lg={5}>
                                <Select
                                    options={SelectFilterPrices}
                                    placeholder='Khoảng giá'
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Index;
