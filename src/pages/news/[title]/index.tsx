import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dayjs from 'dayjs';
import Head from 'next/head';

import 'dayjs/locale/vi';

dayjs.locale('vi');

// Styles
import Styles from '@client/scss/pages/news/index.module.scss';

// Components
import {
    NewsComponent,
    PostComponent,
    WidgetComponent,
} from '@client/components';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import {
    demoNewsCompact,
    demoPostCompactModeVertical,
    demoNewsInfo,
} from '../../../../demo';

const Index: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>{`${decodeURI(demoNewsInfo.title)} - BanBds`}</title>
            </Head>
            <main>
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col md={8}>
                            <article className={Styles.article}>
                                <header>
                                    <h1 className={Styles.article_title}>
                                        {decodeURI(demoNewsInfo.title)}
                                    </h1>
                                    <p className={Styles.article_time}>
                                        {dayjs(demoNewsInfo.time).format(
                                            'dddd, DD/MM/YYYY HH:mm'
                                        )}
                                    </p>
                                </header>
                                <section className={Styles.article_description}>
                                    <p className={Styles.article_summary}>
                                        {decodeURI(demoNewsInfo.description)}
                                    </p>
                                    <div
                                        className={Styles.article_content}
                                        dangerouslySetInnerHTML={{
                                            __html: decodeURI(
                                                demoNewsInfo.content
                                            ),
                                        }}
                                    />
                                </section>
                            </article>
                            <div className={Styles.article}>
                                <header>
                                    <h3
                                        className={Styles.article_title}
                                        style={{ fontSize: '20px' }}
                                    >
                                        XEM NHIỀU
                                    </h3>
                                </header>
                                <div className='mt-2'>
                                    {demoNewsCompact.map((item) => (
                                        <NewsComponent
                                            key={item.id}
                                            mode='normal'
                                            data={item}
                                        />
                                    ))}
                                </div>
                            </div>
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
        </>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
