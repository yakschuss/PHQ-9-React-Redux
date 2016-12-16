import { UPDATE_PROGRESS } from './actions';
import { createStore, compose } from 'redux';
import { questions } from '../fixtures/testQuestions';

const DEFAULT_STATE = {
  testScore: 0,
  questionCount: 0,
  continue: true,
  question: questions[0]
};

const updateTestProgress = (state = DEFAULT_STATE, action) => {
  const newState = {};
  const newScore = state.testScore + action.answer;
  const newCount = state.questionCount + 1;

  if (questions[newCount]) {
    var currentQ = questions[newCount];
  } else {
    Object.assign(newState, state, { continue: false, testScore: newScore });
    return newState;
  }

  console.log(currentQ);

  Object.assign(newState, state, { testScore: newScore, questionCount: newCount, question: currentQ });

  return newState;
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_PROGRESS:
      return updateTestProgress(state, action);
    default:
      return state;
  }
};

export const store = createStore(rootReducer, DEFAULT_STATE, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
));

