import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Approach from './components/Approach/approach';
import Directions from './components/Directions/directions';
import Documents from './components/Documents/Documents';
import Footer from './components/Footer/Footer';
import InfoDirector from './components/InfoDirector/infoDirector';
import Navbar from './components/Navbar/navbar';
import Questions from './components/Questions/Questions';
// import ReviewsSlider from './components/ReviewsSlider/reviewsSlider';
// import SkladReabil from './components/SkladReabil/skladReadbil';
// import SkladTeach from './components/SkladTeach/skladTeach';
import Slider from './components/Slider/slider';
import Sklad from './components/Sklad/sklad';

const itemsDocument = [
  {
    title: "Статут Навчально-реабілітаційного центру №17.pdf",
    url: "src/assets/documents/Статут Навчально-реабілітаційного центру №17.pdf"
  },
  {
    title: "Полження про дошкільне відділення.pdf",
    url: "src/assets/documents/Полження про дошкільне відділення.pdf"
  },
  {
    title: "Положення про реабілітаційне відділення.pdf",
    url: "src/assets/documents/Положення про реабілітаційне відділення.pdf"
  },
  {
    title: "Полження про про спеціальну школу I-II ступенів.pdf",
    url: "src/assets/documents/Полження про про спеціальну школу I-II ступенів.pdf"
  },
  {
    title: "Полження про інтернат.pdf",
    url: "src/assets/documents/Полження про інтернат.pdf"
  },
  {
    title: "Положення про організацію пропускного режиму і правила поведінки відвідувачів.pdf",
    url: "src/assets/documents/Положення про організацію пропускного режиму і правила поведінки відвідувачів.pdf"
  },
  {
    title: "Положення про реабілітаційне відділення.pdf",
    url: "src/assets/documents/Положення про реабілітаційне відділення.pdf"
  },
  {
    title: "Полження про про спеціальну школу I-II ступенів.pdf",
    url: "src/assets/documents/Полження про про спеціальну школу I-II ступенів.pdf"
  },
  {
    title: "Полження про інтернат.pdf",
    url: "src/assets/documents/Полження про інтернат.pdf"
  },
  {
    title: "Положення про організацію пропускного режиму і правила поведінки відвідувачів.pdf",
    url: "src/assets/documents/Положення про організацію пропускного режиму і правила поведінки відвідувачів.pdf"
  }
]
const itemsQuestionFirst = [
  {
    title: "Які умови зарахування до школи?",
    subtitle: "",
  },
  {
    title: "Скільки коштує навчання?",
    subtitle: "",
  },
  {
    title: "Яке в школі харчування?",
    subtitle: "",
  },
  {
    title: "Чи можна залишати дитину на вихідні?",
    subtitle: "",
  }
]
const itemsQuestionSecond = [
  {
    title: "Як складається план з реабілітації?",
    subtitle: "",
  },
  {
    title: "Якою мовою відбувається навчання?",
    subtitle: "Все навчання відбувається українською мовою",
  },
  {
    title: "Чи зможе дитина отримати професію після навчання?",
    subtitle: "",
  },
  {
    title: "За якою програмою відбувається навчання?",
    subtitle: "",
  }
]
const listOneFooter = [
  {
    name: "Про центр",
    url: ""
  },
  {
    name: "Викладацький склад",
    url: ""
  },
  {
    name: "Вакансії",
    url: ""
  },
  {
    name: "Спонсорство",
    url: ""
  },
  {
    name: "Документи закладу",
    url: ""
  },

]
const listTwoFooter = [
  {
    name: "Спеціальна школа-інтернат",
    url: ""
  },
  {
    name: "Дошільний навчальний заклад",
    url: ""
  },
  {
    name: "Реабілітаційний центр",
    url: ""
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Directions />
      <InfoDirector />
      <Approach />
      <Sklad />
      <Slider />
      <Documents title="Документи закладу" subtitle="Для дітей з тяжкими порушеннями мовлення
                        у поєднанні з порушеннями інтелектуального розвитку або затримкою психічного розвитку" items={itemsDocument}/>
      <Questions title="Запитання та відповіді" subtitle="Для дітей з тяжкими порушеннями мовлення у поєднанні
                        з порушеннями інтелектуального розвитку або затримкою психічного розвитку" itemsFirst={itemsQuestionFirst}
                 itemsSecond={itemsQuestionSecond}/>
      <Footer listOne={listOneFooter} listTwo={listTwoFooter}/>
    </div>
  );
}

export default App;
