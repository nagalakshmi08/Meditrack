// Home.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import 'animate.css/animate.css';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout for each word
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add('animate__animated', 'animate__fadeIn');
      }, 500 * index); // Adjust the delay as needed
    });

    // Set a timeout to make the entire sentence visible
    setTimeout(() => {
      setIsVisible(true);
    }, 500 * words.length);
  }, []);

  function handleAddMedicine() {
    navigate("/add");
  }

  function handleViewMedicines() {
    navigate("/view");
  }

  return (
    <>
      <h1 className={`home-title ${isVisible ? 'visible' : ''}`}>
        <span className="word">Welcome to MediTrack!</span>
      </h1>
      <div className="card-container">
        <Card className="card">
          <CardBody className="card-content">
          📝 Enter information about the medicines crafted by your company, and in return, receive a Quick Response (QR) code. 🚀 This user-friendly process allows for the organized recording of vital details related to the manufactured medications, enhancing clarity and accessibility. 🌐💊
          </CardBody>
          <CardFooter className="pt-0">
            <Button className='card-button' onClick={handleAddMedicine}>
              Add medicine
            </Button>
          </CardFooter>
        </Card>

        <Card className="card">
          <CardBody className="card-content">
          Explore the comprehensive list of medicines and their associated details that you have added to the system. Gain insights into each medication's information and ensure a clear understanding of the records you've contributed. 📋💡
          </CardBody>
          <CardFooter className="pt-0">
            <Button className='card-button' onClick={handleViewMedicines}>
              View medicines
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Home;
