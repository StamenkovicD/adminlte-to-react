import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 
    [
      {title: "Support Team", message: 'Why not buynew awesome theme?', time: '5min', image: 'user2-160x160.jpg', imageAlt: 'image-user2'},
      {title: "Admin LTE Team", message: 'Why not buynew awesome theme?', time: '2 hours', image: '/user3-128x128.jpg', imageAlt: 'image-user3'},
      {title: "Developers", message: 'Why not buynew awesome theme?', time: 'Today', image: 'user4-128x128.jpg', imageAlt: 'image-user2'},
      {title: "Sales Department", message: 'Why not buynew awesome theme?', time: 'Yesterday', image: 'user3-128x128.jpg', imageAlt: 'image-user2'},
  ],
  currentUser: {
    name: 'Alexander Pierce',
    status: 'Online',
    currentUserImage: 'user2-160x160.jpg',
    imageAlt: 'image-user2'

  },
},


  reducers: {
    login: (state, action) => {
      state.value = action.payload
    }
  }
  
});

export default userSlice.reducer;