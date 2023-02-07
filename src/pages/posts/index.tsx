import React from 'react';
import { Row, Col, Container, Breadcrumb, Spinner } from 'react-bootstrap';
import classNames from 'classnames';
import Link from 'next/link';
import Select, { SingleValue } from 'react-select';
import InfiniteScroll from 'react-infinite-scroll-component';

// Styles
import Styles from '@client/scss/pages/posts/index.module.scss';

// Components
import { SearchComponent, PostComponent } from '@client/components';

// Configs
import {
    SelectSorts,
    SelectFilterPrices,
    SelectFilterAcreages,
} from '@client/configs';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import { demoPostCompactForWeb } from '../../../demo';

const Index: NextPageWithLayout = () => {
    return (
        <>
            <SearchComponent.Post />
            <main className='search'>
                <Container>
                    <Row>
                        <Col md={9}>
                            <Breadcrumb>
                                <Breadcrumb.Item href='/mua-ban-nha-dat' active>
                                    Mua bán
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href='#'>
                                    Tất cả BĐS trên toàn quốc
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <h1 className={Styles.title}>
                                Mua bán nhà đất trên toàn quốc
                            </h1>
                            <p className={Styles.total}>
                                Hiện có 9,876 bất động sản.
                            </p>
                            <Select
                                options={SelectSorts}
                                className='w-25 d-none d-lg-block'
                                defaultValue={SelectSorts[0]}
                            />
                            <div className={Styles.content}>
                                <InfiniteScroll
                                    className='overflow-hidden p-2'
                                    dataLength={demoPostCompactForWeb.length}
                                    hasMore={false}
                                    loader={
                                        <div className='d-flex justify-content-center align-items-center pt-2 pb-2'>
                                            <Spinner
                                                animation='border'
                                                variant='primary'
                                            />
                                        </div>
                                    }
                                    next={() => console.log('Load More')}
                                >
                                    {demoPostCompactForWeb.map((item) => (
                                        <PostComponent
                                            mode='normal'
                                            key={item.id}
                                            data={item}
                                        />
                                    ))}
                                </InfiniteScroll>
                            </div>
                        </Col>
                        <Col lg={3} className='d-none d-lg-block'>
                            <div
                                className={classNames(
                                    Styles.box,
                                    Styles.box_gray,
                                    Styles.box_active
                                )}
                            >
                                <h2 className={Styles.box_title}>
                                    Nhà đất mua bán
                                </h2>
                                <div
                                    className={classNames(Styles.box_content, {
                                        [Styles.box_collapsed]: false,
                                    })}
                                >
                                    <Link href='#' className={Styles.box_item}>
                                        Hồ Chí Minh (100 tin đăng)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Hà Nội (100 tin đăng)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Bắc Ninh (100 tin đăng)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Bắc Giang (100 tin đăng)
                                    </Link>
                                    <Link href='#' className={Styles.box_item}>
                                        Hải Dương (100 tin đăng)
                                    </Link>
                                </div>
                                {/* {areas.length > 12 && (
                                    <button
                                        className={Styles.box_more}
                                        onClick={handleClickAreaMore}
                                    >
                                        {isArea ? 'Thu gọn' : 'Xem thêm'}
                                        <i className='material-icons-outlined'>
                                            {isArea
                                                ? 'expand_more'
                                                : ' keyboard_control_key'}
                                        </i>
                                    </button>
                                )} */}
                            </div>
                            <div
                                className={classNames(
                                    Styles.box,
                                    Styles.box_filter
                                )}
                            >
                                <h2 className={Styles.box_title}>
                                    Lọc theo khoảng giá
                                </h2>
                                <div
                                    className={classNames(Styles.box_content, {
                                        [Styles.box_collapsed]: false,
                                    })}
                                >
                                    {SelectFilterPrices.map(
                                        ({ label, value }) => (
                                            <h3
                                                className={Styles.box_item}
                                                key={value}
                                            >
                                                {label}
                                            </h3>
                                        )
                                    )}
                                </div>
                                <button className={Styles.box_more}>
                                    Xem thêm
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button>
                            </div>
                            <div
                                className={classNames(
                                    Styles.box,
                                    Styles.box_filter
                                )}
                            >
                                <h2 className={Styles.box_title}>
                                    Lọc theo diện tích
                                </h2>
                                <div
                                    className={classNames(Styles.box_content, {
                                        [Styles.box_collapsed]: false,
                                    })}
                                >
                                    {SelectFilterAcreages.map(
                                        ({ value, label }) => (
                                            <h3
                                                className={Styles.box_item}
                                                key={value}
                                            >
                                                {label}
                                            </h3>
                                        )
                                    )}
                                </div>
                                <button className={Styles.box_more}>
                                    Xem thêm
                                    <i className='material-icons-outlined'>
                                        expand_more
                                    </i>
                                </button>
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
