import styled from "@emotion/styled";
import { FC } from "react";
import Title from "../Title";

const About: FC = () => {
  return (
    <Root>
      <Title>Обо мне</Title>
      <Text>
        Опытный фронтенд-разработчик, 5 лет опыта. Отлично владею HTML, CSS, JS,
        TS и фреймворком React, но готов изучать что-то новое. Люблю создавать
        удобные, быстрые и кросс-браузерные интерфейсы. Ориентирован на
        результат, внимателен к деталям.
        <br />
        <br />
        Считаю, что моими основными положительными качествами являются:
        амбициозность, самоорганизованность, ответственность, самообучаемость,
        внимательность к деталям и коммуникабельность.
        <br />
        <br />
        Свободное время уделяю спорту и саморазвитию.
      </Text>
      {/*<Subtitle>*/}
      {/*  Выполняемые задачи*/}
      {/*</Subtitle>*/}
      {/*<Text>*/}
      {/*  */}
      {/*</Text>*/}
    </Root>
  );
};

const Root = styled.div``;
const Text = styled.p`
  margin-bottom: 24px;
`;

export default About;
