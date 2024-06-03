"use client"

"use client";

import React, { useState, useEffect } from 'react';

interface Quiz {
  id: number;
  question: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

const QuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  const fetchQuiz = () => {

    console.log('Fetching quiz...');
    fetch('http://localhost:8080/quizzes/random', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Quiz data:', data);
        setQuiz(data);
        setSelectedAnswer(null);
        setFeedback(null);

      })
      .catch((error) => {
        console.error('Error fetching quiz:', error);
      });
  };

  useEffect(() => {
    console.log('useEffect count:', count);
    console.log('useEffect correct:', correct);
    if (count == 10) {

      alert('퀴즈가 끝났습니다.');
      alert(`당신의 점수는 ${correct * 10}점 입니다.`);
      setCount(0);
      setCorrect(0);
      return;

    } else {
      fetchQuiz();
      checkAnswer();

    };

  }, [count]);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    setCount(count + 1)
  };

  const checkAnswer = () => {
    if (selectedAnswer === quiz?.answer) {


      // setFeedback(`${selectedAnswer}은 정답입니다!`);
      setCorrect(correct + 1);

    } else {
      // setFeedback(`${selectedAnswer}은 오답입니다! 정답:${quiz?.answer} `);
    }
  };

  return (
    <div>
      <h1>토익 레벨 테스트</h1><br />

      {count + 1} / 10<br /><br />

      {quiz && (
        <div>
          <h2>{quiz.id}.</h2>
          <h2>문제: {quiz.question}</h2><br />
          <p onClick={() => handleAnswerSelection(quiz.option1)} style={{ cursor: 'pointer' }}>
            ① : {quiz.option1}
          </p>
          <p onClick={() => handleAnswerSelection(quiz.option2)} style={{ cursor: 'pointer' }}>
            ② : {quiz.option2}
          </p>
          <p onClick={() => handleAnswerSelection(quiz.option3)} style={{ cursor: 'pointer' }}>
            ③ : {quiz.option3}
          </p>
          <p onClick={() => handleAnswerSelection(quiz.option4)} style={{ cursor: 'pointer' }}>
            ④ : {quiz.option4}
          </p>
        </div>
      )}




      {/* {selectedAnswer && (
        <button onClick={checkAnswer}>정답 확인</button>
      )}
      <br />
      {feedback && <p>{feedback}</p>} */}

      {/* <button onClick={fetchQuiz}>다음 문제</button> */}
    </div>
  );
};

export default QuizPage;
