const data = [
    {
        id: 1,
        name: 'Áo Juventus',
        image: 'https://file.hstatic.net/200000290829/file/juventus-21-22-kit-2_b3c5fde7af0540309384d5fd42d99ce5_grande.jpg',
        brand: 'Nike',
        price: 150000,
        chip: 'vải trơn'
    },
    {
        id: 2,
        name: 'Áo Barcelona',
        image: 'https://aobongda24h.com/pic/product/ao-barcel_636955193402295258_HasThumb.jpg',
        brand: 'Nike',
        price: 120000,
        chip: 'Vải gai thường'
    },
    {
        id: 3,
        name: 'Áo Liverpool',
        image: 'https://cf.shopee.vn/file/a6e04fe3f7776aa03920168a28611496',
        brand: 'Kappa',
        price: 130000,
        chip: 'Vải Fake 1'
    },
    {
        id: 4,
        name: 'Áo Real Madrid',
        image: 'data:image/jpeg;base64,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FqbHqLXZfiPGeueztxU4Xp+15zVok6SuPYZZgcpHC42lVF6VRKg+wwb32MmVnlwuOpuUyQimJvEoIAyM2ARAIXkwJlBM4ioqC7sFHViFHvMlS0I5ZSdsNsrhcMz3HeMCtIfaP8VuijU+nWcu2u3mEogim3fuBwp+xf7VXhbyufCfPaNHGbXxVwMwBszWIo0F42v155dWPxHssNnbalaXRWp57S1/GF7PsnZC/wBBwt+PcU//AFEtpDD0Qiqi8FUKPICwk54m6up2EREAREQBERAEREAREQBERAEREAREQCNSmGBVgGUixBAII6EHQieT2n+znAVblEbDsf8AotZf7tgVA8FAnromoTlB1i6EcVK5o+S7R/ZNXBvRxFKpY6CorUmH4lzAn0ErH7M7aomwXEEDnSxIZT+HvAfeJ9tiehbZaflR8UcuwhlcfEnxO2qfFMd/cvU+IQzQ+39rDQnFr4nDsPnSn3SLy/VL+iPInY6SfM+AntBtX/uMSfAUrH4JMDae1m41MafupVB/wKJ9/vF5fqo/0IvZPOTPglHAbWq+zT2g39Ya6D31SBLTZv7MsdVOeuadIniaj9648lS4P9sT7PEfW2i+1JeXz0J9PHO88Rsj9mWDpWNYviGHJzkp3/q04+TMwntMPQSmoSmioiiyqgCqo6BRoJOJ5p2kpusnU7Rio4IRETBRERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/Z',
        brand: 'Kappa',
        price: 140000,
        chip: 'Vải thun lạnh 4 chiều'
    },
    {
    id: 5,
    name: 'Áo Bayern Munich',
    image: 'https://www.goalinn.com/f/13810/138102179/adidas-fc-bayern-munich-21-22-away-shirt.jpg',
    brand: 'Puma',
    price: 190000,
    chip: 'Vải thun lạnh 4 chiều'
},
{
    id: 6,
    name: 'Áo Manchester City',
    image: 'https://www.goalinn.com/f/13810/138102179/adidas-fc-bayern-munich-21-22-away-shirt.jpg',
    brand: 'Puma',
    price: 190000,
    chip: 'Vải Fake 1'
},
{
    id: 7,
    name: 'Áo MU',
    image: 'https://musvn.com/_default_upload_bucket/Jersey/MUFC2022/MUFC21224.jpg',
    brand: 'DKS',
    price: 130000,
    chip: 'vải trơn'
},
{
    id: 8,
    name: 'Áo AC Milan',
    image: 'https://cf.shopee.vn/file/3af9b4d3867ed416b6b81ef56d328a52',
    brand: 'DKS',
    price: 140000,
    chip: 'Vải gai thường'
},
];

export default data;