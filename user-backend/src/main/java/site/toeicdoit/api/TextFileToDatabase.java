package site.toeicdoit.api;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class TextFileToDatabase {

//    public static void loadData() {
//        // JDBC 연결 정보
//        String url = "jdbc:mysql://175.45.193.148:3306/userdb?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
//        String username = "root";
//        String password = "root";
//
//        // 텍스트 파일 경로
//        String filePath = "C:\\Users\\bitcamp\\IdeaProjects\\level-test\\frontend\\personal-project-toeicdoit\\user-server\\user-backend\\toeic.txt";
//
//        try {
//            // JDBC 드라이버 로드
//            Class.forName("com.mysql.cj.jdbc.Driver");
//
//            // 데이터베이스 연결
//            try (Connection connection = DriverManager.getConnection(url, username, password)) {
//                // JSON 파일 읽기
//                JSONParser parser = new JSONParser();
//                JSONObject jsonObject = (JSONObject) parser.parse(new FileReader(filePath));
//
//                // JSON 객체 순회하며 데이터베이스에 삽입
//                for (Object key : jsonObject.keySet()) {
//                    JSONObject quizObject = (JSONObject) jsonObject.get(key);
//
//                    String question = (String) quizObject.get("question");
//                    String answer = (String) quizObject.get("answer");
//                    String[] options = new String[4];
//                    for (int i = 1; i <= 4; i++) {
//                        options[i - 1] = (String) quizObject.get(String.valueOf(i));
//                    }
//
//                    String query = "INSERT INTO quiz (id, question, answer, option1, option2, option3, option4) VALUES (?, ?, ?, ?, ?, ?, ?)";
//                    try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
//                        preparedStatement.setString(1, (String) key);
//                        preparedStatement.setString(2, question);
//                        preparedStatement.setString(3, answer);
//                        for (int i = 0; i < options.length; i++) {
//                            preparedStatement.setString(i + 4, options[i]);
//                        }
//                        preparedStatement.executeUpdate();
//                    }
//                }
//
//                System.out.println("데이터베이스에 데이터 삽입 완료");
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//
//    public static void main(String[] args) {
//        loadData();
//    }
}
