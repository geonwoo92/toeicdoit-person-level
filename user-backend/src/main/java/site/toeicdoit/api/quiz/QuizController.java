package site.toeicdoit.api.quiz;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.toeicdoit.api.quiz.model.Quiz;
import site.toeicdoit.api.quiz.service.QuizService;
import site.toeicdoit.api.quiz.service.QuizServiceImpl;

import java.util.List;
@ApiResponses(value = {
        @ApiResponse(responseCode = "400", description = "Invalid ID supplied"),
        @ApiResponse(responseCode = "404", description = "Customer not found")})
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RequestMapping(path = "/quizzes")
@Log4j2
public class QuizController {
    private final QuizServiceImpl quizService;


    @GetMapping("/random")
    public Quiz getRandomQuiz() {
        return quizService.getRandomQuiz();
    }


}