// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
    async rewrites() {
        return [
            {
                source: '/chinh-sach-bao-mat',
                destination: '/privacy',
            },
            {
                source: '/dieu-khoan-thoa-thuan',
                destination: '/terms',
            },
            {
                source: '/giai-quyet-khieu-nai',
                destination: '/complaints',
            },
        ];
    },
    images: {
        domains: ['batdongsan.com.vn', 'file4.batdongsan.com.vn'],
    },
};
