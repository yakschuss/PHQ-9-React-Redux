import { UPDATE_PROGRESS } from './actions'

export function updateTestProgress(answer) {
  return { type: UPDATE_PROGRESS, answer }
}
