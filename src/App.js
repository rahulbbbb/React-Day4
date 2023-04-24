import ProfileCard from "./components/ProfileCard";
import './App.css'


function App() {
  return (
    <div className="card-container">
      <ProfileCard
        image="https://randomuser.me/api/portraits/men/10.jpg"
        designation="Web Developer"
        name="Rahul Bankoti"
        jobDescription= "Software engineer with a passion for creating clean, efficient code and developing innovative solutions."
      />
      <ProfileCard
        image="https://randomuser.me/api/portraits/women/3.jpg"
        designation="Software Engineer"
        name="Sam"
        jobDescription="Software engineer with a passion for creating clean, efficient code and developing innovative solutions."
      />
      <ProfileCard
        image="https://randomuser.me/api/portraits/men/11.jpg"
        designation="UI/UX Designer"
        name="Adi"
        jobDescription="Talented UI/UX designer with a keen eye for detail and a passion for creating visually stunning UI."
      />
    </div>
  );
}

export default App;

