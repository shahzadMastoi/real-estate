import { AiFillStar } from 'react-icons/ai';
import { TbStarHalfFilled } from 'react-icons/tb';
import styles from './style.module.scss'
import { Menu } from 'antd';

const { Item } = Menu;

const names = [
    '7 Bedrooms', 'Gym for all', 'Air Conditioning', 'CC Camera', 'icon',
    '3 Garages', 'Cable TV', '10 Nearby Restaurants', 'Internet', 'Security System', '10 Nearby Restaurants',
    '6 Nearby Schools', 'Dishwasher', '5 Balconies',
];

const ItemName = (props:any) => (
    <>
        {names.map((item, index) => (
            <div key={index} className={`${props ? styles.propsStyle : styles.attributesItems}`}>
                <img src="/properties/check.webp" alt="" />
                <p>{item}</p>
            </div>
        ))}
    </>
);

export default ItemName;


export const Reviews = [
    {
        src: '/properties/medist.webp',
        title: 'Mediset Hospital Ltd.',
        distance: '(0.5 km distance)',
        icon: [
            <AiFillStar color='#b79956'/>, <AiFillStar color='#b79956'/>, <AiFillStar color='#b79956'/>, <AiFillStar color='#b79956'/>, <AiFillStar color='#b79956'/>
        ],
        reviews: '(320 Reviews)s'
    },
    {
        src: '/properties/healthcare.webp',
        title: 'Mediset Hospital Ltd.',
        distance: '(0.5 km distance)',
        icon: [
            <AiFillStar color='#0b2c3d'/>, <AiFillStar color='#0b2c3d'/>, <AiFillStar color='#0b2c3d'/>, <AiFillStar color='#0b2c3d'/>, <TbStarHalfFilled color='#0b2c3d'/>
        ],
        reviews: '(320 Reviews)s'
    },
    {
        src: '/properties/medihealth.webp',
        title: 'Mediset Hospital Ltd.',
        distance: '(0.5 km distance)',
        icon: [
            <AiFillStar color='#0b2c3d'/>, <AiFillStar color='#0b2c3d'/>, <AiFillStar color='#0b2c3d'/>, <AiFillStar color='#0b2c3d'/>, <TbStarHalfFilled color='#0b2c3d'/>
        ],
        reviews: '(320 Reviews)s'
    }
];


export const Feedback = [
    {
         src:'/properties/02.webp',
         name: 'Stela Flemming,',
         date: '20 Jan, 2022',
         dscrpt: 'Bary do a great job to find the perfect home. It’s very easy for every one to buy, sell or rent property we belive they continure their great service and appriciat.',
         like: 'Like',
         reply: 'Reply'
    },
    {
        src: '/properties/01.webp',
        name: 'Stela Flemming,',
        date: '20 Jan, 2022',
        dscrpt: 'Bary do a great job to find the perfect home. It’s very easy for every one to buy, sell or rent property we belive they continure their great service and appriciat.',
        like: 'Like',
        reply: 'Reply',
        marginLeft: '100px'
   },
   {
    src: '/properties/03.webp',
    name: 'Stela Flemming,',
    date: '20 Jan, 2022',
    dscrpt: 'Bary do a great job to find the perfect home. It’s very easy for every one to buy, sell or rent property we belive they continure their great service and appriciat.',
    like: 'Like',
    reply: 'Reply'
}
]

export const items = (
    <Menu>
        <Item key="1">Option 1</Item>
        <Item key="2">Option 2</Item>
        <Item key="3">Option 3</Item>
    </Menu>
);