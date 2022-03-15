import { useCreateMutation } from '../../services/todos.service'

export function useCreateData() {
    const [submitFn, creationData] = useCreateMutation()
    return (data) => {
      return submitFn(data)
        .unwrap()
        .then(result => {
          return {result, creationData }
        }).catch((error) => {
            return {error, creationData}
        })
    }
  }
  