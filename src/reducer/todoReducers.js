const initialData = {
    list: []
}


const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            alert('added');
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                    //updated data
                    id: id,
                    data: data
                }]
            }
        
        case "DELETE_TODO":
            alert('deleted');
            
            const newList = state.list.filter((element) => element.id != action.id);
            return {
                ...state,
                list: newList
            }

        case "REMOVE_TODO":
            alert('all removed');
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }
}

export default todoReducers;