import AboutMarket from "./components/AboutMarket/AboutMarket";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Directions from "./components/Directions/Directions";
import GetConsultation from "./components/GetConsultation/GetConsultation";
import InfoLayout from "./components/InfoLayout/InfoLayout";
import ListLayout from "./components/ListLayout/ListLayout";
import Numbers from "./components/Numbers/Numbers";
import Price from "./components/Price/Price";
import TitleSection from "./components/TitleSection/TitleSection";
import WeWorkWith from "./components/WeWorkWith/WeWorkWith";
import WhyNow from "./components/WhyNow/WhyNow";

function App() {
  return (
    <>
      <TitleSection />
      <AboutUs />
      <WhyNow />
      <WeWorkWith />
      <AboutMarket />
      <ListLayout
        data={[
          "Компетенции",
          "Информационная поддержка",
          "Консалтинг и консультации",
          "Сопровождение в торгах",
          "Регистрация и подготовка",
          "Финансовая поддержка",
          "Специальные условия",
        ]}
      />
      <Price />
      <ListLayout
        data={[
          "Услуги",
          "24/7 поддержка наших специалистов",
          "Удалённое сопровождение в закупках",
          "Сопровождение в ФАС",
          "Готовим форму №2",
          "Сопровождаем компанию по всем этапам торгов",
          "Стать партнером",
        ]}
      />
      <InfoLayout
        title="Мы не забираем ЭЦП, сохраняя
конфиденциальность и заботясь
о чистоте всех процессов."
        text="Персональные атрибуты тендерной деятельности
компании не допустимо передавать в третьи руки."
      />
      <Directions
        data={[
          "Основные направления",
          "Поставки/снабжение",
          "Изготовление полиграфии",
          "Разработка ПО",
          "Благоустройство",
          "Логистика",
          "Услуги",
          "Строительство до 25 млн",
          "Техническое обслуживание",
        ]}
      />
      <InfoLayout
        title="Гарантии"
        text="Мы гарантируем, что ваша заявка
на участие будет соответствовать
законодательству и регламентам
участия, что позволит вам
не получить отказ на этапе
подачи заявки."
      />
      <Numbers />
      <GetConsultation />
      <Contacts />
    </>
  );
}

export default App;
