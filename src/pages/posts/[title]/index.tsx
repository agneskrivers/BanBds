import React, { useState, useEffect, useRef } from 'react';
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
import ErrorComponent from 'next/error';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

// Styles
import Styles from '@client/scss/pages/post/index.module.scss';

// Components
import { MapComponent } from '@client/components';

// Helpers
import {
    formatPricePerSquareMeter,
    getName,
    formatPhoneNumber,
} from '@client/helpers';

// Layouts
import { WebLayout } from '@client/layouts';

// Services
import services from '@client/services';

// Interfaces
import type {
    NextPageWithLayout,
    IPropsSeverSide,
    IPostInfoForWeb,
    IClientLocalStorage,
} from '@interfaces';

// Props
type Props = IPropsSeverSide<IPostInfoForWeb>;

const Index: NextPageWithLayout<Props> = (props) => {
    // States
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isShowPhone, setIsShowPhone] = useState<boolean>(false);

    const [isHeader, setIsHeader] = useState<boolean>(false);
    const [isImages, setIsImages] = useState<boolean>(true);
    const [isInfo, setIsInfo] = useState<boolean>(false);

    const [isModalImages, setIsModalImages] = useState<boolean>(false);
    const [isModalMap, setIsModalMap] = useState<boolean>(false);

    const [phoneCopy, setPhoneCopy] = useState<string>();

    // Ref
    const divImageRef = useRef<HTMLDivElement | null>(null);

    // Effects
    useEffect(() => {
        const controller = new AbortController();

        const getData = async (signal: AbortSignal, postID: number) => {
            await services.posts.count(signal, postID);
        };

        const checkPost = (postID: number): boolean => {
            const local = localStorage.getItem('session');

            if (!local) {
                const createLocal: IClientLocalStorage = {
                    data: { posts: [postID] },
                    expired: Date.now() + 6 * 60 * 60 * 1000,
                };

                localStorage.setItem('session', JSON.stringify(createLocal));

                return true;
            }

            const storage = JSON.parse(local) as IClientLocalStorage;

            if (storage.expired < Date.now()) {
                localStorage.removeItem('session');

                const createLocal: IClientLocalStorage = {
                    data: { posts: [postID] },
                    expired: Date.now() + 6 * 60 * 60 * 1000,
                };

                localStorage.setItem('session', JSON.stringify(createLocal));

                return true;
            }

            const { posts } = storage.data;

            if (!posts) {
                const updateStorage: IClientLocalStorage = {
                    ...storage,
                    data: {
                        ...storage.data,
                        posts: [postID],
                    },
                };

                localStorage.removeItem('session');
                localStorage.setItem('session', JSON.stringify(updateStorage));

                return true;
            }

            if (posts.includes(postID)) return false;

            const updateStorage: IClientLocalStorage = {
                ...storage,
                data: {
                    ...storage.data,
                    posts: [...posts, postID],
                },
            };

            localStorage.removeItem('session');
            localStorage.setItem('session', JSON.stringify(updateStorage));

            return true;
        };

        if (props.status === 'success') {
            const isCount = checkPost(props.postID);

            if (isCount) {
                getData(controller.signal, props.postID);
            }
        }

        setIsLoaded(true);

        return () => controller.abort();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const offsetY = window.scrollY;

            if (offsetY <= 72) {
                setIsHeader(false);
            } else {
                setIsHeader(true);
            }

            if (divImageRef && divImageRef.current) {
                const offset =
                    divImageRef.current.offsetHeight +
                    divImageRef.current.offsetTop;

                if (offsetY >= offset) {
                    setIsInfo(true);
                    setIsImages(false);
                } else {
                    setIsImages(true);
                    setIsInfo(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        let id: NodeJS.Timeout;

        if (phoneCopy) {
            id = setTimeout(() => setPhoneCopy(undefined), 3000);
        }

        return () => clearTimeout(id);
    }, [phoneCopy]);

    // Handles
    const handleOpenModalImages = () => setIsModalImages(true);
    const handleCloseModalImages = () => setIsModalImages(false);

    const handleOpenModalMap = () => setIsModalMap(true);
    const handleCloseModalMap = () => setIsModalMap(false);

    const handleClickShowPhone = (phone?: string) => {
        if (!phone) return setIsShowPhone(true);

        navigator.clipboard.writeText(phone);
        setPhoneCopy(phone);
    };

    if (props.status === 'error') return <ErrorComponent statusCode={500} />;

    return (
        <>
            <Head>
                <title>{`${props.title} - BanBds`}</title>
            </Head>
            <main>
                <Container>
                    <div
                        className={classNames(Styles.header, {
                            [Styles.header_active]: isHeader,
                        })}
                    >
                        <Col lg={4}>
                            <button
                                className={classNames(Styles.header_tab, {
                                    [Styles.header_tab_active]: isImages,
                                })}
                            >
                                ???nh
                            </button>
                            <button
                                className={classNames(Styles.header_tab, {
                                    [Styles.header_tab_active]: isInfo,
                                })}
                            >
                                Th??ng tin b???t ?????ng s???n
                            </button>
                        </Col>
                        <Col lg={8}>
                            <p className={Styles.header_info}>
                                {`${
                                    props.prices >= 1000
                                        ? props.prices / 1000
                                        : props.prices
                                } ${props.prices >= 1000 ? 't???' : 'tri???u'} | ${
                                    props.acreages
                                } m??`}
                            </p>
                            <p className={Styles.header_address}>
                                {props.address}
                            </p>
                        </Col>
                    </div>
                    <div
                        className={classNames(
                            'd-none',
                            'd-md-flex',
                            Styles.img
                        )}
                        ref={divImageRef}
                        onClick={handleOpenModalImages}
                    >
                        <Row className='w-100'>
                            <Col md={props.images.length >= 3 ? 8 : 12}>
                                <div className={Styles.img_item}>
                                    <Image
                                        src={`/images/posts/${props.images[0]}`}
                                        fill
                                        alt={`Image ${props.title}`}
                                    />
                                </div>
                            </Col>
                            {props.images.length >= 3 && (
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
                                                src={`/images/posts/${props.images[1]}`}
                                                fill
                                                alt={`Image ${props.title}`}
                                            />
                                        </div>
                                        <div className={Styles.img_item}>
                                            <Image
                                                src={`/images/posts/${props.images[2]}`}
                                                fill
                                                alt={`Image ${props.title}`}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Row>
                        {props.images.length > 3 && (
                            <div className={Styles.img_btn}>
                                <button>{`Xem t???t c??? ???nh (${props.images.length})`}</button>
                            </div>
                        )}
                    </div>
                    <Carousel className='d-md-none' indicators={false}>
                        {props.images.map((image, index) => (
                            <Carousel.Item
                                className={Styles.img_carousel}
                                key={image.split('.')[0]}
                            >
                                <Image
                                    src={`/images/posts/${image}`}
                                    alt={`Image ${props.title} ${index}`}
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
                                    {props.title}
                                </h1>
                                <div
                                    className={classNames(
                                        'd-flex justify-content-between align-items-center',
                                        Styles.address
                                    )}
                                >
                                    <OverlayTrigger
                                        overlay={<Tooltip>Xem b???n ?????</Tooltip>}
                                    >
                                        <p onClick={handleOpenModalMap}>
                                            {props.address}
                                        </p>
                                    </OverlayTrigger>
                                    <p>{`Ng??y ????ng: ${dayjs(props.time).format(
                                        'DD/MM/YYYY'
                                    )}`}</p>
                                </div>
                                <div className={Styles.infoCompact}>
                                    <Row>
                                        <Col xs={6}>
                                            <p>
                                                {props.type === 'sell'
                                                    ? 'Gi?? b??n'
                                                    : 'M???c gi??'}
                                            </p>
                                            <p>{`${
                                                props.prices >= 1000
                                                    ? props.prices / 1000
                                                    : props.prices
                                            } ${
                                                props.prices >= 1000
                                                    ? 't???'
                                                    : 'tri???u'
                                            }${
                                                props.type === 'rent'
                                                    ? '/th??ng'
                                                    : ''
                                            }`}</p>
                                            {props.type === 'sell' && (
                                                <span>
                                                    {formatPricePerSquareMeter(
                                                        props.acreages,
                                                        props.prices
                                                    )}
                                                </span>
                                            )}
                                        </Col>
                                        <Col xs={6}>
                                            <p>Di???n t??ch</p>
                                            <p>{`${props.acreages} m??`}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={Styles.info}>
                                    <h3 className={Styles.info_title}>
                                        Th??ng tin m?? t???
                                    </h3>
                                    <p className={Styles.info_content}>
                                        {decodeURI(props.content)}
                                    </p>
                                </div>
                                <div className={Styles.info}>
                                    <h3 className={Styles.info_title}>
                                        Th??ng tin chi ti???t
                                    </h3>
                                    <div className={Styles.info_content}>
                                        <Row>
                                            <Col xs={6}>
                                                <span>Lo???i nh?? ?????t</span>
                                            </Col>
                                            <Col xs={6}>
                                                <p>
                                                    {getName.post.category(
                                                        props.category
                                                    )}
                                                </p>
                                            </Col>
                                        </Row>
                                        {props.direction && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>H?????ng nh??</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>
                                                        {getName.post.direction(
                                                            props.direction
                                                        )}
                                                    </p>
                                                </Col>
                                            </Row>
                                        )}
                                        {props.facades && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>M???t ti???n</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>{`${props.facades}m`}</p>
                                                </Col>
                                            </Row>
                                        )}
                                        {props.ways && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>???????ng v??o</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>{`${props.ways}m`}</p>
                                                </Col>
                                            </Row>
                                        )}
                                        {props.legal && (
                                            <Row>
                                                <Col xs={6}>
                                                    <span>Gi???y t??? ph??p l??</span>
                                                </Col>
                                                <Col xs={6}>
                                                    <p>
                                                        {getName.post.legal(
                                                            props.legal
                                                        )}
                                                    </p>
                                                </Col>
                                            </Row>
                                        )}
                                    </div>
                                </div>
                                <div className={Styles.info}>
                                    <h3 className={Styles.info_title}>
                                        Th??ng tin tin ????ng
                                    </h3>
                                    <div className={Styles.info_content}>
                                        <Row>
                                            <Col xs={6}>
                                                <span>M?? tin ????ng</span>
                                            </Col>
                                            <Col xs={6}>
                                                <p>{props.postID}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <span>S??? l?????t xem</span>
                                            </Col>
                                            <Col xs={6}>
                                                <p>
                                                    {props.views.toLocaleString()}
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
                                                props.avatar
                                                    ? `/images/avatars/${props.avatar}`
                                                    : '/images/common/avatar.png'
                                            }
                                            width={80}
                                            height={80}
                                            alt={props.contact}
                                            className={Styles.author_img}
                                        />
                                        <h4 className={Styles.author_name}>
                                            {props.contact}
                                        </h4>
                                    </div>
                                    <hr />
                                    {!isShowPhone ? (
                                        <Button
                                            className={Styles.author_btn}
                                            variant='primary'
                                            onClick={() =>
                                                handleClickShowPhone()
                                            }
                                        >
                                            Hi???n s???
                                        </Button>
                                    ) : (
                                        props.phoneNumber.map((item) => (
                                            <OverlayTrigger
                                                key={item}
                                                placement='top'
                                                overlay={
                                                    <Tooltip
                                                        id={`tooltip-${item}`}
                                                    >
                                                        {phoneCopy &&
                                                        phoneCopy === item
                                                            ? '???? sao ch??p'
                                                            : 'Sao ch??p'}
                                                    </Tooltip>
                                                }
                                            >
                                                <Button
                                                    className={
                                                        Styles.author_btn
                                                    }
                                                    variant='primary'
                                                    onClick={() =>
                                                        handleClickShowPhone(
                                                            item
                                                        )
                                                    }
                                                >
                                                    {formatPhoneNumber(item)}
                                                </Button>
                                            </OverlayTrigger>
                                        ))
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </main>
            {isLoaded && (
                <>
                    <Modal
                        show={isModalMap}
                        onHide={handleCloseModalMap}
                        size='lg'
                        centered
                    >
                        <Modal.Header closeButton>V??? tr??</Modal.Header>
                        <Modal.Body>
                            <div
                                className='py-3 px-5 flex-wrap'
                                style={{ height: '80vh' }}
                            >
                                <MapComponent
                                    lat={props.coordinate.latitude}
                                    lng={props.coordinate.longitude}
                                />
                            </div>
                        </Modal.Body>
                    </Modal>
                    <Modal
                        show={isModalImages}
                        onHide={handleCloseModalImages}
                        size='lg'
                        centered
                    >
                        <Modal.Body>
                            <Carousel indicators={false}>
                                {props.images.map((image, index) => (
                                    <Carousel.Item
                                        className={Styles.img_carousel}
                                        key={image.split('.')[0]}
                                        style={{ height: '50vh' }}
                                    >
                                        <Image
                                            src={`/images/posts/${image}`}
                                            alt={`Image ${props.title} ${index}`}
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

    const postID = parseInt(id);

    const result = await services.posts.info(postID);

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
            ...result,
            status: 'success',
        },
    };
};

export default Index;
