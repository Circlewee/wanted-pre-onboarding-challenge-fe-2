import instance from './axiosInstance';
import Api from './api';

const api = new Api(instance);

/** @typedef {string | number} Id */
/** @typedef {string} Content */
/** @typedef {boolean} IsComplete */
/** @typedef {string} Category */
/** @typedef {string} Tag */

/**
 * Todo interface
 * @typedef {object} Todo
 * @property {Id} id - Todo id
 * @property {Content} content - Todo 내용
 * @property {IsComplete} isComplete - Todo 완료 여부
 * @property {Category} category - Todo 카테고리
 * @property {Tag[] | null} tags - Todo 태그 list
 */

/**
 * Todo를 추가할 수 있다. (내용없이 추가할 수 없음)
 * @param {Content} content - Todo 내용
 * @param {Category} category - 카테고리
 * @param {Tag[]} [tags] - 태그 list
 * @return {Todo} 생성된 Todo
 */
async function createTodo(content, category, tags) {
  const response = await api.post('/post', { content, category, tags });

  return response;
}

/**
 * 1. 모든 Todo를 조회할 수 있다.
 * 2. ID를 기반으로 특정 Todo를 조회할 수 있다.
 * @param {Id} [id] - 해당 todo id
 * @return {Todo | Todo[]} id에 해당하는 Todo, 혹은 모든 Todo
 */
async function readTodo(id) {
  let endpoint = '/read/';

  if (id) {
    endpoint += id;
  } else {
    endpoint += 'all';
  }

  const response = await api.get(endpoint);

  return response;
}

/**
 * 1. ID를 기반으로 특정 Todo를 삭제할 수 있다.
 * 2. 모든 Todo을 제거할 수 있다.
 * 3. 특정 Todo의 특정 태그를 삭제할 수 있다.
 * 4. 특정 Todo의 모든 태그를 제거할 수 있다.
 * @param {Id} [id] - 해당 todo id
 * @param {Tag} [tag] - 삭제하고 싶은 tag
 */
async function deleteTodo(id, tag) {
  await api.delete('/delete', { id, tag });
}

/**
 * 1. ID를 제외한 모든 속성을 수정할 수 있다.
 * 2. 특정 Todo의 특정 태그를 수정할 수 있다.
 * @param {Id} id
 * @param {Content} [content] - Todo 내용
 * @param {IsComplete} [isComplete] - Todo 완료 여부
 * @param {Category} [category] - Todo 카테고리
 * @param {Tag} [tag] - Todo 태그 list
 * @return {Todo} update된 Todo
 */
async function updateTodo(id, content, isComplete, category, tag) {
  const response = await api.update(`/update/${id}`, { content, isComplete, category, tag });

  return response;
}
