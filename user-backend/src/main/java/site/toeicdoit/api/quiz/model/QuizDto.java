package site.toeicdoit.api.quiz.model;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuizDto {
    private Long id;
    private String question;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
}