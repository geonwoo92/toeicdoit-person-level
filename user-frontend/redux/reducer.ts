import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import countReducer from "@/app/component/counter/service/counter-slice";
import articleReducer from "@/app/component/article/service/article-slice";
import boardReducer from "@/app/component/board/service/board-slice";
import userReducer from "@/app/component/user/service/user-slice";
import quizReducer from "@/app/component/quiz/service/quiz-slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = {
  key: "count",
  storage,
  whitelist: ["countState"],
};
const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userState"],
};
const boardPersistConfig = {
  key: "board",
  storage,
  whitelist: ["boardState"],

};
const quizPersistConfig = {
  key: "quiz",
  storage,
  whitelist: ["quizState"],
};

const persistedCountReducer = persistReducer(countPersistConfig, countReducer);
const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedBoardReducer = persistReducer(boardPersistConfig, boardReducer);
const persistedQuizReducer = persistReducer(quizPersistConfig, quizReducer);

export const rootReducer = combineReducers({
  count: persistedCountReducer,
  article: persistedArticleReducer,
  user: persistedUserReducer,
  board: persistedBoardReducer,
  quiz: persistedQuizReducer
});

