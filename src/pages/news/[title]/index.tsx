import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dayjs from 'dayjs';
import Head from 'next/head';
import ErrorComponent from 'next/error';
import { GetServerSideProps } from 'next';

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

// Services
import services from '@client/services';

// Interfaces
import type {
    NextPageWithLayout,
    IPropsSeverSide,
    IApiWebNewsInfo,
} from '@interfaces';

// Props
type Props = IPropsSeverSide<IApiWebNewsInfo>;

const Index: NextPageWithLayout<Props> = (props) => {
    if (props.status === 'error') return <ErrorComponent statusCode={500} />;

    const { data, more, posts } = props;

    return (
        <>
            <Head>
                <title>{`${decodeURI(data.title)} - BanBds`}</title>
            </Head>
            <main>
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col md={posts ? 8 : 10}>
                            <article className={Styles.article}>
                                <header>
                                    <h1 className={Styles.article_title}>
                                        {decodeURI(data.title)}
                                    </h1>
                                    <p className={Styles.article_time}>
                                        {dayjs(data.time).format(
                                            'dddd, DD/MM/YYYY HH:mm'
                                        )}
                                    </p>
                                </header>
                                <section className={Styles.article_description}>
                                    <p className={Styles.article_summary}>
                                        {decodeURI(data.description)}
                                    </p>
                                    <div
                                        className={Styles.article_content}
                                        dangerouslySetInnerHTML={{
                                            __html: decodeURI(data.content),
                                        }}
                                    />
                                </section>
                            </article>
                            {more && (
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
                                        {more.map((item) => (
                                            <NewsComponent
                                                key={item.id}
                                                mode='normal'
                                                data={item}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Col>
                        {props.posts && (
                            <Col md={3}>
                                {props.posts.rent && (
                                    <WidgetComponent title='Cho thuê'>
                                        {[...props.posts.rent].map((item) => (
                                            <PostComponent
                                                key={item.id}
                                                mode='vertical'
                                                data={item}
                                            />
                                        ))}
                                    </WidgetComponent>
                                )}
                                {props.posts.sell && (
                                    <WidgetComponent title='Mua bán'>
                                        {[...props.posts.sell].map((item) => (
                                            <PostComponent
                                                key={item.id}
                                                mode='vertical'
                                                data={item}
                                            />
                                        ))}
                                    </WidgetComponent>
                                )}
                            </Col>
                        )}
                    </Row>
                </Container>
            </main>
        </>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const { title } = ctx.query;

    if (!title || typeof title !== 'string')
        return {
            notFound: true,
        };

    const id = title.split('-').splice(-1, 1)[0];

    if (isNaN(parseInt(id)))
        return {
            notFound: true,
        };

    const newsID = parseInt(id);

    const result = await services.news.info(newsID);

    if (!result)
        return {
            props: {
                status: 'error',
            },
        };

    if (result === 'NotFound')
        return {
            notFound: true,
        };

    return {
        props: {
            status: 'success',
            ...result,
        },
    };
};

export default Index;
