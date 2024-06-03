package site.toeicdoit.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class Application {

	public static void main(String... args) {

		SpringApplication.run(Application.class, args);

//		// 텍스트 파일을 읽어서 데이터베이스에 넣는 작업 수행
//		TextFileToDatabase.loadData();
	}
}