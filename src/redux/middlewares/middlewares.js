export const myMiddleware = store => next => action => {
  console.log('work myMiddleware');

  return next(action);
};
