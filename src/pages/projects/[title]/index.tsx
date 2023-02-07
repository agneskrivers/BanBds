import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';

// Styles
import Styles from '@client/scss/pages/project/index.module.scss';

// Components
import {
    MapComponent,
    WidgetComponent,
    PostComponent,
} from '@client/components';

// Helpers
import { getName } from '@client/helpers';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import { demoProjectInfo, demoPostCompactModeVertical } from '../../../../demo';

const Index: NextPageWithLayout = () => {
    // States
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // Effects
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <main>
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col md={8}>
                            <h1 className={Styles.title}>
                                {decodeURI(demoProjectInfo.title)}
                            </h1>
                            <OverlayTrigger
                                placement='top'
                                overlay={<Tooltip>Xem bản đồ</Tooltip>}
                            >
                                <p className={Styles.address}>
                                    {demoProjectInfo.address}
                                </p>
                            </OverlayTrigger>
                            <div className={Styles.images}>
                                <Carousel interval={5000}>
                                    {demoProjectInfo.images.map((item) => (
                                        <Carousel.Item
                                            className={Styles.images_item}
                                            key={item}
                                        >
                                            <Image
                                                src={`/images/projects/${item}`}
                                                alt={decodeURI(
                                                    demoProjectInfo.title
                                                )}
                                                fill
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <span className={Styles.status}>
                                    {getName.project.status(
                                        demoProjectInfo.status
                                    )}
                                </span>
                            </div>
                            <div className={Styles.overview}>
                                <h2 className={Styles.title}>Tổng quan</h2>
                                <Row className='flex-wrap my-4'>
                                    <Col lg={6}>
                                        <Row>
                                            <Col lg={6}>
                                                <p
                                                    className={
                                                        Styles.overview_title
                                                    }
                                                >
                                                    Diện tích
                                                </p>
                                            </Col>
                                            <Col lg={6}>
                                                <span
                                                    className={
                                                        Styles.overview_label
                                                    }
                                                >
                                                    {demoProjectInfo.acreages}
                                                </span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    {demoProjectInfo.prices && (
                                        <Col lg={6}>
                                            <Row>
                                                <Col lg={6}>
                                                    <p
                                                        className={
                                                            Styles.overview_title
                                                        }
                                                    >
                                                        Giá
                                                    </p>
                                                </Col>
                                                <Col lg={6}>
                                                    <span
                                                        className={
                                                            Styles.overview_label
                                                        }
                                                    >
                                                        {`${
                                                            typeof demoProjectInfo.prices ===
                                                            'number'
                                                                ? demoProjectInfo.prices
                                                                : `${demoProjectInfo.prices.min} - ${demoProjectInfo.prices.max}`
                                                        } triệu/m²`}
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )}
                                    {demoProjectInfo.investor && (
                                        <Col lg={6}>
                                            <Row>
                                                <Col lg={6}>
                                                    <p
                                                        className={
                                                            Styles.overview_title
                                                        }
                                                    >
                                                        Chủ đầu tư
                                                    </p>
                                                </Col>
                                                <Col lg={6}>
                                                    <span
                                                        className={
                                                            Styles.overview_label
                                                        }
                                                    >
                                                        {
                                                            demoProjectInfo
                                                                .investor.name
                                                        }
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )}
                                    {demoProjectInfo.overview && (
                                        <>
                                            <Col lg={6}>
                                                <Row>
                                                    <Col lg={6}>
                                                        <p
                                                            className={
                                                                Styles.overview_title
                                                            }
                                                        >
                                                            Số căn hộ
                                                        </p>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <span
                                                            className={
                                                                Styles.overview_label
                                                            }
                                                        >
                                                            {`${demoProjectInfo.overview.numberOfApartments} căn`}
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={6}>
                                                <Row>
                                                    <Col lg={6}>
                                                        <p
                                                            className={
                                                                Styles.overview_title
                                                            }
                                                        >
                                                            Số tòa
                                                        </p>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <span
                                                            className={
                                                                Styles.overview_label
                                                            }
                                                        >
                                                            {`${demoProjectInfo.overview.numberOfApartments} tòa`}
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col lg={6}>
                                                <Row>
                                                    <Col lg={6}>
                                                        <p
                                                            className={
                                                                Styles.overview_title
                                                            }
                                                        >
                                                            Pháp lý
                                                        </p>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <span
                                                            className={
                                                                Styles.overview_label
                                                            }
                                                        >
                                                            {
                                                                demoProjectInfo
                                                                    .overview
                                                                    .legal
                                                            }
                                                        </span>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </>
                                    )}
                                </Row>
                            </div>
                            <div
                                className={Styles.content}
                                dangerouslySetInnerHTML={{
                                    __html: decodeURI(demoProjectInfo.content),
                                }}
                            />
                        </Col>
                        <Col md={3}>
                            <WidgetComponent title='Bất động sản liên quan'>
                                {demoPostCompactModeVertical.map((item) => (
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
            {isLoaded && (
                <Modal show={false} size='lg' centered>
                    <Modal.Header closeButton>Vị trí</Modal.Header>
                    <Modal.Body>
                        <div
                            className='py-3 px-5 flex-wrap'
                            style={{ height: '80vh' }}
                        >
                            <MapComponent
                                lat={demoProjectInfo.coordinate.latitude}
                                lng={demoProjectInfo.coordinate.longitude}
                            />
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
