export const initialState = {
    detail: {},
}

export const DetailTypes = {
    SET_DETAIL: 'DETAIL/SET_DETAIL',      
}
    
export function reducer(detailDto = initialState, action) {
  switch (action.type) {
    case DetailTypes.SET_DETAIL:
        return { ...detailDto, detail: action.detail }
    default:
      return detailDto
  }
}