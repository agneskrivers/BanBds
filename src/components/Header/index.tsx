import React, { FunctionComponent, useContext, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Image as ImageBootstrap } from 'react-bootstrap';

// Styles
import Styles from './style/index.module.scss';

// Context
import { Context } from '@client/context/Web';

const Index: FunctionComponent = () => {
    // States
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const [isUser, setIsUser] = useState<boolean>(false);

    // Hooks
    const { user, onLogout } = useContext(Context);

    return (
        <>
            <div className={classNames({ [Styles.bg]: false })} />
            <header className={Styles.header}>
                <div className={Styles.content}>
                    <div
                        className={classNames(Styles.block, Styles.block_left)}
                    >
                        <h1>
                            <Link
                                href='/'
                                className={classNames(
                                    Styles.menu_item,
                                    Styles.logo
                                )}
                            >
                                <>
                                    <Image
                                        src='/images/common/logo-light.png'
                                        width={140}
                                        height={30}
                                        alt='banbds.vn'
                                    />
                                </>
                            </Link>
                        </h1>
                        <Link
                            href='/mua-ban-nha-dat'
                            className={classNames(
                                Styles.menu_item,
                                Styles.menu_item_bg
                            )}
                        >
                            Mua bán
                        </Link>
                        <Link
                            href='/cho-thue-nha-dat'
                            className={classNames(
                                Styles.menu_item,
                                Styles.menu_item_bg
                            )}
                        >
                            Cho thuê
                        </Link>
                        <Link
                            href='/du-an'
                            className={classNames(
                                Styles.menu_item,
                                Styles.menu_item_bg
                            )}
                        >
                            Dự án
                        </Link>
                        <Link
                            href='/tin-tuc'
                            className={classNames(
                                Styles.menu_item,
                                Styles.menu_item_bg
                            )}
                        >
                            Tin tức
                        </Link>
                    </div>
                    <div
                        className={classNames(Styles.block, Styles.block_right)}
                    >
                        {user && (
                            <div
                                className={Styles.menu_box}
                                style={{ border: 'none' }}
                            >
                                <div className={Styles.menu_avatar}>
                                    <ImageBootstrap
                                        src={
                                            user.avatar
                                                ? `/images/avatars/${user.avatar}`
                                                : '/images/avatar-default.png'
                                        }
                                        width={20}
                                        height={20}
                                        roundedCircle
                                    />
                                    <span className='mx-2'>
                                        {
                                            user.fullName.split(' ')[
                                                user.fullName.split(' ')
                                                    .length - 1
                                            ]
                                        }
                                    </span>
                                    <i className='material-icons'>
                                        expand_more
                                    </i>
                                </div>
                                <div
                                    className={classNames(Styles.avatar, {
                                        [Styles.avatar_active]: isUser,
                                    })}
                                >
                                    <div className='d-flex align-items-center w-100'>
                                        <div
                                            className={classNames(
                                                Styles.avatar_param,
                                                Styles.avatar_left
                                            )}
                                        >
                                            <div
                                                className={
                                                    Styles.avatar_param_title
                                                }
                                            >
                                                <i className='material-icons-outlined'>
                                                    home_work
                                                </i>
                                                <p>Tin đã đăng</p>
                                            </div>
                                            <h3
                                                className={
                                                    Styles.avatar_param_value
                                                }
                                            >
                                                {`${user.posts.accept} tin`}
                                            </h3>
                                        </div>
                                        <div
                                            className={classNames(
                                                Styles.avatar_param,
                                                Styles.avatar_right
                                            )}
                                        >
                                            <div
                                                className={
                                                    Styles.avatar_param_title
                                                }
                                            >
                                                <i className='material-icons-outlined'>
                                                    add_home_work
                                                </i>
                                                <p>Tin chờ duyệt</p>
                                            </div>
                                            <h3
                                                className={
                                                    Styles.avatar_param_value
                                                }
                                            >
                                                {`${user.posts.pending} tin`}
                                            </h3>
                                        </div>
                                    </div>
                                    <Link
                                        href='/thong-tin-ca-nhan'
                                        className={classNames(
                                            'w-100',
                                            Styles.avatar_item
                                        )}
                                    >
                                        <>
                                            <i className='material-icons-outlined'>
                                                account_circle
                                            </i>
                                            <span>Thông tin cá nhân</span>
                                        </>
                                    </Link>
                                    <Link
                                        href='/quan-ly-tin-dang'
                                        className={classNames(
                                            'w-100',
                                            Styles.avatar_item
                                        )}
                                    >
                                        <>
                                            <i className='material-icons-outlined'>
                                                business_center
                                            </i>
                                            <span>Quản lý tin đăng</span>
                                        </>
                                    </Link>
                                    <hr
                                        style={{
                                            margin: 0,
                                            color: 'var(--bs-gray)',
                                        }}
                                    />
                                    <Button
                                        className={Styles.avatar_logout}
                                        variant='outline_danger'
                                        onClick={onLogout}
                                    >
                                        Đăng xuất
                                    </Button>
                                </div>
                            </div>
                        )}
                        <div
                            className={classNames(Styles.menu, {
                                [Styles.active]: isMenu,
                            })}
                        >
                            <Link href='#' className={Styles.menu_item}>
                                <>
                                    <i className='material-icons'>download</i>{' '}
                                    Tải APP
                                </>
                            </Link>
                            {!user && (
                                <button className={Styles.menu_item}>
                                    Đăng nhập
                                </button>
                            )}
                            <div className={Styles.menu_box}>
                                <Link
                                    href='/dang-tin'
                                    className={Styles.menu_item}
                                >
                                    <>
                                        <i className='material-icons'>
                                            account_box
                                        </i>{' '}
                                        Đăng tin BĐS
                                    </>
                                </Link>
                            </div>
                        </div>
                        <Button className={Styles.menu_mobile}>
                            <i className='material-icons-outlined'>menu</i>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Index;
