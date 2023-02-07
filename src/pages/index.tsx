import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Select from 'react-select';
import Link from 'next/link';

// Styles
import Styles from '@client/scss/pages/home/index.module.scss';

// Components
import { CardComponent } from '@client/components';

// Configs
import { SelectCategory, SelectFilterPrices } from '@client/configs';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import {
    demoHotNewsCompactDashboard,
    demoNewsCompactDashboard,
    demoProjectCompactForWebDashboard,
    demoPostCompactForWebDashboard,
} from '../../demo';

const Index: NextPageWithLayout = () => {
    // States

    return (
        <main style={{ paddingTop: 0 }}>
            <section className={Styles.banner}>
                <Image
                    src='/images/common/background.jpg'
                    fill
                    alt='Banner BanBds'
                />
                <div className={Styles.banner_content}>
                    <Nav
                        variant='tabs'
                        className={Styles.search}
                        activeKey='sell'
                    >
                        <Nav.Item>
                            <Nav.Link
                                className={classNames(
                                    Styles.search_btn,
                                    Styles.search_btn_active
                                )}
                                eventKey='sell'
                            >
                                Nhà đất bán
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className={classNames(Styles.search_btn)}
                                eventKey='rent'
                            >
                                Nhà đất cho thuê
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className={classNames(Styles.search_btn)}
                                eventKey='project'
                            >
                                Dự án
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className={Styles.search_content}>
                        <div className={Styles.search_content_input}>
                            <input placeholder='Tìm nhanh' />
                            <Button variant='danger'>Tìm kiếm</Button>
                        </div>
                        <Row>
                            <Col md={4}>
                                <Select
                                    options={SelectCategory}
                                    placeholder='Loại nhà đất'
                                />
                            </Col>
                            <Col md={4}>
                                <Select options={[]} placeholder='Tỉnh thành' />
                            </Col>
                            <Col md={4}>
                                <Select
                                    options={SelectFilterPrices}
                                    placeholder='Khoảng giá'
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <Container>
                <section>
                    <Row>
                        <Col md={9} xs={12}>
                            <Row>
                                <Col lg={8}>
                                    <Link
                                        href={demoHotNewsCompactDashboard.link}
                                        className={Styles.news_hot}
                                    >
                                        <div className={Styles.news_hot_img}>
                                            <Image
                                                src={
                                                    demoHotNewsCompactDashboard.thumbnail
                                                }
                                                fill
                                                alt={
                                                    demoHotNewsCompactDashboard.title
                                                }
                                            />
                                        </div>
                                        <div
                                            className={Styles.news_hot_content}
                                        >
                                            <h3
                                                className={
                                                    Styles.news_hot_title
                                                }
                                            >
                                                {decodeURI(
                                                    demoHotNewsCompactDashboard.title
                                                )}
                                            </h3>
                                            <p
                                                className={
                                                    Styles.news_hot_description
                                                }
                                            >
                                                {decodeURI(
                                                    demoHotNewsCompactDashboard.content
                                                )}
                                            </p>
                                        </div>
                                    </Link>
                                </Col>
                                <Col lg={4}>
                                    <ul className={Styles.news_compact}>
                                        {demoNewsCompactDashboard.map(
                                            (item) => (
                                                <li key={item.id}>
                                                    <Link
                                                        href={item.link}
                                                        className='news_compact_item'
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} xs={0}>
                            <div className={Styles.news_banner}>
                                <Image
                                    src='https://file4.batdongsan.com.vn/2022/02/06/UVSXfqBy/20220206154030-7070.jpg'
                                    fill
                                    alt='News Banner'
                                />
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className='d-block'>
                    <div className={Styles.heading}>
                        <div className={Styles.heading_left}>
                            <h2>Dự án</h2>
                            <span className={Styles.heading_divider} />
                        </div>
                        <Link href='/du-an' className={Styles.heading_btn}>
                            <span>Xem thêm</span>
                            <i className='material-icons'>east</i>
                        </Link>
                    </div>
                    <Row>
                        {demoProjectCompactForWebDashboard.map((item) => (
                            <Col lg={4} key={item.id}>
                                <CardComponent.Project {...item} />
                            </Col>
                        ))}
                    </Row>
                </section>
                <section className='d-block'>
                    <div className={Styles.heading}>
                        <div className={Styles.heading_left}>
                            <h2>Bất động sản cần bán</h2>
                            <span className={Styles.heading_divider} />
                        </div>
                        <Link
                            href='/mua-ban-nha-dat'
                            className={Styles.heading_btn}
                        >
                            <span>Xem thêm</span>
                            <i className='material-icons'>east</i>
                        </Link>
                    </div>
                    <Row>
                        {demoPostCompactForWebDashboard.map((item) => (
                            <Col lg={4} key={item.id}>
                                <CardComponent.Post {...item} />
                            </Col>
                        ))}
                    </Row>
                    <div className={Styles.more}>
                        <button>
                            <span>Xem nhiều hơn</span>
                            <i className='material-icons'>
                                keyboard_arrow_down
                            </i>
                        </button>
                    </div>
                </section>
                <section className='d-block'>
                    <div className={Styles.heading}>
                        <div className={Styles.heading_left}>
                            <h2>Bất động sản cho thuê</h2>
                            <span className={Styles.heading_divider} />
                        </div>
                        <Link
                            href='/mua-ban-nha-dat'
                            className={Styles.heading_btn}
                        >
                            <span>Xem thêm</span>
                            <i className='material-icons'>east</i>
                        </Link>
                    </div>
                    <Row>
                        {demoPostCompactForWebDashboard.map((item) => (
                            <Col lg={4} key={item.id}>
                                <CardComponent.Post {...item} />
                            </Col>
                        ))}
                    </Row>
                    <div className={Styles.more}>
                        <button>
                            <span>Xem nhiều hơn</span>
                            <i className='material-icons'>
                                keyboard_arrow_down
                            </i>
                        </button>
                    </div>
                </section>
                <section className='d-block'>
                    <div className={Styles.heading}>
                        <div className={Styles.heading_left}>
                            <h2>Bất động sản theo địa điểm</h2>
                            <span className={Styles.heading_divider} />
                        </div>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <Link href='/mua-ban-nha-dat/ha-noi'>
                                <div className={Styles.location}>
                                    <Image
                                        src='/images/common/area-1.webp'
                                        alt='Mua Ban Nha Dat Ha Noi'
                                        fill
                                    />
                                    <div className={Styles.location_content}>
                                        <h3 className={Styles.location_name}>
                                            Hà Nội
                                        </h3>
                                        <p className={Styles.location_totals}>
                                            1,000 tin đăng
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Row className='flex_wrap'>
                                <Col xs={6} className='mb-4'>
                                    <Link href='/mua-ban-nha-dat/ho-chi-minh'>
                                        <div
                                            className={classNames(
                                                Styles.location,
                                                Styles.location_item
                                            )}
                                        >
                                            <Image
                                                src='/images/common/area-2.webp'
                                                alt='Mua Ban Nha Dat Ho Chi Minh'
                                                fill
                                            />
                                            <div
                                                className={
                                                    Styles.location_content
                                                }
                                            >
                                                <h3
                                                    className={
                                                        Styles.location_name
                                                    }
                                                >
                                                    Hồ Chí Minh
                                                </h3>
                                                <p
                                                    className={
                                                        Styles.location_totals
                                                    }
                                                >
                                                    1,000 tin đăng
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={6} className='mb-4'>
                                    <Link href='/mua-ban-nha-dat/bac-ninh'>
                                        <div
                                            className={classNames(
                                                Styles.location,
                                                Styles.location_item
                                            )}
                                        >
                                            <Image
                                                src='/images/common/area-3.webp'
                                                alt='Mua Ban Nha Dat Bac Ninh'
                                                fill
                                            />
                                            <div
                                                className={
                                                    Styles.location_content
                                                }
                                            >
                                                <h3
                                                    className={
                                                        Styles.location_name
                                                    }
                                                >
                                                    Bắc Ninh
                                                </h3>
                                                <p
                                                    className={
                                                        Styles.location_totals
                                                    }
                                                >
                                                    1,000 tin đăng
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={6}>
                                    <Link href='/mua-ban-nha-dat/bac-giang'>
                                        <div
                                            className={classNames(
                                                Styles.location,
                                                Styles.location_item
                                            )}
                                        >
                                            <Image
                                                src='/images/common/area-4.webp'
                                                alt='Mua Ban Nha Dat Bac Giang'
                                                fill
                                            />
                                            <div
                                                className={
                                                    Styles.location_content
                                                }
                                            >
                                                <h3
                                                    className={
                                                        Styles.location_name
                                                    }
                                                >
                                                    Bắc Giang
                                                </h3>
                                                <p
                                                    className={
                                                        Styles.location_totals
                                                    }
                                                >
                                                    1,000 tin đăng
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={6}>
                                    <Link href='/mua-ban-nha-dat/hai-duong'>
                                        <div
                                            className={classNames(
                                                Styles.location,
                                                Styles.location_item
                                            )}
                                        >
                                            <Image
                                                src='/images/common/area-5.webp'
                                                alt='Mua Ban Nha Dat Hai Duong'
                                                fill
                                            />
                                            <div
                                                className={
                                                    Styles.location_content
                                                }
                                            >
                                                <h3
                                                    className={
                                                        Styles.location_name
                                                    }
                                                >
                                                    Hải Dương
                                                </h3>
                                                <p
                                                    className={
                                                        Styles.location_totals
                                                    }
                                                >
                                                    1,000 tin đăng
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
