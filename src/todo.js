/**
 * CREATE
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 *
 * READ
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 *
 * UPDATE
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 *
 * DELETE
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 */

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
function createTodo(content, category, tags) {}

/**
 * 1. 모든 Todo를 조회할 수 있다.
 * 2. ID를 기반으로 특정 Todo를 조회할 수 있다.
 * @param {Id} [id] - 해당 todo id
 * @return {Todo | Todo[]} id에 해당하는 Todo, 혹은 모든 Todo
 */
function readTodo(id) {}

/**
 * 1. ID를 기반으로 특정 Todo를 삭제할 수 있다.
 * 2. 모든 Todo을 제거할 수 있다.
 * 3. 특정 Todo의 특정 태그를 삭제할 수 있다.
 * 4. 특정 Todo의 모든 태그를 제거할 수 있다.
 * @param {Id} [id] - 해당 todo id
 * @param {Tag | undefined} [tag] - 삭제하고 싶은 tag
 */
function deleteTodo(id, tag) {}

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
function updateTodo(id, content, isComplete, category, tag) {}
