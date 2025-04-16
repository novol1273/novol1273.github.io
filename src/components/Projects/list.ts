import dayjs from "dayjs";
import Treenity from "../../containers/projects/treenity";
import { TimeLineId } from "../TimeLine/types";

const workplaceItems = [
  {
    dateStart: dayjs("2023-06"),
    title: "Frontend Developer",
    id: "treenity" as TimeLineId,
    page: Treenity,
    subtitle: "Treenity",
    description: "Онлайн-конструктор сайтов",
  },
  {
    dateStart: dayjs("2023-02"),
    title: "Frontend Developer",
    id: "kvarum" as TimeLineId,
    page: Treenity,
    subtitle: "Kvarum",
    description:
      "Приложение для создания расписаний и эффективного планирования для повышения конверсии продаж.",
  },
  {
    dateStart: dayjs("2023-01"),
    dateEnd: dayjs("2023-06"),
    title: "Frontend Developer",
    id: "kortros" as TimeLineId,
    page: Treenity,
    subtitle: "Kortros",
    description: "Корпоративный сайт девелоперской компании КОРТРОС",
  },
  {
    dateStart: dayjs("2022-10"),
    dateEnd: dayjs("2023-01"),
    title: "Frontend Developer",
    id: "darwin" as TimeLineId,
    page: Treenity,
    subtitle: "Darwin",
    description: "Сайт финансовой организации",
  },
  {
    dateStart: dayjs("2022-02"),
    dateEnd: dayjs("2022-10"),
    title: "Frontend Developer",
    id: "cryptoFairies" as TimeLineId,
    page: Treenity,
    subtitle: "Crypto fairies",
    description: "Сайт финансовой организации",
  },
  {
    dateStart: dayjs("2021-08"),
    dateEnd: dayjs("2022-02"),
    title: "Frontend Developer",
    id: "jetup" as TimeLineId,
    page: Treenity,
    subtitle: "Jetup",
    description: "Сайт финансовой организации",
  },
  {
    dateStart: dayjs("2021-03"),
    dateEnd: dayjs("2021-08"),
    title: "Frontend Developer",
    id: "trustCar" as TimeLineId,
    page: Treenity,
    subtitle: "Trust Car",
    description: "Сервис аренды автомобилей",
  },
  {
    dateStart: dayjs("2019-09"),
    dateEnd: dayjs("2021-03"),
    title: "Frontend Developer",
    id: "izoneum" as TimeLineId,
    page: Treenity,
    subtitle: "Izoneum",
    description: "Сайт финансовой организации",
  },
];

export default workplaceItems;
