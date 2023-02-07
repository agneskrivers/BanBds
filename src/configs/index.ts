/* eslint-disable indent */
// Interfaces
import type { ISelectFilter, ISelect } from '@interfaces';

// ENV
export const GoogleAPI = process.env.NEXT_PUBLIC_GOOGLE_API as string;

export const FilterPrices: ISelectFilter[] = [
    {
        value: '62afdd23fc13ae2e41000014',
        min: 0,
        max: 1,
    },
    {
        value: '62afdd23fc13ae2e41000015',
        min: 1,
        max: 2,
    },
    {
        value: '62afdd23fc13ae2e41000016',
        min: 2,
        max: 3,
    },
    {
        value: '62afdd23fc13ae2e41000017',
        min: 4,
        max: 5,
    },
    {
        value: '62afdd23fc13ae2e41000018',
        min: 6,
        max: 7,
    },
    {
        value: '62afdd23fc13ae2e41000019',
        min: 7,
        max: 8,
    },
    {
        value: '62afdd23fc13ae2e4100001a',
        min: 8,
        max: 9,
    },
    {
        value: '62afdd23fc13ae2e4100001b',
        min: 9,
        max: 10,
    },
    {
        value: '62afdd23fc13ae2e4100001c',
        min: 10,
        max: 12,
    },
    {
        value: '62afdd23fc13ae2e4100001d',
        min: 12,
        max: 14,
    },
    {
        value: '62afdd23fc13ae2e4100001e',
        min: 14,
        max: 16,
    },
    {
        value: '62afdd23fc13ae2e4100001f',
        min: 16,
        max: 18,
    },
    {
        value: '62afdd23fc13ae2e41000020',
        min: 18,
        max: 20,
    },
    {
        value: '62afdd23fc13ae2e41000021',
        min: 20,
        max: 25,
    },
    {
        value: '62afdd23fc13ae2e41000022',
        min: 25,
        max: 30,
    },
    {
        value: '62afdd23fc13ae2e41000023',
        min: 30,
        max: 35,
    },
    {
        value: '62afdd23fc13ae2e41000024',
        min: 35,
        max: 40,
    },
    {
        value: '62afdd23fc13ae2e41000025',
        min: 40,
        max: 45,
    },
    {
        value: '62afdd23fc13ae2e41000026',
        min: 45,
        max: 50,
    },
    {
        value: '62afdd23fc13ae2e41000027',
        min: 60,
        max: 70,
    },
    {
        value: '62afdd23fc13ae2e41000028',
        min: 70,
        max: 80,
    },
    {
        value: '62afdd23fc13ae2e41000029',
        min: 80,
        max: 90,
    },
    {
        value: '62afdd23fc13ae2e4100002a',
        min: 90,
        max: 100,
    },
    {
        value: '62afdd23fc13ae2e4100002b',
        min: 100,
        max: 150,
    },
    {
        value: '62afdd23fc13ae2e4100002c',
        min: 150,
        max: 200,
    },
    {
        value: '62afdd23fc13ae2e4100002d',
        min: 200,
        max: 300,
    },
    {
        value: '62afdd23fc13ae2e4100002e',
        min: 300,
        max: 400,
    },
    {
        value: '62afdd23fc13ae2e4100002f',
        min: 400,
        max: 500,
    },
    {
        value: '62afdd23fc13ae2e41000030',
        min: 500,
        max: 1000,
    },
    {
        value: '62afdd23fc13ae2e41000031',
        min: 1000,
        max: 10000,
    },
];
export const FilterAcreages: ISelectFilter[] = [
    {
        value: '2a069bc9-8db1-42ae-8bd7-017c8a6ee422',
        min: 0,
        max: 20,
    },
    {
        value: 'bce597b9-7122-4c42-92ba-d931d41f3986',
        min: 20,
        max: 30,
    },
    {
        value: '2690123f-a544-4ce0-9be2-5120b7002297',
        min: 30,
        max: 40,
    },
    {
        value: 'eb6bb2fc-c1b7-459c-bb5f-3f062e9ccdf8',
        min: 40,
        max: 50,
    },
    {
        value: '2d4fa709-b824-47d4-b391-c33d3ccfa287',
        min: 50,
        max: 60,
    },
    {
        value: 'd365603c-f8d5-4e34-b009-4df79c9a4511',
        min: 60,
        max: 80,
    },
    {
        value: 'a9e95e64-d099-41f4-ba05-0e5b42075d45',
        min: 80,
        max: 100,
    },
    {
        value: 'b4a9d9bb-d156-4716-858e-268a878974c7',
        min: 100,
        max: 130,
    },
    {
        value: 'eb267284-3e9d-4b95-b682-39e5180877b1',
        min: 130,
        max: 160,
    },
    {
        value: '4b3427f5-e3ac-4ba7-9b5f-0e012014cf31',
        min: 160,
        max: 200,
    },
    {
        value: '73b5552f-b115-49c5-a6bf-8940e41df7c5',
        min: 200,
        max: 250,
    },
    {
        value: '6370b216-5399-49b4-baee-91f2823385cc',
        min: 300,
        max: 400,
    },
    {
        value: 'f6ebfa57-99b3-4a0c-8a6e-418295d0ca16',
        min: 400,
        max: 500,
    },
    {
        value: 'a68f3629-9efc-4558-bfec-543c0287d52c',
        min: 500,
        max: 700,
    },
    {
        value: 'ecf45cca-276c-4bad-b02a-1bb46170dca1',
        min: 700,
        max: 1000,
    },
    {
        value: 'd38b82cf-e234-4204-8c3c-2d954fe21f56',
        min: 1000,
        max: 1500,
    },
    {
        value: '116634e0-eada-49ad-99d8-212a92c78a27',
        min: 1500,
        max: 2000,
    },
    {
        value: 'edbf87e5-03d0-44a4-9231-d751d7c57f47',
        min: 2000,
        max: 3000,
    },
    {
        value: '11e38a87-44a1-4b3b-82d7-203260a34c22',
        min: 3000,
        max: 5000,
    },
    {
        value: '5ff6eb41-a5e5-422f-b15c-706c786d4d8f',
        min: 5000,
        max: 7000,
    },
    {
        value: '5c02926e-5efe-4b0b-8017-ace0fa4e4bcc',
        min: 7000,
        max: 10000,
    },
    {
        value: 'd95fcbc5-0056-46fe-b1c0-b817f1df3be2',
        min: 10000,
        max: 20000,
    },
    {
        value: 'de855959-37b0-43ca-b764-5668edc80420',
        min: 20000,
        max: 50000,
    },
    {
        value: 'ecceda31-6cb5-4c5e-ae2f-4d07ed6132a8',
        min: 50000,
        max: 100000,
    },
    {
        value: 'f6e1651a-fb2c-440a-8dad-9c816bc33902',
        min: 100000,
        max: 0,
    },
];
export const FilterProjects: ISelectFilter[] = [
    {
        value: '334e6e76-e9c8-40db-a393-3811c912ba79',
        min: 0,
        max: 5,
    },
    {
        value: 'd8550fb7-96d1-4fc8-91c0-8b06e50a66a7',
        min: 5,
        max: 10,
    },
    {
        value: '220c27bf-df72-48bb-bed2-2c774cf081d9',
        min: 10,
        max: 20,
    },
    {
        value: '73930f57-beae-4b10-9d3c-4faaa8298647',
        min: 20,
        max: 35,
    },
    {
        value: '0caa27dc-4c05-4b3e-881d-d939bd6a6e36',
        min: 35,
        max: 50,
    },
    {
        value: 'a8a750da-1194-415b-a81b-31a729eefd60',
        min: 50,
        max: 80,
    },
    {
        value: 'f46e849d-38c6-4d07-b2d6-29ced7ef5296',
        min: 80,
        max: 0,
    },
];

