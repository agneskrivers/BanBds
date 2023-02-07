import React, { FunctionComponent, useState } from 'react';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import { GetServerSideProps } from 'next';
import InfiniteScroll from 'react-infinite-scroll-component';

// Styles
import Styles from '@client/scss/pages/news/index.module.scss';

// Components
import {
    PostComponent,
    NewsComponent,
    WidgetComponent,
} from '@client/components';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import {
    demoNewsCompact,
    demoNewsCompactTop,
    demoNewsCompactMostViews,
    demoPostCompactModeVertical,
} from '../../../demo';

const Index: NextPageWithLayout = () => {
    return (
        <main>
            <Container>
                <Row className='justify-content-evenly'>
                    <Col md={8}>
                        <Row>
                            <Col lg={8}>
                                <NewsComponent
                                    mode='small'
                                    data={demoNewsCompactTop[0]}
                                    height={300}
                                />
                                <Row>
                                    <Col lg={6}>
                                        <NewsComponent
                                            mode='small'
                                            data={demoNewsCompactTop[1]}
                                        />
                                    </Col>
                                    <Col lg={6}>
                                        <NewsComponent
                                            mode='small'
                                            data={demoNewsCompactTop[1]}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} className={Styles.mostViews}>
                                <p className={Styles.mostViews_title}>
                                    Xem nhiều
                                </p>
                                <div className={Styles.mostViews_content}>
                                    {demoNewsCompactMostViews.map((item) => (
                                        <NewsComponent
                                            key={item.id}
                                            mode='title'
                                            data={item}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        <InfiniteScroll
                            dataLength={demoNewsCompact.length}
                            next={() => console.log('Load More')}
                            hasMore={false}
                            loader={
                                <div className='d-flex justify-content-center align-items-center pt-4 pb-4'>
                                    <Spinner
                                        animation='border'
                                        variant='primary'
                                    />
                                </div>
                            }
                        >
                            {demoNewsCompact.map((item) => (
                                <NewsComponent
                                    key={item.id}
                                    mode='normal'
                                    data={item}
                                />
                            ))}
                        </InfiniteScroll>
                    </Col>
                    <Col md={3}>
                        <WidgetComponent title='Cho thuê'>
                            {[...demoPostCompactModeVertical]
                                .slice(0, 5)
                                .map((item) => (
                                    <PostComponent
                                        key={item.id}
                                        mode='vertical'
                                        data={item}
                                    />
                                ))}
                        </WidgetComponent>
                        <WidgetComponent title='Mua bán'>
                            {[...demoPostCompactModeVertical]
                                .slice(5, 10)
                                .map((item) => (
                                    <PostComponent
                                        key={item.id}
                                        mode='vertical'
                                        data={item}
                                    />
                                ))}
                        </WidgetComponent>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
