/* eslint-disable indent */
// Interfaces
import type { ISelectFilter, ISelect } from '@interfaces';

// ENV
export const GoogleAPI = process.env.NEXT_PUBLIC_GOOGLE_API as string;
export const HomePage = process.env.NEXT_PUBLIC_HOME_PAGE as string;
export const LimitRenewOTP = parseInt(
    process.env.NEXT_PUBLIC_LIMIT_RENEW_OTP as string
);
export const LimitFailedOTP = parseInt(
    process.env.NEXT_PUBLIC_LIMIT_FAILED_OTP as string
);

// Regex
export const regexPhoneNumber = /(0+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;

export const FilterPrices: ISelectFilter[] = [
    {
        value: '62afdd23fc13ae2e41000014',
        min: 0,
        max: 500,
    },
    {
        value: '62afdd23fc13ae2e41000015',
        min: 800,
        max: 1000,
    },
    {
        value: '62afdd23fc13ae2e41000016',
        min: 1000,
        max: 2000,
    },
    {
        value: '62afdd23fc13ae2e41000017',
        min: 2000,
        max: 3000,
    },
    {
        value: '62afdd23fc13ae2e41000018',
        min: 3000,
        max: 5000,
    },
    {
        value: '62afdd23fc13ae2e41000019',
        min: 5000,
        max: 7000,
    },
    {
        value: '62afdd23fc13ae2e4100001a',
        min: 7000,
        max: 10000,
    },
    {
        value: '62afdd23fc13ae2e4100001b',
        min: 10000,
        max: 20000,
    },
    {
        value: '62afdd23fc13ae2e4100001c',
        min: 20000,
        max: 30000,
    },
    {
        value: '62afdd23fc13ae2e4100001d',
        min: 30000,
        max: 40000,
    },
    {
        value: '62afdd23fc13ae2e4100001e',
        min: 40000,
        max: 60000,
    },
    {
        value: '62afdd23fc13ae2e4100001f',
        min: 60000,
        max: 0,
    },
];
export const FilterAcreages: ISelectFilter[] = [
    {
        value: '2a069bc9-8db1-42ae-8bd7-017c8a6ee422',
        min: 0,
        max: 30,
    },
    {
        value: 'bce597b9-7122-4c42-92ba-d931d41f3986',
        min: 30,
        max: 50,
    },
    {
        value: '2690123f-a544-4ce0-9be2-5120b7002297',
        min: 50,
        max: 80,
    },
    {
        value: 'eb6bb2fc-c1b7-459c-bb5f-3f062e9ccdf8',
        min: 80,
        max: 100,
    },
    {
        value: '2d4fa709-b824-47d4-b391-c33d3ccfa287',
        min: 100,
        max: 150,
    },
    {
        value: 'd365603c-f8d5-4e34-b009-4df79c9a4511',
        min: 150,
        max: 200,
    },
    {
        value: 'a9e95e64-d099-41f4-ba05-0e5b42075d45',
        min: 200,
        max: 250,
    },
    {
        value: 'b4a9d9bb-d156-4716-858e-268a878974c7',
        min: 250,
        max: 300,
    },
    {
        value: 'eb267284-3e9d-4b95-b682-39e5180877b1',
        min: 300,
        max: 500,
    },
    {
        value: '4b3427f5-e3ac-4ba7-9b5f-0e012014cf31',
        min: 500,
        max: 600,
    },
    {
        value: '73b5552f-b115-49c5-a6bf-8940e41df7c5',
        min: 600,
        max: 700,
    },
    {
        value: '6370b216-5399-49b4-baee-91f2823385cc',
        min: 700,
        max: 800,
    },
    {
        value: 'f6ebfa57-99b3-4a0c-8a6e-418295d0ca16',
        min: 800,
        max: 900,
    },
    {
        value: 'a68f3629-9efc-4558-bfec-543c0287d52c',
        min: 900,
        max: 1000,
    },
    {
        value: 'ecf45cca-276c-4bad-b02a-1bb46170dca1',
        min: 1000,
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

// Select Post
export const SelectSorts: ISelect[] = [
    {
        value: 'normally',
        label: 'Th??ng th?????ng',
    },
    {
        value: 'latest',
        label: 'Tin ????ng m???i nh???t',
    },
    {
        value: 'oldest',
        label: 'Tin ????ng c?? nh???t',
    },
    {
        value: 'priceIncrease',
        label: 'Gi?? t??ng d???n',
    },
    {
        value: 'priceDecrease',
        label: 'Gi?? gi???m d???n',
    },
    {
        value: 'acreageIncrease',
        label: 'Di???n t??ch t??ng d???n',
    },
    {
        value: 'acreageDecrease',
        label: 'Di???n t??ch gi???m d???n',
    },
];
export const SelectSortProjects: ISelect[] = [
    {
        value: 'latest',
        label: 'M???i nh???t',
    },
    {
        value: 'oldest',
        label: 'C?? nh???t',
    },
    {
        value: 'priceIncrease',
        label: 'Gi?? cao nh???t',
    },
    {
        value: 'priceDecrease',
        label: 'Gi?? th???p nh???t',
    },
];
export const SelectDirection: ISelect[] = [
    {
        value: 'east',
        label: '????ng',
    },
    {
        value: 'west',
        label: 'T??y',
    },
    {
        value: 'south',
        label: 'Nam',
    },
    {
        value: 'north',
        label: 'B???c',
    },
    {
        value: 'northeast',
        label: '????ng B???c',
    },
    {
        value: 'northwest',
        label: 'T??y B???c',
    },
    {
        value: 'southwest',
        label: 'T??y Nam',
    },
    {
        value: 'southeast',
        label: '????ng Nam',
    },
];
export const SelectLegal: ISelect[] = [
    {
        value: 'book',
        label: 'S??? ?????/S??? h???ng',
    },
    {
        value: 'saleContract',
        label: 'H???p ?????ng mua b??n',
    },
    {
        value: 'waitingForBook',
        label: '??ang ch??? s???',
    },
];
export const SelectCategory: ISelect[] = [
    {
        value: 'apartment',
        label: 'Chung c??',
    },
    {
        value: 'house',
        label: 'Nh?? ri??ng',
    },
    {
        value: 'soil',
        label: '?????t n???n',
    },
];
export const SelectType: ISelect[] = [
    {
        value: 'sell',
        label: 'Mua b??n',
    },
    {
        value: 'rent',
        label: 'Cho thu??',
    },
    {
        value: 'request',
        label: 'C???n mua',
    },
];
export const SelectFilterPrices: ISelect[] = [...FilterPrices].map(
    ({ value, min, max }) => ({
        value,
        label:
            min === 0
                ? 'D?????i 500 tri???u'
                : max === 0
                ? 'Tr??n 60 t???'
                : `${min >= 1000 ? min / 1000 : min} ${
                      min >= 1000 ? 't???' : 'tri???u'
                  } - ${max >= 1000 ? max / 1000 : max} ${
                      max >= 1000 ? 't???' : 'tri???u'
                  }`,
    })
);
export const SelectFilterAcreages: ISelect[] = [...FilterAcreages].map(
    ({ value, min, max }) => ({
        value,
        label:
            min === 0
                ? 'D?????i 30 m??'
                : max === 0
                ? 'Tr??n 1,000 m??'
                : `${min.toLocaleString()} m?? - ${max.toLocaleString()} m??`,
    })
);

// Select Project
export const SelectFilterPricesProject: ISelect[] = [...FilterProjects].map(
    ({ value, min, max }) => ({
        value,
        label:
            min === 0
                ? 'D?????i 5 tri???u/m??'
                : max === 0
                ? 'Tr??n 80 tri???u/m??'
                : `${min} - ${max} tri???u/m??`,
    })
);
export const SelectFilterStatusProject: ISelect[] = [
    {
        value: 'handedOver',
        label: '???? b??n giao',
    },
    {
        value: 'onSale',
        label: '??ang m??? b??n',
    },
    {
        value: 'openingSoon',
        label: 'S???p m??? b??n',
    },
];
export const SelectFilterTypeProject: ISelect[] = [
    {
        value: 'apartment',
        label: 'Chung c??',
    },
    {
        value: 'land',
        label: '?????t n???n',
    },
];

export const SelectFormType: ISelect[] = [
    {
        label: 'Mua b??n',
        value: 'sell',
    },
    {
        label: 'Cho thu??',
        value: 'rent',
    },
    {
        value: 'request',
        label: 'Y??u c???u',
    },
];