export const SelectSorts: ISelect[] = [
    {
        value: 'normally',
        label: 'Thông thường',
    },
    {
        value: 'latest',
        label: 'Tin đăng mới nhất',
    },
    {
        value: 'oldest',
        label: 'Tin đăng cũ nhất',
    },
    {
        value: 'priceIncrease',
        label: 'Giá tăng dần',
    },
    {
        value: 'priceDecrease',
        label: 'Giá giảm dần',
    },
    {
        value: 'acreageIncrease',
        label: 'Diện tích tăng dần',
    },
    {
        value: 'acreageDecrease',
        label: 'Diện tích giảm dần',
    },
];
export const SelectSortProjects: ISelect[] = [
    {
        value: 'latest',
        label: 'Mới nhất',
    },
    {
        value: 'oldest',
        label: 'Cũ nhất',
    },
    {
        value: 'priceIncrease',
        label: 'Giá cao nhất',
    },
    {
        value: 'priceDecrease',
        label: 'Giá thấp nhất',
    },
];
export const SelectDirection: ISelect[] = [
    {
        value: 'east',
        label: 'Đông',
    },
    {
        value: 'west',
        label: 'Tây',
    },
    {
        value: 'south',
        label: 'Nam',
    },
    {
        value: 'north',
        label: 'Bắc',
    },
    {
        value: 'northeast',
        label: 'Đông Bắc',
    },
    {
        value: 'northwest',
        label: 'Tây Bắc',
    },
    {
        value: 'southwest',
        label: 'Tây Nam',
    },
    {
        value: 'southeast',
        label: 'Đông Nam',
    },
];
export const SelectLegal: ISelect[] = [
    {
        value: 'book',
        label: 'Sổ đỏ/Sổ hồng',
    },
    {
        value: 'saleContract',
        label: 'Hợp đồng mua bán',
    },
    {
        value: 'waitingForBook',
        label: 'Đang chờ sổ',
    },
];
export const SelectCategory: ISelect[] = [
    {
        value: 'apartment',
        label: 'Chung cư',
    },
    {
        value: 'house',
        label: 'Nhà riêng',
    },
    {
        value: 'soil',
        label: 'Đất nền',
    },
];
export const SelectType: ISelect[] = [
    {
        value: 'sell',
        label: 'Mua bán',
    },
    {
        value: 'rent',
        label: 'Cho thuê',
    },
    {
        value: 'request',
        label: 'Cần mua',
    },
];
export const SelectFilterPrices: ISelect[] = [...FilterPrices].map(
    ({ value, min, max }) => ({
        value,
        label:
            min === 0
                ? '<= 1 tỷ'
                : min === 1000
                ? '> 1000 tỷ'
                : `${min} tỷ - ${max} tỷ`,
    })
);
export const SelectFilterAcreages: ISelect[] = [...FilterAcreages].map(
    ({ value, min, max }) => ({
        value,
        label:
            min === 0
                ? 'Dưới 20 m²'
                : max === 0
                ? `Trên ${min.toLocaleString('en')} m²`
                : `${min.toLocaleString()} m² - ${max.toLocaleString()} m²`,
    })
);
export const SelectFilterPricesProject: ISelect[] = [...FilterProjects].map(
    ({ value, min, max }) => ({
        value,
        label:
            min === 0
                ? 'Dưới 5 triệu/m²'
                : max === 0
                ? 'Trên 80 triệu/m²'
                : `${min} - ${max} triệu/m²`,
    })
);
