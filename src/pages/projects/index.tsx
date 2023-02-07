import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link';
import Head from 'next/head';
import { Container, Row, Col, Breadcrumb, Spinner } from 'react-bootstrap';

// Styles
import Styles from '@client/scss/pages/projects/index.module.scss';

// Components
import { SearchComponent, ProjectComponent } from '@client/components';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import { demoProjectCompactForWeb } from '../../../demo';

const Index: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>{`Thông tin dự án bất động sản mới nhất năm ${new Date().getFullYear()} - BanBds`}</title>
            </Head>
            <SearchComponent.Project />
            <main className='search'>
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col md={8}>
                            <Breadcrumb>
                                <Breadcrumb.Item href='/du-an' active>
                                    Dự án
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href='/du-an'>
                                    Toàn Quốc
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <h1 className={Styles.title}>Dự án toàn quốc</h1>
                            <p className={Styles.total}>
                                Hiện đang có 5,432 dự án
                            </p>
                            <InfiniteScroll
                                dataLength={demoProjectCompactForWeb.length}
                                hasMore={false}
                                loader={
                                    <div className='d-flex justify-content-center align-items-center pt-4 pb-4'>
                                        <Spinner
                                            animation='border'
                                            variant='primary'
                                        />
                                    </div>
                                }
                                next={() => console.log('load more')}
                                className='overflow-hidden p-2'
                            >
                                {demoProjectCompactForWeb.map((item) => (
                                    <ProjectComponent key={item.id} {...item} />
                                ))}
                            </InfiniteScroll>
                        </Col>
                        <Col lg={3} className='d-none d-lg-block'>
                            <div className={Styles.box}>
                                <h2 className={Styles.box_title}>Khu vực</h2>
                                <div className={Styles.box_content}>
                                    <Link href='#' className={Styles.box_item}>
                                        Hồ Chí Minh (100 dự án)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Hà Nội (100 dự án)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Bắc Ninh (100 dự án)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Bắc Giang (100 dự án)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Hải Dương (100 dự án)
                                    </Link>
                                </div>
                                {/* <button className={Styles.box_more}>
                                    Xem thêm
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
