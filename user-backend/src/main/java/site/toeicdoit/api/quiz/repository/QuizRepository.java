package site.toeicdoit.api.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import site.toeicdoit.api.quiz.model.Quiz;

import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {

    @Query("SELECT q FROM quiz q ORDER BY RAND() limit 1")
    List<Quiz> findRandomQuiz();


}
