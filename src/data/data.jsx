import { AiFillFacebook, AiFillYoutube, AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'
import airplane from '../assets/images/aur.jpg'
import delta from '../assets/images/delta.jpg'
import bannerImage01 from '../assets/svg/banner.svg'

export const navLinks = [
    {
        id: 1,
        name: "Home",
        link: '/'
    },
    {
        id: 2,
        name: "Who We Are",
        link: '/who-we-are'
    },
    {
        id: 3,
        name: "Explore",
        link: '/explore'
    },
    {
        id: 4,
        name: "Priorities",
        link: '/priorities'
    },
    {
        id: 5,
        name: "Laws & Regulations",
        link: '/laws-and-regulations'
    }
]
// footer information
export const usefulLinks = [
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Explore",
      link: "/explore",
    },
    {
      name: "Laws & Regulations",
      link: "/laws-and-regulations",
    },
  ];
  export const priorities = [
    {
      name: "Safety & Security",
      link: "/about-us",
    },
    {
      name: "Air Transport Growth",
      link: "/air-transport",
    },
    {
      name: "Air Navigation Standard",
      link: "/air-navigation",
    },
  ];

  export const navFooter = [
    {
      name: "Facebook",
      icon: AiFillFacebook,
      color: "blue",
      link: "https://www.facebook.com/sharer/sharer.php?u=",
    },
    {
      name: "Youtube",
      icon: AiFillYoutube,
      color: "red",
      link: "https://www.youtube.com/channel/UC-1-9999999999999999999999999999999",
    },
    {
      name: "WhatsApp",
      icon: AiOutlineWhatsApp,
      color: "green",
      link: "https://api.whatsapp.com/send?phone=",
    },
    {
      name: "admin@sscaa.com",
      icon: AiOutlineMail,
      link: "hrr",
    },
  ];

  // trends section
  export const TrendsAPi = [
    {
      id: 1,
      name: "DELTA REPORTS $15.6BN LOSS FOR FINANCIAL 2020",
      image: airplane,
      body: "Delta Air Lines has reported a pre-tax loss of $15.6 billion for financial 2020, representing a loss per share of $19.49 on total revenue of $17.1 billion. In the December quarter alone, the carrier saw pre-tax losses of $1.1 billion. “Our December quarter results"
    },
    {
      id: 2,
      name: "Wizz Air Abu Dhabi to add Tel Aviv flights next month",
      image: delta,
      body: "Delta Air Lines has reported a pre-tax loss of $15.6 billion for financial 2020, representing a loss per share of $19.49 on total revenue of $17.1 billion. In the December quarter alone, the carrier saw pre-tax losses of $1.1 billion. “Our December quarter results"
    },
    {
      id: 3,
      name: "DELTA REPORTS $15.6BN LOSS FOR FINANCIAL 2020",
      image: airplane,
      body: "Delta Air Lines has reported a pre-tax loss of $15.6 billion for financial 2020, representing a loss per share of $19.49 on total revenue of $17.1 billion. In the December quarter alone, the carrier saw pre-tax losses of $1.1 billion. “Our December quarter results"
    },
    {
      id: 4,
      name: "Wizz Air Abu Dhabi to add Tel Aviv flights next month",
      image: delta,
      body: "Delta Air Lines has reported a pre-tax loss of $15.6 billion for financial 2020, representing a loss per share of $19.49 on total revenue of $17.1 billion. In the December quarter alone, the carrier saw pre-tax losses of $1.1 billion. “Our December quarter results"
    }
  ]
  // banner slide image
  export const bannerSlider = [
    {
      image: bannerImage01,
      title: "Break Camp",
      and: "&",
      subtitle: "Move Forward",
    },
    // {
    //   image: airplane,
    //   title: "Leadership",
    //   and: "",
    //   subtitle: "Transformation",
    // },
    // {
    //   image: delta,
    //   title: "Dance",
    //   and: "for",
    //   subtitle: "the Lord",
    // },
  ];

  // section01
  export const sectiondata = {
    news: [
      {
       img: airplane,
      },
      {
        img: delta
      },
      {
        img: airplane
      },
      {
        img: delta
      },
      {
        img: airplane,
       },
       {
         img: delta
       },
       {
         img: airplane
       },
       {
         img: delta
       }
    ],
  };