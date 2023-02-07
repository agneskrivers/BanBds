import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

// Styles
import Styles from '@client/scss/pages/post/index.module.scss';

// Components
import { MapComponent } from '@client/components';

// Helpers
import { formatPricePerSquareMeter, getName } from '@client/helpers';

// Layouts
import { WebLayout } from '@client/layouts';

// Interfaces
import type { NextPageWithLayout } from '@interfaces';

// Demo
import { demoPostInfo } from '../../../../demo/index';

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
                    <div className={Styles.header}>
                        <Col lg={4}>
                            <button
                                className={classNames(Styles.header_tab, {
                                    [Styles.header_tab_active]: true,
                                })}
                            >
                                Ảnh
                            </button>
                            <button
                                className={classNames(Styles.header_tab, {
                                    [Styles.header_tab_active]: false,
                                })}
                            >
                                Thông tin bất động sản
                            </button>
                        </Col>
                        <Col lg={8}>
                            <p className={Styles.header_info}>
                                {`${
                                    demoPostInfo.prices >= 1000
                                        ? demoPostInfo.prices / 1000
                                        : demoPostInfo.prices
                                } ${
                                    demoPostInfo.prices >= 1000 ? 'tỷ' : 'triệu'
                                } | ${demoPostInfo.acreages} m²`}
                            </p>
                            <p className={Styles.header_address}>
                                {demoPostInfo.address}
                            </p>
                        </Col>
                    </div>
                    <div
                        className={classNames(
                            'd-none',
                            'd-md-flex',
                            Styles.img
                        )}
                    >
                        <Row className='w-100'>
                            <Col md={demoPostInfo.images.length >= 3 ? 8 : 12}>
                                <div className={Styles.img_item}>
                                    <Image
                                        src={`/images/posts/${demoPostInfo.images[0]}`}
                                        fill
                                        alt={`Image ${demoPostInfo.title}`}
                                    />
                                </div>
                            </Col>
                            {demoPostInfo.images.length >= 3 && (
                                <Col md={4}>
                                    <div
                                        className={classNames(
                                            'd-flex',
                                            'flex-column',
                                            Styles.img_child
                                        )}
                                    >
                                        <div className={Styles.img_item}>
                                            <Image
                                                src={`/images/posts/${demoPostInfo.images[1]}`}
                                                fill
                                                alt={`Image ${demoPostInfo.title}`}
                                            />
                                        </div>
                                        <div className={Styles.img_item}>
                                            <Image
                                                src={`/images/posts/${demoPostInfo.images[2]}`}
                                                fill
                                                alt={`Image ${demoPostInfo.title}`}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Row>
                        {demoPostInfo.images.length > 3 && (
                            <div className={Styles.img_btn}>
                                <button>{`Xem tất cả ảnh (${demoPostInfo.images.length})`}</button>
                            </div>
                        )}
                    </div>
                    <Carousel className='d-md-none' indicators={false}>
                        {demoPostInfo.images.map((image, index) => (
                            <Carousel.Item
                                className={Styles.img_carousel}
                                key={image.split('.')[0]}
                            >
                                <Image
                                    src={`/images/posts/${image}`}
                                    alt={`Image ${demoPostInfo.title} ${index}`}
                                    fill
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className={Styles.content}>
                        <Row>
                            <Col lg={8}>
                                <h1
                                    className={classNames(
                                        'font-weight-bold',
                                        'text-uppercase',
                                        Styles.title
                                    )}
                                >
                                    {demoPostInfo.title}
                                </h1>
                                <div
                                    className={classNames(
                                        'd-flex justify-content-between align-items-center',
                                        Styles.address
                                    )}
                                >
                                    <OverlayTrigger
                                        overlay={<Tooltip>Xem bản đồ</Tooltip>}
                                    >
                                        <p>{demoPostInfo.address}</p>
                                    </OverlayTrigger>
                                    <p>{`Ngày đăng: ${dayjs(
                                        demoPostInfo.time
                                    ).format('DD/MM/YYYY')}`}</p>
                                </div>
                                <div className={Styles.infoCompact}>
                                    <Row>
                                        <Col xs={6}>
                                            <p>Giá bán</p>
                                            <p>{`${
                                                demoPostInfo.prices >= 1000
                                                    ? demoPostInfo.prices / 1000
                                                    : demoPostInfo.prices
                                            } ${
                                                demoPostInfo.prices >= 1000
                                                    ? 'tỷ'
                                                    : 'triệu'
                                            }`}</p>
                                            <span>
                                                {formatPricePerSquareMeter(
                                                    demoPostInfo.acreages,
                                                    demoPostInfo.prices
                                                )}
                                            </span>
                                        </Col>
                                        <Col xs={6}>
                                            <p>Diện tích</p>
                                            <p>{`${demoPostInfo.acreages} m²`}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={Styles.info}>
                                    <h3 className={Styles.info_title}>
                                        Thông tin mô tả
                                    </h3>
                                    <p className={Styles.info_content}>
                                        {decodeURI(demoPostInfo.content)}
                                    </p>
                                </div>
                                <div className={Styles.info}>
                                    <h3 className={Styles.info_title}>
                                        Thông tin chi tiết
                                    </h3>
                                    <div className={Styles.info_content}>
                                        <Row>
                                            <Col xs={6}>
                                                <span>Loại nhà đất</span>
                                            </Col>
                                            <Col xs={6}>
                                                <p>
                                                    {getName.post.category(
                                                        demoPostInfo.category
                                                    )}
                                                </p>
                                            </Col>
                                        </Row>
                                        {demoPostInfo.direction && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>Hướng nhà</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>
                                                        {getName.post.direction(
                                                            demoPostInfo.direction
                                                        )}
                                                    </p>
                                                </Col>
                                            </Row>
                                        )}
                                        {demoPostInfo.facades && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>Mặt tiền</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>{`${demoPostInfo.facades}m`}</p>
                                                </Col>
                                            </Row>
                                        )}
                                        {demoPostInfo.ways && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>Đường vào</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>{`${demoPostInfo.ways}m`}</p>
                                                </Col>
                                            </Row>
                                        )}
                                        {demoPostInfo.legal && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>Giấy tờ pháp lý</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>
                                                        {getName.post.legal(
                                                            demoPostInfo.legal
                                                        )}
                                                    </p>
                                                </Col>
                                            </Row>
                                        )}
                                    </div>
                                </div>
                                <div className={Styles.info}>
                                    <h3 className={Styles.info_title}>
                                        Thông tin tin đăng
                                    </h3>
                                    <div className={Styles.info_content}>
                                        <Row>
                                            <Col xs={6}>
                                                <span>Mã tin đăng</span>
                                            </Col>
                                            <Col xs={6}>
                                                <p>{demoPostInfo.postID}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <span>Số lượt xem</span>
                                            </Col>
                                            <Col xs={6}>
                                                <p>
                                                    {demoPostInfo.views.toLocaleString()}
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div
                                    className={classNames(
                                        'sticky-top',
                                        Styles.author
                                    )}
                                >
                                    <div className='d-flex align-items-center'>
                                        <Image
                                            src={
                                                demoPostInfo.avatar
                                                    ? `/images/avatars/${demoPostInfo.avatar}`
                                                    : '/images/common/avatar.png'
                                            }
                                            width={80}
                                            height={80}
                                            alt={demoPostInfo.contact}
                                            className={Styles.author_img}
                                        />
                                        <h4 className={Styles.author_name}>
                                            {demoPostInfo.contact}
                                        </h4>
                                    </div>
                                    <hr />
                                    <Button
                                        className={Styles.author_btn}
                                        variant='primary'
                                    >
                                        Hiện số
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </main>
            {isLoaded && (
                <>
                    <Modal show={false} size='lg' centered>
                        <Modal.Header closeButton>Vị trí</Modal.Header>
                        <Modal.Body>
                            <div
                                className='py-3 px-5 flex-wrap'
                                style={{ height: '80vh' }}
                            >
                                <MapComponent
                                    lat={demoPostInfo.coordinate.latitude}
                                    lng={demoPostInfo.coordinate.longitude}
                                />
                            </div>
                        </Modal.Body>
                    </Modal>
                    <Modal show={false} size='lg' centered>
                        <Modal.Header closeButton>Ảnh</Modal.Header>
                        <Modal.Body>
                            <Carousel indicators={false}>
                                {demoPostInfo.images.map((image, index) => (
                                    <Carousel.Item
                                        className={Styles.img_carousel}
                                        key={image.split('.')[0]}
                                        style={{ height: '50vh' }}
                                    >
                                        <Image
                                            src={`/images/posts/${image}`}
                                            alt={`Image ${demoPostInfo.title} ${index}`}
                                            fill
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </>
    );
};

Index.getLayout = (page) => <WebLayout>{page}</WebLayout>;

export default Index;
