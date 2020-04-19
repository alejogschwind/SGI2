export const addFlashMessage = message => ({
  type: 'ADD_FLASH_MESSAGE',
  payload: message
});

export const deleteFlashMessage = id => ({
  type: 'DELETE_FLASH_MESSAGE',
  payload: id
});

export const deleteFlashMessages = () => ({
  type: 'DELETE_FLASH_MESSAGES'
});