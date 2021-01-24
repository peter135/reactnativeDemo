import { DetailTypes } from '../common/detail.dto'

export class DetailAction {  
     static actions = {
  
      setDetail:(detail) => {
        return async (dispatcher) => {
          dispatcher(
            { type: DetailTypes.SET_DETAIL, detail: detail }
          )
        }
      }

    }   
}
