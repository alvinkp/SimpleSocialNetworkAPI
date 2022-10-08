const userData = [
  {
    userName: "sprimrose0",
    email: "csallery0@wsj.com",
  },
  {
    userName: "etweedle1",
    email: "nledwith1@house.gov",
  },
  {
    userName: "lpitrelli2",
    email: "gpursehouse2@ebay.com",
  },
  {
    userName: "mflisher3",
    email: "awinsor3@mail.ru",
  },
  {
    userName: "kscrogges4",
    email: "rthickins4@github.com",
  },
  {
    userName: "cclaricoats5",
    email: "bramos5@jiathis.com",
  },
  {
    userName: "gestick6",
    email: "bbennen6@mashable.com",
  },
  {
    userName: "lwakeley7",
    email: "tberre7@163.com",
  },
  {
    userName: "vsyde8",
    email: "odarrigoe8@newyorker.com",
  },
  {
    userName: "agoudy9",
    email: "edomniney9@4shared.com",
  },
];

const getRandomUser = () => {
  userData[Math.floor(Math.random() * userData.length)];
};

module.exports = {
  getRandomUser,
  userData,
};
