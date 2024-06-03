package site.toeicdoit.api.quiz.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import site.toeicdoit.api.quiz.model.Quiz;
import site.toeicdoit.api.quiz.repository.QuizRepository;

import java.util.List;

@Service
@Log4j2
@RequiredArgsConstructor
public class QuizServiceImpl implements QuizService {

    private final QuizRepository quizRepository;


    public Quiz getRandomQuiz() {
        List<Quiz> quizzes = quizRepository.findRandomQuiz();
        return quizzes.isEmpty() ? null : quizzes.get(0);
    }



}


