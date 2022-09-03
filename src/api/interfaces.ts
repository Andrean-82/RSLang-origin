export type Word = {
    userWord: any;
    id: string;
    _id?: string;
    group: string;
    page: string;
    word: string;
    image: string;
    audio: string;
    audioMeaning: string;
    audioExample: string;
    textMeaning: string;
    textExample: string;
    transcription: string;
    textExampleTranslate: string;
    textMeaningTranslate: string;
    wordTranslate: string;
};

export interface IUserWord{
    wordId?:string
    difficulty: string
    optional: {
      learned:boolean
      learningProgress: number
      correctAnswerCounter:number
      incorrectAnswerCounter:number
    }
  }
  export interface IResponse {
    wordId:string,
    difficulty:string,
    id:string,
    optional:{
      learned: boolean,
      learningProgress: number
      correctAnswerCounter: number
      incorrectAnswerCounter: number
    }
  }

  export interface IUser{
    name?: string,
    email: string,
    password: string
  }
  
  export interface IUserWord{
    wordId?:string
    difficulty: string
    optional: {
      learned:boolean
      learningProgress: number
      correctAnswerCounter:number
      incorrectAnswerCounter:number
    }
  }

  export interface ILoggedUser{
    message: string,
    token: string,
    refreshToken: string,
    userId: string,
    name: string
    email?: string
  }