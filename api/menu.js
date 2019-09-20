export default [
  {
    id: 1,
    title: "主页",
    url: "index"
  },
  {
    id: 2,
    title: "关于喜鹊",
    url: "about",
    children: [
      {
        id: 3,
        title: "公司简介",
        url: "/about#0"
      },
      {
        id: 4,
        title: "发展历程",
        url: "/about#1"
      },
      {
        id: 5,
        title: "企业文化",
        url: "/about#2"
      },
      {
        id: 6,
        title: "企业资讯",
        url: "/about#3"
      }
    ]
  },
  {
    id: 7,
    title: "喜鹊业务",
    url: "business",
    children: [
      {
        id: 8,
        title: "业务范围",
        url: "/business#0"
      },
      {
        id: 9,
        title: "产品品类",
        url: "/business#1"
      },
      {
        id: 10,
        title: "经营模式",
        url: "/business#2"
      },
      {
        id: 11,
        title: "供应商招募",
        url: "/business#3"
      }
    ]
  },
  {
    id: 12,
    title: "加入喜鹊",
    url: "join",
    children: [
      {
        id: 13,
        title: "人在喜鹊",
        url: "/join#0"
      },
      {
        id: 14,
        title: "社会招聘",
        url: "/join#1"
      },
      {
        id: 15,
        title: "校园招聘",
        url: "/join#2"
      }
    ]
  },
  {
    id: 16,
    title: "联系我们",
    url: "contact"
  }
];
